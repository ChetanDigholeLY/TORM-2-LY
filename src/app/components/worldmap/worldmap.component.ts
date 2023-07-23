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

}
