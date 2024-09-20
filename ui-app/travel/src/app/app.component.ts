import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {MainMenuComponent} from "@xintek/travel/menus/components/main-menu/main-menu.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterOutlet,
        AsyncPipe,
        MainMenuComponent
    ]
})
export class AppComponent {
    title = 'travel around the world';

    constructor() {
    }
}

export default AppComponent;
