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

  isHalfSideBar: boolean = true;

  focusToSideBarElement = [false,false,false,false];

  focusToSideBarElementFunc(value: number){
    for(let i = 0; i<this.focusToSideBarElement.length; i++){
      this.focusToSideBarElement[i] = false;
    }
    this.focusToSideBarElement[value] = true
  }

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

  halfSideBarActive(): void {
    this.isHalfSideBar = !this.isHalfSideBar;
  }

}
