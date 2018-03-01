import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorDialogComponent } from '../dialog/errordialog.component';
import { MatDialog } from '@angular/material';
import {ConfirmDialogComponent} from '../dialog/confirm-dialog.component';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BackendService} from '../shared/services/backend.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;
  isEditing = false;

  currentData: any;

  constructor(private _formBuilder: FormBuilder, private router: Router,
              public dialog: MatDialog, private backendService: BackendService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'edit') {
      this.route.params
        .switchMap((params: Params) => this.backendService.getDataById(+params['id']))
        .subscribe((n) => {
          this.currentData = n;
          console.log(this.currentData);
        });
      this.isEditing = true;
    } else {
      console.log('create new mode');
      this.currentData = {
        address: '',
        firstName: '',
        lastName: '',
        job: '',
        id: Date.now()
      };
    }

    this.formGroup = this._formBuilder.group({
      address: [this.currentData.address, Validators.required],
      firstName: [this.currentData.firstName, Validators.required],
      lastName: [this.currentData.lastName, Validators.required],
      job: [this.currentData.job, Validators.required],
      id: [this.currentData.id],
    });
  }

  save() {
    this.openDialog();
  }

  saveToDB() {
    console.log('save data', this.formGroup.value);
    if (this.isEditing) {
      this.backendService.changData(this.formGroup.value);
    } else {
      this.backendService.addData(this.formGroup.value);
    }
    this.backToOverview();
  }

  private handleError(err) {
    console.error(err);
    this.dialog.open(ErrorDialogComponent);
  }

  private openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.saveToDB();
      }
    });
  }

  backToOverview() {
    this.router.navigate(['/overview']);
  }
}
