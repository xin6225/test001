import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefData } from '../shared/data/refData';
import {BackendService} from '../shared/services/backend.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  rowData;
  columnDefs;

  private dataBeingEdited: any = null;

  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit() {
    this.columnDefs = [
      {headerName: 'First Name', field: 'firstName', width: 300},
      {headerName: 'Last Name', field: 'lastName', width: 300},
      {headerName: 'Address', field: 'address', width: 300},
      {headerName: 'Job Title', field: 'job', width: 300},
    ];
    this.rowData = this.backendService.allData;
  }

  createData() {
    this.router.navigate(['/create']);
  }

  onRowDoubleClicked(params: any) {
    this.dataBeingEdited = params.data;
    console.log('clicked', params.data.id);
    this.router.navigate(['/edit', params.data.id]);
  }

  deleteData() {

  }
}


function countryCellRenderer(params) {
  const flag = '<img border="0" width="15" height="10" style="margin-bottom: 2px" ' +
    'src="https://www.ag-grid.com/images/flags/' + RefData.COUNTRY_CODES[params.value] + '.png">';
  return flag + ' ' + params.value;
}


// Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
  let asString = num + '';
  while (asString.length < totalStringSize) {
    asString = '0' + asString;
  }
  return asString;
}
