import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `,
    styles: [':host { display: contents }'],
    imports: [RouterModule],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
}
