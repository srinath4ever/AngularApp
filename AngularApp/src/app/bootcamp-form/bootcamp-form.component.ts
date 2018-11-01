import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-bootcamp-form',
  templateUrl: './bootcamp-form.component.html',
  styleUrls: ['./bootcamp-form.component.css']
})
export class BootcampFormComponent implements OnInit {

  userModel = new User('srinath', 'naath.r@gmail.com', 9916000000, 'Angular', 'morning', false);
  private topics;

  constructor() { }

  ngOnInit() {
    this.topics = ['Angular', 'React', 'Vue'];
  }

}
