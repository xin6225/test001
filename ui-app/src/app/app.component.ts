import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xin\'s awesome app';
  constructor(private router: Router) {

  }
  openHelp() {
    this.router.navigate(['/help']);
  }
  openOverview(){
    this.router.navigate(['/overview']);
  }
}
