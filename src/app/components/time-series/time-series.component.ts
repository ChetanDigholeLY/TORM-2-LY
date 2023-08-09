import { Component, Pipe, PipeTransform } from "@angular/core";
import dayjs, { Dayjs } from "dayjs";

@Pipe({ name: "removetime" })
export class RemoveTime implements PipeTransform {
  transform(value: string): string {
    const splitBy = " ";
    const splittedText = value.split(splitBy);
    return splittedText[0];
  }
}

type SelectedDate = {
  label: string;
  value: Dayjs;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

function customDateFormatter(date: Date | number | any): string {
  return dateFormatter.format(date)
    .replaceAll("/", "-")
    .replaceAll(",", " ");
}

@Component({
  selector: "app-time-series",
  templateUrl: "./time-series.component.html",
  styleUrls: ["./time-series.component.css"],
})
export class TimeSeriesComponent {
  isTimeSeriesSideBar = false;

  isSearchInput: boolean = false;

  handleSearchInput(event: any){
    const val = event.target.value;
    if(val){
      this.isSearchInput = true;
    }
    else{
      this.isSearchInput = false
    }
  }

  // TODO: Change to false;
  showDatePicker = false;
  selectedPredefinedValue = "";
  selectedStartDate: SelectedDate = {
    label: customDateFormatter(dayjs()),
    value: dayjs(),
  };
  selectedEndDate: SelectedDate = {
    label: customDateFormatter(dayjs().add(1, "day")),
    value: dayjs().add(1, "day"),
  };

  timeSeriesSideBarFunc() {
    this.isTimeSeriesSideBar = !this.isTimeSeriesSideBar;
  }

  onCalendarButtonClick(event: any) {
    event.stopPropagation();
    this.showDatePicker = !this.showDatePicker;
  }

  closeDatePicker(
    event: {
      range: Array<Dayjs>;
      predefinedValue: string;
    },
  ): void {
    if (!event) {
      this.showDatePicker = false;
      return;
    }

    const { range, predefinedValue } = event;

    if (range.length) {
      this.selectedStartDate = {
        label: customDateFormatter(range[0]),
        value: range[0],
      };
      this.selectedEndDate = {
        label: customDateFormatter(range[1]),
        value: range[1],
      };
    }
    this.selectedPredefinedValue = predefinedValue;
    this.showDatePicker = false;
  }
}
