import { Component , Input, EventEmitter, Output, OnInit} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface Task {
  name: string;
  completed: boolean;
  color: 'primary';
  subtasks?: Task[];
}

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


  // drop down starts

  isNavDropDownOpen: boolean = false;

  dropDownToggleFunc(){
    this.isNavDropDownOpen = !this.isNavDropDownOpen
  }

  //[active vessels , lr 1 , lr 2 , sold , active vessels]
  navDropDownBlueArray = [false, false, false, false, false]

  isNestedNavBarLR1Open: boolean = false;

  nestedNavBarLR1OpenFunc(){
    this.isNestedNavBarLR1Open = !this.isNestedNavBarLR1Open
  }

  isNestedNavBarLR2Open: boolean = false;

  nestedNavBarLR2OpenFunc(){
    this.isNestedNavBarLR2Open = !this.isNestedNavBarLR2Open
  }


  // nested lr 1 starts
  taskA: Task = {
    name: 'TaskA',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Torm Holland', completed: false , color: 'primary'},
      { name: 'Torm Alice', completed: false , color: 'primary'},
      { name: 'Torm Poland', completed: false , color: 'primary'},
      { name: 'Torm India', completed: false , color: 'primary'},
    ],
  };
  allCompleteTaskA: boolean = false;
  updateAllCompleteTaskA() {
    this.allCompleteTaskA = this.taskA.subtasks != null && this.taskA.subtasks.every(t => t.completed);
  }

  someCompleteTaskA(): boolean {
    if (this.taskA.subtasks == null) {
      return false;
    }
    return this.taskA.subtasks.filter(t => t.completed).length > 0 && !this.allCompleteTaskA;
  }

  setAllTaskA(completed: boolean) {
    this.allCompleteTaskA = completed;
    if (this.taskA.subtasks == null) {
      return;
    }
    this.taskA.subtasks.forEach(t => (t.completed = completed));
  }
  // nested lr 1 ends


  //nested lr 2 starts
  taskB: Task = {
    name: 'TaskB',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'PlaceHolder', completed: false , color: 'primary'},
      { name: 'PlaceHolder', completed: false , color: 'primary'},
      { name: 'PlaceHolder', completed: false , color: 'primary'},
      { name: 'PlaceHolder', completed: false , color: 'primary'},
    ],
  };
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
  //nested lr 2 ends

  // drop down ends

  isUserDropDown: boolean = false;
  isUserDropDownMobile: boolean = false;

  userDropDownFunc(){
    this.isUserDropDown = !this.isUserDropDown
  }
  userDropDownMobileFunc(){
    this.isUserDropDownMobile = !this.isUserDropDownMobile
  }

}
