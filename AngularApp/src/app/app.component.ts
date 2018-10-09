import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private childMessage = "You are child!";
  private messageReceived;
  title = 'AngularApp 6!';
}