import { Component } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

// this is to demo parent and child relationships
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private childMessage = "You are child!";
  private messageReceived;
  title = 'AngularApp 6!';

  userModel = new User("srinath", "naath.r@gmail.com", 9916000000, "Angular", "morning", false);

  constructor(private router: Router){

  }

}