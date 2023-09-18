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

  //bi report starts

  private expandAllCollapsible = new BehaviorSubject<boolean>(false);

  setExpandAllCollapsible(data: any){
    this.expandAllCollapsible.next(data);
  }

  get ExpandAllCollapsible$(): Observable<boolean>{
    return this.expandAllCollapsible.asObservable();
  }

  //bi report ends

}
