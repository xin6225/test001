import {environment} from './environments/environment';
import {enableProdMode} from "@angular/core";
import {bootstrapApplication} from "@angular/platform-browser";
import {RootComponent} from "./app/components/root/root.component";
import {provideRouter, withComponentInputBinding} from "@angular/router";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {routes} from "./app/app.route";

if (environment.production) {
    enableProdMode();
}
bootstrapApplication(RootComponent, {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideAnimationsAsync(),
    ]

}).catch(err => console.error(err));
