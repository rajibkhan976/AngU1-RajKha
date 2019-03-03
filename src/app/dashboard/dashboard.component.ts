import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  name:string = "Dashboard";
  //userList array and two way data binding property defined
  userList: string[] = ['Rajib','Hossain','Khan'];
  addUser:string;

  constructor() {

   }
     //method to console log the value of two way data binding property
     onKey($event):void {
       console.log($event.target.value);
       console.log(this.addUser);
     }
     //method for adding user name
     AddUser():void {
         this.userList.unshift(this.addUser);
         console.log(this.userList);
         console.log(this.addUser);
     }
     //method for removing user name
     RemoveUser():void {
       this.userList.pop();
       console.log(this.userList);
     }

}
