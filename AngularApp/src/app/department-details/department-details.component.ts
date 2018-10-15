import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    You selected department with id = {{depId}}

    <p>
      <button (click)="goOverview()">overview</button>
      <button (click)="goContact()">contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">previous</button>
      <button (click)="goNext()">next</button>
    </p>

    <button (click)="goToDepartments()">Back</button>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  private depId;
  private departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //way of accessing currently activated route - but limitation is, it's static one time value, 
    //will not change whenever route changes
    //this.depId = parseInt(this.route.snapshot.paramMap.get('id'));

    //nice way of subscribing to route params changes
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.depId = id;
      this.departmentId = id;
    });
    
  }

  goOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route}); //relative routing
  }

  goContact(){
    this.router.navigate(['contact'], {relativeTo: this.route}); //relative routing
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testValue'}]);
  }

}