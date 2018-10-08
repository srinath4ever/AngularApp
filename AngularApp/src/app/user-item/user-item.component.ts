import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  private name;

  constructor() {
    this.name = this.getGreeting();
   }

  ngOnInit() {
  }

  getGreeting(){
    return "Srinath using Interpolation and Method calling!";
  }

}
