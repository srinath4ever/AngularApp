import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private names;
  @Input('incomingMessage') private inMessage;
  @Output() private outMessageEvent = new EventEmitter();

  constructor() { 
    this.names = ['shubha', 'sathish', 'ramesh', 'mahesh'];
  }

  ngOnInit() {
  }

  sendParent(){
    this.outMessageEvent.emit("You are my Parent!");
  }

}
