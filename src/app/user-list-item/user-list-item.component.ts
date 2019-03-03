import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  //Input properties are defined
  @Input() singleUser:string;
  @Input() listItemColor: any;

  constructor() {

   }

}
