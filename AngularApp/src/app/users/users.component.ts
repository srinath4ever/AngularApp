import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

//this is to demo parent and child relationships
//also ngFor iteration
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //declaring an empty array for reading from service
  private names = [];
  private errorMessage;

  @Input('incomingMessage') private inMessage;
  @Output() private outMessageEvent = new EventEmitter();
  private jsonObject;

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    this._employeeService.getEmployees() //returns an observable
      .subscribe(data => this.names = data,
        error => this.errorMessage = error);
  }

  sendParent() {
    this.jsonObject = {
      "key": "You are my Parent!"
    };
    this.outMessageEvent.emit(this.jsonObject);
  }

}