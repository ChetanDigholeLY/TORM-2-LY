import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isHoverSvgSubject: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>([false, false, false, false]);
  public isHoverSvg$: Observable<boolean[]> = this.isHoverSvgSubject.asObservable();

  constructor() {
    this.isHoverSvg = [false, false, false, false];
  }

  isHoverSvg = [false, false, false, false];

  isHoverSvgFunc(value: number) {
    for (let i = 0; i < this.isHoverSvg.length; i++) {
      this.isHoverSvg[i] = false;
    }
    this.isHoverSvg[value] = true;
    console.log(this.isHoverSvg);
  }

  updateIsHoverSvg(value: number) {
    this.isHoverSvgFunc(value);
    this.isHoverSvgSubject.next(this.isHoverSvg);
  }
}
