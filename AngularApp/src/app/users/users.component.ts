import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//this is to demo parent and child relationships
//also ngFor iteration
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private names;
  @Input('incomingMessage') private inMessage;
  @Output() private outMessageEvent = new EventEmitter();
  private jsonObject;

  constructor() { 
    this.names = ['shubha', 'sathish', 'ramesh', 'mahesh'];
  }

  ngOnInit() {
  }

  sendParent(){
    this.jsonObject = {
      "key": "You are my Parent!"
    };
    this.outMessageEvent.emit(this.jsonObject);
  }

}
