import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-channel-picker',
  templateUrl: './channel-picker.component.html',
  styleUrls: ['./channel-picker.component.css']
})
export class ChannelPickerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    this.router.navigate(['/login']);
  }

  doctorLogin() {

  }

  aidmanLogin() {

  }

  vendorLogin() {

  }
}
