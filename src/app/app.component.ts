import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'torm-ly';

  disablenavBarForWorldMap: any;

  recieveDataFromSideBar(value: boolean){
    this.disablenavBarForWorldMap = value;
    console.log("appComp "+value)
  }
}
