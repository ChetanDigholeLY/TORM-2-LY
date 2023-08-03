import { Component } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})

export class WorldmapComponent {

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


}
