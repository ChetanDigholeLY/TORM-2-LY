import { Component } from "@angular/core";

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
})
export class DatePickerComponent {
  selectedFrom = customDateFormatter(new Date());
  selectedTo = customDateFormatter(new Date(new Date().getDate() + 1));

  change(event: any) {
    console.log(event.endDate.utcOffset(330).toDate());
    this.selectedFrom = customDateFormatter(event.startDate.toDate());
    this.selectedTo = customDateFormatter(event.endDate.toDate());
  }
}
