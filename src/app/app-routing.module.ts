import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
 // { path: '', component: DepartmentListComponent},  // for deafult page load
 // OR
 { path: '', redirectTo: '/departments' , pathMatch: 'full'},  // or sometime pathMatch: 'prefix' also used BUT Not in this case
 { path: 'departments', component: DepartmentListComponent },
 { path: 'departments/:id', component: DepartmentDetailComponent},
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent} // it shud be decalredat the last of routes other wise it will work for all urls
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  DepartmentListComponent,
  EmployeeListComponent,
  DepartmentDetailComponent,
  PageNotFoundComponent
];
