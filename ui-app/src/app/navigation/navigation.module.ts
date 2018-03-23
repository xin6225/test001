import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { NavigationContainerComponent } from './navigation-container/navigation-container.component';
import {NavigationContentComponent} from './navigation-container/navigation-content.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [NavigationComponent, NavigationContainerComponent, NavigationContentComponent, HeaderMenuComponent],
  exports: [NavigationComponent, NavigationContainerComponent, NavigationContentComponent]
})
export class NavigationModule { }
