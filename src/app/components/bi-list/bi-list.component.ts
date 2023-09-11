import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-bi-list',
  templateUrl: './bi-list.component.html',
  styleUrls: ['./bi-list.component.css']
})
export class BiListComponent {

  constructor(private sideBarService: SidebarService) {}

  @Input() data: any;
  @Input() biReportMainArrData: any;

  closeBody: boolean = false;
  closeBodyFunc () {
    this.closeBody = !this.closeBody
  }

  
  //expandAll starts
  expandAllRow: boolean = false;
  expandAll = this.sideBarService.ExpandAllCollapsible$.subscribe((val) => {this.expandAllRow = val; this.closeBody = val})
  //expandAll ends
  

}
