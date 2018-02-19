import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

// ag-grid
import { AgGridModule }  from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpComponent } from './help/help.component';
import { MatStepperModule } from '@angular/material';
import { Step1Component } from './edit/step1/step1.component';
import { EditComponent } from './edit/edit.component';
import { DateCellComponent } from './overview/date-cell.component';
import { ErrorDialogComponent } from './dialog/errordialog.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog.component';
import { LocalCacheService } from './shared/services/local-cache.service';
import { BackendService } from './shared/services/backend.service';
import { Step2Component } from './edit/step2/step2.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LoginComponent,
    HelpComponent,
    EditComponent,
    Step1Component,
    Step2Component,
    DateCellComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    AgGridModule.withComponents([DateCellComponent])
  ],
  providers: [LocalCacheService, BackendService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, ErrorDialogComponent]
})
export class AppModule { }
