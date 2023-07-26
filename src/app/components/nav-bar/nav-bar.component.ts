import { Component , Input, EventEmitter, Output} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private sideBarService: SidebarService) {}

  @Input() dataFromAppComp: boolean | undefined;

  isMobileSideBar$ = this.sideBarService.mobileSideBar$;

  toggleSideBar(){
    this.sideBarService.toggleMobileSidebarFunc()
  }

}
