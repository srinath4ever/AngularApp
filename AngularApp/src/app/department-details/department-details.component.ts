import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      You selected department with id = {{depId}}

      <a (click)="goPrevious()">previous</a>
      <a (click)="goNext()">next</a>
    </p>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  private depId;
  private departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //way of accessing currently activated route - but limitation is, it's static one time value, will not change whenever route changes
    //this.depId = parseInt(this.route.snapshot.paramMap.get('id'));

    //nice way of subscribing to route params changes
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.depId = id;
      this.departmentId = id;
    });
    
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

}