import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  template: `<h2 mat-dialog-title>Confirm</h2>
  <mat-dialog-content>Do you really want to continue?</mat-dialog-content>
  <mat-dialog-actions cdk-focus-start>
    <button md-button (click)="cancel()">CANCEL</button>
    <button md-button (click)="ok()">OK</button>
  </mat-dialog-actions>`
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }

  ok() {
    this.dialogRef.close('ok');
  }

  cancel() {
    this.dialogRef.close('cancel');
  }
}
