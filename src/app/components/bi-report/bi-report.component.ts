import { Component } from '@angular/core';

@Component({
  selector: 'app-bi-report',
  templateUrl: './bi-report.component.html',
  styleUrls: ['./bi-report.component.css']
})
export class BiReportComponent {

  biReportMainArr = [
    {
      title: 'Weather report of active shore vessels',
      collapsed: false,
      children: [
        {
          title: 'Sub Menu 1',
          collapsed: false,
          children: [
            {
              title: 'Sub Sub Menu',
              collapsed: false,
            }
          ]
        },
        { 
          title: 'Sub Menu 2',
          collapsed: false 
        }
      ]
    },

    {
      title: 'General reports - captains',
      collapsed: false,
      children: [
        {
          title: 'Sub Menu 1',
          collapsed: false,
          children: [
            {
              title: 'Sub Sub Menu',
              collapsed: false,
            }
          ]
        },
        { 
          title: 'Sub Menu 2',
          collapsed: false 
        }
      ]
    },

    {
      title: 'Fuel report on shore vessels',
      collapsed: false
    },
  ]

  collapseBiReportList(index: number) {

  }

}
