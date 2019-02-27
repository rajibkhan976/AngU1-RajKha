import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Input() myUsers: string[];
  toggleUserItem:boolean = true;
  usersListItemColor:any = {'color' : 'red'};

  constructor() { }

  toggleUserListItem():void {
    this.toggleUserItem = !this.toggleUserItem;
    if (this.toggleUserItem === true) {
      this.usersListItemColor = {'color' : 'red'};
    } else {
      this.usersListItemColor = {'color' : 'green'};
    }
  }

}
