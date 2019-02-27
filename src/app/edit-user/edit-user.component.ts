import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  @Output() onChangeAdd = new EventEmitter<string[]>();
  @Output() onChangeRemove = new EventEmitter<string[]>();

  constructor() { }

  onClickedAdd () {
    this.onChangeAdd.emit();
  }

  onClickedRemove () {
    this.onChangeRemove.emit();
  }

}
