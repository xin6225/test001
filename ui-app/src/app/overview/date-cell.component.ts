import { Component } from '@angular/core';

import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'date-cell',
  template: `{{params.value | date:'y-MM-dd HH:mm'}}`
})
export class DateCellComponent implements AgRendererComponent {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }
  refresh(params: any): boolean {
    return true;
  }

}
