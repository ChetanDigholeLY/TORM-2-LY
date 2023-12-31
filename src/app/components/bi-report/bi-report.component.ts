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

 
  biReportMainArr: any = [
    {
      title: 'Weather report of active shore vessels',
      collapsed: false,
      delete: false,
      report: false,
      reportDetail: [],
      folder: true,
      folderColor: 'white',
      child: true,
      children: [
        {
          title: 'Nested sub Menu 1',
          collapsed: false,
          delete: false,
          report: false,
          reportDetail: [],
          folder: true,
          folderColor: 'blue',
          child: true,
          children: [
            {
              title: 'Nested sub Nested sub Menu',
              collapsed: false,
              delete: false,
              report: false,
              reportDetail: [],
              folder: true,
              folderColor: 'white',
              child: true,
              children: [
                {
                  title: 'Nested sub Nested sub Nested sub Menu',
                  collapsed: false,
                  delete: false,
                  report: true,
                  reportDetail: [
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                  ],
                  folder: false,
                  folderColor: 'blue',
                  child: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Nested sub Menu 2',
          collapsed: false,
          delete: false,
          report: true,
          reportDetail: [
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
          ],
          folder: false,
          folderColor: 'blue',
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
      reportDetail: [],
      folder: true,
      folderColor: 'white',
      child: true,
      children: [
        {
          title: 'Nested sub Menu 1',
          collapsed: false,
          delete: false,
          report: false,
          reportDetail: [],
          folder: true,
          folderColor: 'blue',
          child: true,
          children: [
            {
              title: 'Nested sub Nested sub Menu',
              collapsed: false,
              delete: false,
              report: false,
              reportDetail: [],
              folder: true,
              folderColor: 'white',
              child: true,
              children: [
                {
                  title: 'Nested sub Menu 3',
                  collapsed: false,
                  delete: false,
                  report: true,
                  reportDetail: [
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                  ],
                  folder: false,
                  folderColor: 'blue',
                  child: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Nested sub Menu 2',
          collapsed: false,
          delete: false,
          report: true,
          reportDetail: [
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
          ],
          folder: false,
          folderColor: 'blue',
          child: false,
          children: []
        }
      ]
    },

    {
      title: 'Fuel report on shore vessels',
      collapsed: false,
      delete: true,
      report: true,
      reportDetail: [
        {
          name: 'Report',
          workSpace: '987132',
          reportId: '4SDAS',
          ShowOnVessel: true,
          ShowOnShore: true,
          isEditReport: false
        },
        {
          name: 'Report',
          workSpace: '987132',
          reportId: '4SDAS',
          ShowOnVessel: true,
          ShowOnShore: true,
          isEditReport: false
        },
      ],
      folder: true,
      folderColor: 'white',
      child: false,
      children: []
    },

    {
      title: 'Weather report of active shore vessels',
      collapsed: false,
      delete: false,
      report: false,
      reportDetail: [],
      folder: true,
      folderColor: 'white',
      child: true,
      children: [
        {
          title: 'Nested sub Menu 1',
          collapsed: false,
          delete: false,
          report: false,
          reportDetail: [],
          folder: true,
          folderColor: 'blue',
          child: true,
          children: [
            {
              title: 'Nested sub Nested sub Menu',
              collapsed: false,
              delete: false,
              report: false,
              reportDetail: [],
              folder: true,
              folderColor: 'white',
              child: true,
              children: [
                {
                  title: 'Nested sub Nested sub Nested sub Menu',
                  collapsed: false,
                  delete: false,
                  report: true,
                  reportDetail: [
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                  ],
                  folder: false,
                  folderColor: 'blue',
                  child: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Nested sub Menu 2',
          collapsed: false,
          delete: false,
          report: true,
          reportDetail: [
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
          ],
          folder: false,
          folderColor: 'blue',
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
      reportDetail: [],
      folder: true,
      folderColor: 'white',
      child: true,
      children: [
        {
          title: 'Nested sub Menu 1',
          collapsed: false,
          delete: false,
          report: false,
          reportDetail: [],
          folder: true,
          folderColor: 'blue',
          child: true,
          children: [
            {
              title: 'Nested sub Nested sub Menu',
              collapsed: false,
              delete: false,
              report: false,
              reportDetail: [],
              folder: true,
              folderColor: 'white',
              child: true,
              children: [
                {
                  title: 'Nested sub Menu 3',
                  collapsed: false,
                  delete: false,
                  report: true,
                  reportDetail: [
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                    {
                      name: 'Report',
                      workSpace: '987132',
                      reportId: '4SDAS',
                      ShowOnVessel: true,
                      ShowOnShore: true,
                      isEditReport: false
                    },
                  ],
                  folder: false,
                  folderColor: 'blue',
                  child: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Nested sub Menu 2',
          collapsed: false,
          delete: false,
          report: true,
          reportDetail: [
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
            {
              name: 'Report',
              workSpace: '987132',
              reportId: '4SDAS',
              ShowOnVessel: true,
              ShowOnShore: true,
              isEditReport: false
            },
          ],
          folder: false,
          folderColor: 'blue',
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
      reportDetail: [
        {
          name: 'Report',
          workSpace: '987132',
          reportId: '4SDAS',
          ShowOnVessel: true,
          ShowOnShore: true,
          isEditReport: false
        },
        {
          name: 'Report',
          workSpace: '987132',
          reportId: '4SDAS',
          ShowOnVessel: true,
          ShowOnShore: true,
          isEditReport: false
        },
      ],
      folder: false,
      folderColor: 'white',
      child: false,
      children: []
    }
  ]


  //add a new folder starts
  addNewRootMenu: boolean = false;

  newRootMenuName: string = "New Root Menu"

  newRootMenuNameFunc(event: any) {
    this.newRootMenuName = event.target.value
  }

  addNewRootMenuFunc() {
    const addNewRootDetail = {
      title: this.newRootMenuName,
      collapsed: false,
      delete: true,
      report: true,
      reportDetail: [],
      folder: true,
      folderColor: 'white',
      child: false,
      children: [],
      
    }

    this.biReportMainArr.unshift(addNewRootDetail)

    this.addNewRootMenu = false

    this.newRootMenuName = "New Root Menu"

  }
  //add a new folder ends

}
