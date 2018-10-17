import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { BootcampFormComponent } from './bootcamp-form/bootcamp-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //defaulting
    { path: 'home', component: HomeComponent },
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'departments/:id', component: DepartmentDetailsComponent,
        children: [
            { path: 'overview', component: DepartmentOverviewComponent },
            { path: 'contact', component: DepartmentContactComponent }
        ]
    },
    { path: 'bootcamp-form', component: BootcampFormComponent },
    { path: "**", component: PageNotFoundComponent} //for page not found or default
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
    DepartmentDetailsComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
];