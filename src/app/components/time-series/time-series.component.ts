import { Component } from "@angular/core";

@Component({
  selector: "app-time-series",
  templateUrl: "./time-series.component.html",
  styleUrls: ["./time-series.component.css"],
})
export class TimeSeriesComponent {
  isTimeSeriesSideBar = false;
  // TODO: Change to false;
  showDatePicker = true;

  timeSeriesSideBarFunc() {
    this.isTimeSeriesSideBar = !this.isTimeSeriesSideBar;
  }

  onCalendarButtonClick(event: any) {
    event.stopPropagation();
    this.showDatePicker = !this.showDatePicker;
  }

  closeDatePicker() {
    this.showDatePicker = false;
  }
}
