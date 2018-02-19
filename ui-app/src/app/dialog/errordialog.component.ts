
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-dialog-error',
  styles: ['h2, mat-dialog-content { color: red !important; }'],
  template: `<h2 md-dialog-title>Error</h2>
             <mat-dialog-content>
               <div>Please check your input and do your last action again</div>      
                 <ul>
                   <li>
                     Mandatory fields must not be empty
                   </li>
                   <li>
                     Valid date must contain Date, Time and TimeZone
                   </li>
                 </ul>
             </mat-dialog-content>
             <mat-dialog-actions cdk-focus-start>
              <button md-button md-dialog-close>ok</button>
             </mat-dialog-actions>`
})
export class ErrorDialogComponent {
  constructor(public dialogRef:MatDialogRef<ErrorDialogComponent>){}
}
