import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material
import { MaterialModule } from './shared/material.module';
// ag-grid
import { AgGridModule } from 'ag-grid-angular';

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
import { ChannelPickerComponent } from './channel-picker/channel-picker.component';
import { AlertService } from './shared/services/alert.service';
import { HomeComponent } from './home/home.component';
import {NavigationModule} from './navigation/navigation.module';
import {appConfigProvider} from '../environments/environment';
import { NotificationComponent } from './notification/notification.component';

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
    ConfirmDialogComponent,
    ChannelPickerComponent,
    HomeComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgGridModule.withComponents([DateCellComponent]),
    NavigationModule
  ],
  providers: [appConfigProvider, LocalCacheService, BackendService, AlertService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, ErrorDialogComponent]
})
export class AppModule { }
