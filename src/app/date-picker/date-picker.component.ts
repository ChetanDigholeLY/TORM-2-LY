import { KeyValue } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import dayjs from "dayjs";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

function customDateFormatter(date: Date | number | any): String {
  return dateFormatter.format(date)
    .replaceAll("/", "-")
    .replaceAll(",", " ");
}

@Component({
  selector: "date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"],
  host: {
    "(document:click)": "onDocumentClick($event)",
  },
})
export class DatePickerComponent {
  selectedFrom = customDateFormatter(new Date());
  selectedTo = customDateFormatter(new Date(new Date().getDate() + 1));

  @ViewChild("datepicker")
  datePickerRef: any;
  @ViewChild("container")
  container: any;

  @Input()
  showDatePicker = false;

  @Output()
  closeDatePickerEvent = new EventEmitter<any>();

  onDocumentClick(event: any) {
    if (!this.container?.nativeElement.contains(event.target)) {
      this.closeDatePickerEvent.emit();
    }
  }

  ranges: any = {
    "Last Hour": [dayjs().subtract(1, "hour"), dayjs()],
    "Last 3 hours": [dayjs().subtract(3, "hour"), dayjs()],
    "Last 12 hours": [dayjs().subtract(12, "hour"), dayjs()],
    "Last 24 hours": [dayjs().subtract(24, "hour"), dayjs()],
    "Last week": [dayjs().subtract(6, "days"), dayjs()],
    "Last Month": [
      dayjs().subtract(1, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],
    "Last 3 Month": [
      dayjs().subtract(3, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],
    "Last Year": [
      dayjs().subtract(1, "year").startOf("month"),
      dayjs(),
    ],
    "All": [dayjs(), dayjs()],
  };

  originalOrder = (
    _a: KeyValue<number, string>,
    _b: KeyValue<number, string>,
  ): number => {
    return 0;
  };

  updateDateRange() {
    let dates = this.datePickerRef.chosenLabel.split("-").map((date: string) =>
      date.trim()
    );
    this.selectedFrom = customDateFormatter(new Date(dates[0]));
    this.selectedTo = customDateFormatter(new Date(dates[1]));
  }

  onRangeButtonClick(event: any) {
    this.datePickerRef.setStartDate(event[0]);
    this.datePickerRef.setEndDate(event[1]);
    this.updateDateRange();
    this.datePickerRef.updateCalendars();
  }

  onActionButtonClick() {
    this.closeDatePickerEvent.emit();
  }
}
