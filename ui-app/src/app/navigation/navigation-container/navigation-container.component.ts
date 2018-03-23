import {AfterContentInit, Component, ContentChild, HostBinding} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.css']
})
export class NavigationContainerComponent implements AfterContentInit {
  @HostBinding('class')
  readonly  containerClass = 'navigation-container';

  @ContentChild(NavigationComponent)
  leftnav: NavigationComponent;


  constructor() { }


  ngAfterContentInit(): void {
  }


}
