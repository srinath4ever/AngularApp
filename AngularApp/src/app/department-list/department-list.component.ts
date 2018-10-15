import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    
      department-list works!

      <ul>
        <li *ngFor="let item of departments" (click)="goToDetails(item.id)" [class.selected]="isSelected(item)">
          <span>{{item.name}}</span>
        </li>
      </ul>
    
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  private departments;
  private selectedId;

  //this is important because angular DI happens here only
  constructor(private router: Router, private route: ActivatedRoute) { }

  goToDetails(id){
    this.router.navigate(['/departments', id]);
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });

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

  isSelected(department){
    return department.id == this.selectedId;
  }

}
