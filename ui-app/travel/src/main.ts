import {environment} from './environments/environment';
import {enableProdMode} from "@angular/core";
import {bootstrapApplication} from "@angular/platform-browser";
import {RootComponent} from "./app/components/root/root.component";
import {provideRouter, withHashLocation} from "@angular/router";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {routes} from "./app/app.route";
import {provideHttpClient} from "@angular/common/http";


if (environment.production) {
    enableProdMode();
}
bootstrapApplication(RootComponent, {
    providers: [
        provideRouter(routes, withHashLocation()),
        provideAnimationsAsync(),
        provideHttpClient(),
    ]

}).catch(err => console.error(err));
