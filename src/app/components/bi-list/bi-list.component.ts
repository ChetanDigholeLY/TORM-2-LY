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

  editedReportData: any[] = []
  cancelEditedReportData: any[] = []

  editReport: boolean = false;
  editReportFunc(val: number) {
    this.editedReportData = [...this.data.reportDetail]
    this.cancelEditedReportData = this.data.reportDetail.map((item: any) => ({ ...item }));
    this.data.reportDetail[val].isEditReport = !this.data.reportDetail[val].isEditReport

  }

  saveEditedReportFunc(val: number) {
    this.data.reportDetail[val] = this.editedReportData[val]
    this.data.reportDetail[val].isEditReport = !this.data.reportDetail[val].isEditReport

  }

  cancelReportEditing(val: number) {
    this.data.reportDetail = [...this.cancelEditedReportData]
    // this.data.reportDetail[val].isEditReport = !this.data.reportDetail[val].isEditReport
    this.data.reportDetail[val].isEditReport = false

  }

  /////////////////////////////////////////

  /////////////////////////////////////////

  //edit report section ends

  //delete report starts
  deleteReportFunc(val: number) {
    if (this.data.reportDetail.length === 1) {
      this.data.delete = true;
      // this.deleteWholeSection = true
    }
    if (this.data.reportDetail.length > 1) {
      this.data.delete = false;
      // this.deleteWholeSection = true
    }
    this.data.reportDetail.splice(val, 1)
  }
  //delete report ends

  //delete whole section starts
  deleteWholeSection = false
  deleteWholeSectionFunc() {
    this.data.folder = true
    this.deleteWholeSection = !this.deleteWholeSection
  }
  //delete whole section ends

  //add folder starts

  addNewSubFolder: boolean = false;

  addNewSubFolderName: string = 'New sub menu'

  addNewSubFolderNameFunc(event: any) {
    this.data.report = false
    this.addNewSubFolderName = event.target.value
    // console.log(val);
  }

  addFolderFunc(val: boolean) {
    // this.addNewSubFolder = !this.addNewSubFolder
    let color = ''
    if (this.data.folderColor === 'white') {
      color = 'blue'
    }
    if (this.data.folderColor === 'blue') {
      color = 'white'
    }

    if (val) {
      const addElement = {
        title: this.addNewSubFolderName,
        collapsed: false,
        delete: true,
        report: true,
        reportDetail: [],
        folder: true,
        folderColor: color,
        child: false,
        children: []
      }
      this.data.children.unshift(addElement)
    }
    this.addNewSubFolder = !this.addNewSubFolder

  }

  //add report starts
  addNewReport: boolean = false;

  newReportInput = {
    name: "Report",
    workSpace: "987132",
    reportId: "4SDAS",
    ShowOnVessel: true,
    ShowOnShore: true,
    isEditReport: false
  }

  addReportInBiFunc(val: boolean) {
    this.closeBody = true
    this.addNewReport = true;
    this.data.report = true
    let newReport = {
      name: "Report",
      workSpace: "987132",
      reportId: "4SDAS",
      ShowOnVessel: true,
      ShowOnShore: true,
      isEditReport: false
    }

    // this.data.reportDetail.push(newReport)

    if (val) {
      newReport = this.newReportInput;
      this.data.reportDetail.push(newReport)
      this.addNewReport = false;
      this.newReportInput = {
        name: "Report",
        workSpace: "987132",
        reportId: "4SDAS",
        ShowOnVessel: true,
        ShowOnShore: true,
        isEditReport: false
      }
      // console.log(this.data);
    }

    if (!val) {
      this.addNewReport = false;
      this.newReportInput = {
        name: "Report",
        workSpace: "987132",
        reportId: "4SDAS",
        ShowOnVessel: true,
        ShowOnShore: true,
        isEditReport: false
      }
      // console.log(this.data);
    }

  }
  //add report ends


  //calculate width starts
  calculateInputWidth(val: any, multiple: number) {
    let minWidth = '100px !important';
    let width = val.length * multiple + 'px !important';
    return (width < minWidth) ? minWidth : width;
  }
  //calculate width ends

}
