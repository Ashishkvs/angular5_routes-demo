import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h2>Department List</h2>
    <ul *ngFor="let dept of departmentList ">
    <li (click)="onSelect(dept)">{{dept.id}} {{dept.name}}</li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departmentList = [
    {'id' : 1, 'name' : 'Angular' },
    {'id' : 2, 'name' : 'Node'},
    {'id' : 3, 'name' : 'Java' },
    {'id' : 4, 'name' : 'javaScript'},
    {'id' : 5, 'name' : 'Hibernate' },
    {'id' : 6, 'name' : 'spring'},
  ];

  constructor(private _router: Router) { }
// router here called and config for url param type use case
  ngOnInit() {
  }
  onSelect(dept) {
    this._router.navigate([ '/departments', dept.id]); // we need to args path and id or name

  }

}
