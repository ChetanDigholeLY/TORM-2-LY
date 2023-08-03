import { Component , Input, EventEmitter, Output, OnInit} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

const routeNameMap: { [key: string]: String[]} = {
  '/worldmap':["World Map"],
  '/guidance': ["Automated Guidance"],
  '/sensors/livedatafeed': ["Sensor Data","Live Data Feed"],
  '/performance': ["Performance", "Electric Power Performance"],
  '/sensors/timeseries': ["Sensor Data","Time Series"],

}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentRoute: String[] = routeNameMap['/guidance']

  constructor(private route: ActivatedRoute, private router: Router, private sideBarService: SidebarService) {
  }
  
  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = routeNameMap[event.url]
      // console.log(this.currentRoute)
    })
  }

  @Input() dataFromAppComp: boolean | undefined;

  isMobileSideBar$ = this.sideBarService.mobileSideBar$;

  toggleSideBar(){
    this.sideBarService.toggleMobileSidebarFunc()
  }

}
