import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  private name;
  private displayName = true;
  private color = "white";

  constructor() {
    this.name = this.getGreeting();
   }

  ngOnInit() {
  }

  getGreeting(){
    return "from class!";
  }

}
