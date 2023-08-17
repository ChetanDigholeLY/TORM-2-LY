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

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  adminTabsArr = [true, false, false, false, false, false, false]

  adminTabFunc(val: string) {
    for (let i = 0; i < this.adminTabsArr.length; i++) {
      this.adminTabsArr[i] = false;
    }
    let temp = tabIndex[val]
    this.adminTabsArr[temp] = true;
    console.log(this.adminTabsArr);
  }


  vesselDetail: vesselDetails[] = [

    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
    { vesselName: 'Torm Alice', vesselID: 10055, vesselIMO: 912872638, vesselActive: true, vesselStartDate: '2nd Jun 2023', vesselEndDate: "--", isEditing: false },
  ]


}
