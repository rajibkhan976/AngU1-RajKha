import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {

  @Input() myUsers:string[];
  @Output() onChangeUserListItem = new EventEmitter<boolean>();

  constructor() {

   }
   onClickedChangeValue() {
     this.onChangeUserListItem.emit();
   }

}
