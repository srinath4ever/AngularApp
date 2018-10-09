import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    hello-world works from template!

    <input [id]="inputId" [disabled]="isDisabled" type="text" value="value.."/>

    <div class="text-success bold">{{testString}}</div>

    <h2 [class]="failureClass">{{testString}}</h2>

    <h2 [class.text-special]="isSpecial">{{testString}}</h2>

    <h2 [ngClass]="cssClasses">{{testString}}</h2>

    <h2 [style.color]="isSpecial ? 'orange' : 'yellow'">{{testString}}</h2>

    <button (click)="onClick($event)">Greet!</button>
    
    {{greeting}}

    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Press</button>



  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-failure{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    .bold{
      font-weight: bold;
    }
  `]
})
export class HelloWorldComponent implements OnInit {

  private isDisabled;
  private inputId;
  private testString;
  private failureClass = "text-failure";
  private isSpecial = true;
  private greeting;

  //conditional css classes applying
  private cssClasses = {
    "text-success" : this.isSpecial,
    "text-failure" : !this.isSpecial,
    "text-special" : this.isSpecial
  };

  constructor() {
    this.inputId = 123;
    this.isDisabled = true;
    this.testString = "Angular Code working!";
   }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = "Just greeted!";
  };

  logMessage(value){ //template reference variables
    console.log(value);
  }

}