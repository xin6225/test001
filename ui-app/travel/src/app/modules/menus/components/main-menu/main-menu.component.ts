import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        RouterLink
    ],
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainMenuComponent {

}
