import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-bi-report',
  templateUrl: './bi-report.component.html',
  styleUrls: ['./bi-report.component.css']
})
export class BiReportComponent {

  constructor(private sideBarService: SidebarService) { }

  expandAll: boolean = false;
  expandAllFunc() {
    this.expandAll = !this.expandAll;
    this.sideBarService.setExpandAllCollapsible(this.expandAll)
  }

  biReportMainArr = [
    {
      title: 'Weather report of active shore vessels',
      collapsed: false,
      delete: false,
      report: false,
      folderColor:'white',
      child: true,
      children: [
        {
          title: 'Sub Menu 1',
          collapsed: false,
          delete: false,
          report: false,
          folderColor:'blue',
          child: true,
          children: [
            {
              title: 'Sub Sub Menu',
              collapsed: false,
              delete: false,
              report: true,
              folderColor:'white',
              child: true,
              children: [
                {
                  title: 'Sub sub Sub Menu',
                  collapsed: false,
                  delete: false,
                  report: true,
                  folderColor:'blue',
                  child: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Sub Menu 2',
          collapsed: false,
          delete: false,
          report: true,
          folderColor:'blue',
          child: false,
          children: []
        }
      ]
    },

    {
      title: 'General reports - captains',
      collapsed: false,
      delete: false,
      report: false,
      folderColor:'white',
      child: true,
      children: [
        {
          title: 'Sub Menu 1',
          collapsed: false,
          delete: false,
          report: false,
          folderColor:'blue',
          child: true,
          children: [
            {
              title: 'Sub Sub Menu',
              collapsed: false,
              delete: false,
              report: false,
              folderColor:'white',
              child: true,
              children: [
                {
                  title: 'Sub Menu 3',
                  collapsed: false,
                  delete: false,
                  report: true,
                  folderColor:'blue',
                  child: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Sub Menu 2',
          collapsed: false,
          delete: false,
          report: true,
          folderColor:'blue',
          child: false,
          children: []
        }
      ]
    },

    {
      title: 'Fuel report on shore vessels',
      collapsed: false,
      delete: false,
      report: true,
      folderColor:'white',
      child: false,
      children: []
    },
  ]

  collapseBiReportList(index: number) {

  }

}
