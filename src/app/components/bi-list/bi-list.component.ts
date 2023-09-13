import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-bi-list',
  templateUrl: './bi-list.component.html',
  styleUrls: ['./bi-list.component.css']
})
export class BiListComponent {

  constructor(private sideBarService: SidebarService) {}

  @Input() data: any; //api in json
  @Input() biReportMainArrData: any;

  closeBody: boolean = false;
  closeBodyFunc () {
    this.closeBody = !this.closeBody;
  }

  
  //expandAll starts
  expandAllRow: boolean = false;
  expandAll = this.sideBarService.ExpandAllCollapsible$.subscribe((val) => {this.expandAllRow = val; this.closeBody = val})
  //expandAll ends
  

  //edit header text starts
  editHeaderText: boolean = false;
  editHeaderTextFunc(){
    this.editHeaderText = !this.editHeaderText
    this.biReportEditedHeader = this.data.title
  }

  biReportEditedHeader: string = '';
  biReportEditedHeaderFunc(){
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

  editReport: boolean = false;
  editReportFunc(val : number){
    this.reportDetail[val].isEditReport = !this.reportDetail[val].isEditReport
  }

  //edit report section ends

}
