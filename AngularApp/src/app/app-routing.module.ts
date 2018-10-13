import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/departments', pathMatch: 'full' }, //defaulting
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'departments/:id', component: DepartmentDetailsComponent },
    { path: "**", component: PageNotFoundComponent} //for page not found
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }

export const routingComponents = [
    DepartmentListComponent, 
    EmployeeListComponent, 
    PageNotFoundComponent,
    DepartmentDetailsComponent
];