import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  name:string = "Dashboard";
  users: string[] = ['Rajib','Hossain','Khan'];
  addUser:string;

  constructor() {

   }

     onKey($event):void {
       console.log($event.target.value);
       console.log(this.addUser);
     }

     AddUser():void {
         this.users.unshift(this.addUser);
         console.log(this.users);
         console.log(this.addUser);
     }

     RemoveUser():void {
       this.users.pop();
       console.log(this.users);
     }

}
