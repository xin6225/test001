import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { OverviewComponent } from './overview/overview.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'help', component: HelpComponent},
  {path: 'edit/:id', canActivate: [AuthGuardService], component: EditComponent},
  {path: 'create', canActivate: [AuthGuardService], component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
    AuthService
  ]
})

export class AppRoutingModule {
}
