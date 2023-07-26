import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarService } from 'src/app/services/sidebar.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private sideBarService: SidebarService) { }

  disAbleSideAndNav = false;

  // focus on sideBar Element starts
  //[0,1,2,3] = main menu
  //[4,5,6,7] = sensor menu
  focusToSideBarElement = [false,false,false,false,false];

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
      if(currentUrl === '/sensors/livedatafeed'){
        this.focusToSideBarElementFunc(4)
      }
      if(currentUrl === '/worldmap'){
        this.disAbleSideAndNav = true;
        this.disableNavFunc()
      }
    });
  }

  // sideBar toggle feature starts
  isHalfSideBar: boolean = true;

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

  //code for sending data to navBar component to get disable when the route is /worldMap starts
  @Output() dataToNavEvent = new EventEmitter<boolean>();
  
  disableNavFunc(){
    const data = true;
    this.dataToNavEvent.emit(data)
  }
  //code for sending data to navBar component to get disable when the route is /worldMap ends

  // mobile sideBar starts
  isMobileSideBarActive:boolean = false;
  isMobileSideBarActiveSubscription = this.sideBarService.mobileSideBar$.subscribe((val)=> {this.isMobileSideBarActive = val;})


  disableSideBar(){
    this.sideBarService.toggleMobileSidebarFunc()
  }

  //sensor mobile menu starts
  isMobileSensorMenu:boolean = false;
  //sensor mobile menu ends

  // mobile sideBar ends

}
