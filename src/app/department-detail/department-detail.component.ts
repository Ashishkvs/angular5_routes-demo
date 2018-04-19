import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>
    <h2>You have Selected dept Id {{departmentId}}</h2>
  `,
  styles: []
}) 
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor( private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
