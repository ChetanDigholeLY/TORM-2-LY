import { Component } from '@angular/core';

const tabIndex: { [key: string]: number } = {
  'vessel defination': 0,
  'report fuel allowance': 4
}

interface vesselDetails {
  vesselName: string,
  vesselID: number,
  vesselIMO: number,
  vesselActive: boolean,
  vesselStartDate: string,
  vesselEndDate: string,
  isEditing: boolean
}

interface reportFuelAllowance {
  vesselName: string,
  vesselID: number,
  vesselIMO: number,
  code: string,
  speedAnalysisMeter: number,
  windAnalysis: number,
  boilerFuel: number,
  extraAUX: number,
  boilerRun: number,
  AUXEngFuel: number,
  placeHolder: string,
  isEditing: boolean
}

type ActiveSort = null | 'ascending' | 'descending';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  adminTabsArr = [true, false, false, false, false , false, false];
  columns = [];
  activeColumnID?: string;
  activeSort : ActiveSort = null;

  adminTabFunc(val: string) {
    for (let i = 0; i < this.adminTabsArr.length; i++) {
      this.adminTabsArr[i] = false;
    }
    let temp = tabIndex[val]
    this.adminTabsArr[temp] = true;
    // console.log(this.adminTabsArr);
  }


  vesselDetail: vesselDetails[] = [
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: false, vesselStartDate: '2023-06-01', vesselEndDate: "2023-07-30", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2023-06-01', vesselEndDate: "--", isEditing: false },
  ]

  
  //edit all function starts
  isAllEdit: boolean = true;

  toggleAllEdit(){
    if(this.adminTabsArr[0] === true){
      this.isAllEdit = !this.isAllEdit;
      this.vesselDetail.forEach(eachEle => eachEle.isEditing = this.isAllEdit)
    }
    if(this.adminTabsArr[4] === true){
      this.isAllEdit = !this.isAllEdit;
      this.reportFuelAllowanceArr.forEach(eachEle => eachEle.isEditing = this.isAllEdit)
    }
  }

  resetEdit(){
    if(this.adminTabsArr[0] === true){
      this.isAllEdit = !this.isAllEdit;
      this.vesselDetail.forEach(eachEle => eachEle.isEditing = this.isAllEdit)
    }
    if(this.adminTabsArr[4] === true){
      this.isAllEdit = !this.isAllEdit;
      this.reportFuelAllowanceArr.forEach(eachEle => eachEle.isEditing = this.isAllEdit)
    }
  }

  //edit all function ends

   indexVesselDetailStart: any = null;
   indexVesselDetailEnd: any = null;

  openDatePicker(i:number): void {
    const datePicker = document.querySelector('.hideInputDate') as HTMLInputElement;
    if (datePicker) {
      datePicker.focus(); // Focus the input to open the date picker
    }
    this.indexVesselDetailStart = i;
  }
  openDatePickerEnd(i:number): void {
    const datePicker = document.querySelector('.hideInputEndDate') as HTMLInputElement;
    if (datePicker) {
      datePicker.focus(); // Focus the input to open the date picker
    }
    this.indexVesselDetailEnd = i;
  }

  updateSelectedDate(date: any): void {
    this.vesselDetail[this.indexVesselDetailStart].vesselStartDate = date.target.value;
  }

  updateSelectedEndDate(date: any): void {
    this.vesselDetail[this.indexVesselDetailEnd].vesselEndDate = date.target.value;
  }


  //save start
  updateAllChanges(){
    this.resetEdit()
  }
  //save end

  //add new vessel starts
  isAddNewVessel: boolean = false;
  addNewVesselFunc(){
    this.isAddNewVessel = !this.isAddNewVessel
  }

  cancelNewVesselFunc(){
    this.isAddNewVessel = false;
  }

  //new active start
  newVesselStartDate: any;

  updateSelectedNewVesselDate(event: any){
    this.newVesselStartDate = event.target.value;
  }

  openNewVesselStartDatePicker(){
    const datePicker = document.querySelector('.addNewVesselStartDate') as HTMLInputElement;
    if (datePicker) {
      datePicker.focus(); // Focus the input to open the date picker
    }
  }
  //new active end

  // new inactive starts
  newVesselInactiveDate: any;
  updateSelectedInactiveVesselDate(event: any){
    this.newVesselInactiveDate = event.target.value;
  }

  openNewVesselInactiveDatePicker(){
    const datePicker = document.querySelector('.addNewVesselEndDate') as HTMLInputElement;
    if (datePicker) {
      datePicker.focus(); // Focus the input to open the date picker
    }
  }
  // new inactive ends

  //add new vessel ends

  reportFuelAllowanceCols = ['AUX Eng baseline Cons, Idle', 'AUX Eng baseline Cons, Sailing', 'Speed Analysis meter', 'Wind Analysis', 'Placeholder', 'Boiler fuel Cons baseline, Sailing', 'Extra aux Eng cons, Ballast Pumps','Boiler run', 'Boiler fuel Cons baseline, idle', 'AUX Eng fuel', 'AUX Eng fuel 542', 'Placeholder Name'];

  reportFuelAllowanceArr = [
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
    { vesselName: 'TormBerlin', AUXEngBCI: 533, AUXEngBCS: 93993, speedAnalysisMeter: 36, windAnalysis: 18, placeholder1:'placeholder 1', boilerFuelCBS:42.83, extraAUX: 783.83, boilerRun: 9399, boilerFuelCBI: 7.637, AUXEngFuel: 7.637, AUXEngFuel542:4444, placeHolder2: 'placeholder 2', isEditing:false},
  ]

  handleSorting(columnID: string){
    if(this.activeColumnID !== undefined && columnID !== this.activeColumnID){
      this.activeColumnID = columnID;
      this.activeSort = 'ascending';
      return;
    }
    this.activeColumnID = columnID;
    if(this.activeSort == null){
      this.activeSort = 'ascending'
    }
    else if(this.activeSort == 'ascending'){
      this.activeSort = 'descending';
    }else {
      this.activeSort = 'ascending';
    }
  }

}
