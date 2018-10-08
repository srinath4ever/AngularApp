import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `hello-world works from template!
  <input [id]="inputId" [disabled]="isDisabled" type="text" value="srinath"/>
  `,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  private isDisabled;
  private inputId;

  constructor() {
    this.inputId = 123;
    this.isDisabled = true;
   }

  ngOnInit() {
  }

}
