import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bi-list',
  templateUrl: './bi-list.component.html',
  styleUrls: ['./bi-list.component.css']
})
export class BiListComponent {


  @Input() data: any;

}
