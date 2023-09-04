import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bi-list-element',
  templateUrl: './bi-list-element.component.html',
  styleUrls: ['./bi-list-element.component.css']
})
export class BiListElementComponent {

  @Input() biReportMainArrData: any;

}
