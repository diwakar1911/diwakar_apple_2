import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { RequistionApiService } from '../../requistion-api.service';
import { Requisition } from '../../requisition';

@Component({
  selector: 'ae-app-requisition-table',
  templateUrl: './requisition-table.component.html',
  styleUrls: ['./requisition-table.component.css']
})
export class RequisitionTableComponent implements OnInit {
  requisitions;
  queryString;
  curPage = 1;
  pageSize = 10;
  defaultQuery = 'johnny Appleseed';
  reqBtnActive = true;
  checkcount = 0;

  @ViewChildren('filteredRows') filterRows;
  constructor(private _rpService: RequistionApiService) {

  }

  ngOnInit() {
    this._rpService.getRequisitions()
      .subscribe((requisitions) => this.requisitions = requisitions);
    this.requisitions.forEach((item) =>  item.checked = false );
  }

  numberOfPages() {
    return Math.ceil(this.requisitions.length / this.pageSize);
  }

  myReqClick() {
    this.defaultQuery = 'johnny Appleseed';
    this.reqBtnActive = true;
  }

  onAllclick() {
    this.defaultQuery = '';
    this.reqBtnActive = false;
  }

  changed() {

    this.checkcount = 0;
    this.requisitions.forEach((item) => {
      if (item.checked) {
        this.checkcount = this.checkcount + 1;
      }
    } );
  }

}
