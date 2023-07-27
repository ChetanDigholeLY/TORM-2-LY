import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isMobileSideBar = new BehaviorSubject<boolean>(false);


  get mobileSideBar$(){
    return this.isMobileSideBar.asObservable();
  }

  toggleMobileSidebarFunc(){
    this.isMobileSideBar.next(!this.isMobileSideBar.value);
  }

}
