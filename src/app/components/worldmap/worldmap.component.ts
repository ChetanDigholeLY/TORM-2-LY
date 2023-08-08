import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})

export class WorldmapComponent {

  constructor(private elementRef: ElementRef) {}

  // code for world map sidebar starts
  isSideBarOpen: boolean = false;

  sideBarOpenFunc(){
    this.isSideBarOpen = !this.isSideBarOpen
  }
  // code for world map sidebar ends


  // toggle vessel drop down starts
  isVesselDropDrownWorldmap: boolean = false;

  vesselDropDownWorldMapFunc(){
    this.isVesselDropDrownWorldmap = !this.isVesselDropDrownWorldmap
  }
  // toggle vessel drop down ends


  // nested vessel drop down checkBox starts

  isNestedVesselCheckBox: boolean = false;
  nestedVesselCheckBoxFunc(){
    this.isNestedVesselCheckBox = !this.isNestedVesselCheckBox;
  }

  task = {
    name: 'LR 1',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Torm Holland', completed: false},
      {name: 'Torm Alice', completed: false},
      {name: 'Torm Poland', completed: false},
      {name: 'Torm India', completed: false},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));

    //custom
    this.setAlllr1TextBlueFunc()
  }

  // nested vessel drop down checkBox ends

  vesselCheckTextBlue = [false, false, false, false, false]
  lr1VesselText = [false, false, false, false]

  setAlllr1TextBlueFunc(){
    if(this.allComplete){
      for (let i = 0; i < this.lr1VesselText.length; i++) {
        this.lr1VesselText[i] = true;
        
      }
    }
    else if(!this.allComplete){
      for (let i = 0; i < this.lr1VesselText.length; i++) {
        this.lr1VesselText[i] = false;
        
      }
    }
  }
  // nested vessel drop down checkBox ends

  // vessel sideBar starts
  isVesselSideBar = false;
  vesselSideBar(){
    this.isVesselSideBar = !this.isVesselSideBar;
  }
  // vessel sideBar ends

  //vessel accrodian starts
  accordionWorldMap = [false, true, false, false];

  accordionWorldMapFunc(val: number){

    for (let i = 0; i < this.accordionWorldMap.length; i++) {
      this.accordionWorldMap[i] = false;
    }
    this.accordionWorldMap[val] = true;
  }

  toggleWorldMapFunc(val: number){
    this.accordionWorldMap[val] = !this.accordionWorldMap[val]
  }
  //vessel accrodian ends


  // //WMVessel DropDown starts

  // blueArrowArray = [false, false, false, false]

  // isLR1VesselDropDownOpen: boolean = false;
  // isLR2VesselDropDownOpen: boolean = false;
  // nestedVesselDropDownElementFunc(val: string){
  //   if(val === 'lr1'){
  //     this.isLR1VesselDropDownOpen = !this.isLR1VesselDropDownOpen
  //   }
  //   if(val === 'lr2'){
  //     this.isLR2VesselDropDownOpen = !this.isLR2VesselDropDownOpen
  //   }
  // }

  // // const WMCheckBoxInpt = HTMLInputElement = this.elementRef.nativeElement.querySelectorAll('.WMCheckBoxInpt')
  // // console.log(WMCheckBoxInpt[0].name)
  
  // // lr1 vessel drop down starts
  // parentLR1ForBlueArrow: boolean = false;

  // toogleAllLR1ChildFunc(event: any){
  //   const parentLR1 = HTMLInputElement = this.elementRef.nativeElement.querySelector('.parentLR1')
  //   const childLR1 = HTMLInputElement = this.elementRef.nativeElement.querySelectorAll('.childLR1')
  //   childLR1.forEach((Ele: any , i: number) => {
  //     Ele.checked = event.target.checked;
  //   })
  // }

  // updateParentLr1CheckBoxFunc(Ele: any){
  //   const parentLR1 = HTMLInputElement = this.elementRef.nativeElement.querySelector('.parentLR1')

  //   const childLR1 = HTMLInputElement = this.elementRef.nativeElement.querySelectorAll('.childLR1')
  //   const childLR1Array = Array.from(childLR1)

  //   childLR1Array.map((currentEle: any) => {
  //     if(currentEle.checked === false && parentLR1.checked){
  //       parentLR1.checked = false;
  //     }
  //   })

  //   let isAllLR1Vessel = true;
  //   childLR1Array.forEach((currentEle: any) =>{
  //     if(currentEle.checked === false){
  //       isAllLR1Vessel = false;
  //     }
  //   })
  //   parentLR1.checked = isAllLR1Vessel
  //   this.blueArrowArray[1] = isAllLR1Vessel

  // }
  // // lr1 vessel drop down ends


  // // lr2 vessel drop down starts
  // toogleAllLR2ChildFunc(event: any){
  //   const parentLR2 = HTMLInputElement = this.elementRef.nativeElement.querySelector('.parentLR2')
  //   const childLR2 = HTMLInputElement = this.elementRef.nativeElement.querySelectorAll('.childLR2')
  //   // const WMCheckBoxInpt = HTMLInputElement = this.elementRef.nativeElement.querySelectorAll('.WMCheckBoxInpt')
  //   // console.log(WMCheckBoxInpt[0].name)
  //   childLR2.forEach((Ele : any) => {
  //     Ele.checked = event.target.checked
  //   })
  // }

  // updateParentLr2CheckBoxFunc(Ele: any){
  //   const parentLR2 = HTMLInputElement = this.elementRef.nativeElement.querySelector('.parentLR2')

  //   const childLR2 = HTMLInputElement = this.elementRef.nativeElement.querySelectorAll('.childLR2')
  //   const childLR2Array = Array.from(childLR2)

  //   childLR2Array.map((currentEle: any) => {
  //     if(currentEle.checked === false && parentLR2.checked){
  //       parentLR2.checked = false;
  //     }
  //   })

  //   let isAllLR2Vessel = true;
  //   childLR2Array.forEach((currentEle: any) =>{
  //     if(currentEle.checked === false){
  //       isAllLR2Vessel = false;
  //     }
  //   })
  //   parentLR2.checked = isAllLR2Vessel;
  //   this.blueArrowArray[2] = isAllLR2Vessel
  // }

  // // lr2 vessel drop down ends

  // //WMVessel DropDown ends

  taskB = {
    name: 'TaskB',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'PlaceHolder', completed: false, color: 'primary' },
      { name: 'PlaceHolder', completed: false, color: 'primary' },
      { name: 'PlaceHolder', completed: false, color: 'primary' },
    ],
  };

  lr2VesselText = [false, false, false, false]

  allCompleteTaskB: boolean = false;

  updateAllCompleteTaskB() {
    this.allCompleteTaskB = this.taskB.subtasks != null && this.taskB.subtasks.every(t => t.completed);
  }

  someCompleteTaskB(): boolean {
    if (this.taskB.subtasks == null) {
      return false;
    }
    return this.taskB.subtasks.filter(t => t.completed).length > 0 && !this.allCompleteTaskB;
  }

  setAllTaskB(completed: boolean) {
    this.allCompleteTaskB = completed;
    if (this.taskB.subtasks == null) {
      return;
    }
    this.taskB.subtasks.forEach(t => (t.completed = completed));
  }

  isNestedVesselCheckBoxLR2: boolean = false

  nestedVesselCheckBoxFuncLR2(){
    this.isNestedVesselCheckBoxLR2 = !this.isNestedVesselCheckBoxLR2
  }

}
