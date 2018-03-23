import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'navigation-content',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class NavigationContentComponent {

  @HostBinding('class') readonly hostElementClass = 'navigation-content';

  @HostBinding('class.pushed')
  isContentPushed = false;

  constructor() {
  }
}
