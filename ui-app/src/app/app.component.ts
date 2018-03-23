import {Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {APP_CONFIG} from './shared/config/configuration';
import {AppConfig} from './shared/config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Xin\'s awesome UI App';
  lefNavUrl: string;

  constructor(private router: Router, @Inject(APP_CONFIG) private config: AppConfig) {
    this.lefNavUrl = config.navigation.left;

  }
  openHelp() {
    this.router.navigate(['/help']);
  }
  openOverview() {
    this.router.navigate(['/overview']);
  }

  home() {
    this.router.navigate(['/channel']);
  }
}
