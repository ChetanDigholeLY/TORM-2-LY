import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  // focus on sideBar Element starts
  focusToSideBarElement = [false,false,false,false];

  focusToSideBarElementFunc(value: number){
    for(let i = 0; i<this.focusToSideBarElement.length; i++){
      this.focusToSideBarElement[i] = false;
    }
    this.focusToSideBarElement[value] = true
  }
  // focus on sideBar Element ends

  ngOnInit(): void {
    // Subscribe to NavigationEnd event to get the current URL when the route changes
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentUrl = event.url;
      // console.log('Current URL side bar: ', currentUrl);
      if(currentUrl === '/guidance' || currentUrl === '/'){
        this.focusToSideBarElementFunc(1)
      }
      if(currentUrl === '/performance'){
        this.focusToSideBarElementFunc(3)
      }
      if(currentUrl === '/sensors'){
        this.focusToSideBarElementFunc(2)
      }
    });
  }

  // sideBar toggle feature starts
  isHalfSideBar: boolean = false;

  halfSideBarActive(): void {
    this.isHalfSideBar = !this.isHalfSideBar;
  }
  // sideBar toggle feature ends

  //sideBar for sensor starts
  isSensorMenu: boolean = false;

  sensorMenuActiveFunc(){
    this.isSensorMenu = true;
  }

  sensorMenuInactiveFunc(){
    this.isSensorMenu = false;
  }
  //sideBar for sensor ends

}
