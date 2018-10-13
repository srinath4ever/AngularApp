import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    
      department-list works!

      <ul>
        <li *ngFor="let item of departments" (click)="goToDetails(item.id)">
          <span>{{item.name}}</span>
        </li>
      </ul>
    
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  private departments;

  //this is important because angular DI happens here only
  constructor(private router: Router) { }

  goToDetails(id){
    this.router.navigate(['/departments', id]);
  }

  ngOnInit() {
    this.departments = [{
      "id": "1",
      "name": "Angular",
    },
    {
      "id": "2",
      "name": "Ruby on rails",
    },
    {
      "id": "3",
      "name": "React",
    }
  ];
  }

}
