import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  name:string = "Dashboard";
  userList: string[] = ['Rajib','Hossain','Khan'];
  addUser:string;

  constructor() {

   }

     onKey($event):void {
       console.log($event.target.value);
       console.log(this.addUser);
     }

     AddUser():void {
         this.userList.unshift(this.addUser);
         console.log(this.userList);
         console.log(this.addUser);
     }

     RemoveUser():void {
       this.userList.pop();
       console.log(this.userList);
     }

}
