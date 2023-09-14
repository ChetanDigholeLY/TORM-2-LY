import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-bi-list',
  templateUrl: './bi-list.component.html',
  styleUrls: ['./bi-list.component.css']
})
export class BiListComponent {

  constructor(private sideBarService: SidebarService) { }

  @Input() data: any; //api in json
  @Input() biReportMainArrData: any;

  closeBody: boolean = false;
  closeBodyFunc() {
    this.closeBody = !this.closeBody;
  }


  //expandAll starts
  expandAllRow: boolean = false;
  expandAll = this.sideBarService.ExpandAllCollapsible$.subscribe((val) => { this.expandAllRow = val; this.closeBody = val })
  //expandAll ends


  //edit header text starts
  editHeaderText: boolean = false;
  editHeaderTextFunc() {
    this.editHeaderText = !this.editHeaderText
    this.biReportEditedHeader = this.data.title
  }

  biReportEditedHeader: string = '';
  biReportEditedHeaderFunc() {
    this.data.title = this.biReportEditedHeader
    this.editHeaderText = !this.editHeaderText
  }

  //edit header text ends

  //edit report section starts

  reportDetail = [
    {
      name: 'Report',
      workSpace: '9871324SDAS',
      reportId: '4SDAS',
      ShowOnVessel: true,
      ShowOnShore: true,
      isEditReport: false
    },
    {
      name: 'Report',
      workSpace: '9871324SDAS',
      reportId: '4SDAS',
      ShowOnVessel: true,
      ShowOnShore: true,
      isEditReport: false
    },
  ]

  // editedReportData = {
  //   name: 'Report',
  //   workSpace: '9871324SDAS',
  //   reportId: '4SDAS',
  //   ShowOnVessel: true,
  //   ShowOnShore: true,
  //   isEditReport: false
  // }

  editedReportData: any[] = []
  cancelEditedReportData: any[] = []

  editReport: boolean = false;
  editReportFunc(val: number) {
    this.editedReportData = [...this.reportDetail]
    this.cancelEditedReportData = [...this.reportDetail]
    this.reportDetail[val].isEditReport = !this.reportDetail[val].isEditReport
  }

  saveEditedReportFunc(val: number) {
    this.reportDetail[val] = this.editedReportData[val]
    this.reportDetail[val].isEditReport = !this.reportDetail[val].isEditReport
  }
  
  cancelReportEditing(val:number){
    this.reportDetail = [...this.cancelEditedReportData]
    this.reportDetail[val].isEditReport = !this.reportDetail[val].isEditReport
  }

  //edit report section ends

  //delete report starts
  deleteReportFunc(val: number) {
    this.reportDetail.splice(val, 1)
  }
  //delete report ends

  //delete whole section starts
  deleteWholeSection = false
  deleteWholeSectionFunc(){
    this.deleteWholeSection = !this.deleteWholeSection
  }
  //delete whole section ends

}
