import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Input() myUsers: string[];
  toggleUserItem:boolean = true;

  constructor() { }

  toggleUserListItem():void {
    this.toggleUserItem = !this.toggleUserItem;
  }

  changeListItemColor() {
    if (this.toggleUserItem === true) {
      return {'color' : 'red'};
    } else {
      return {'color' : 'green'};
    }
  }

}
