import {Routes} from '@angular/router';
import AppComponent from './app.component';
import {ArticleComponent} from '@xintek/travel/article/components/article.component';
import {PlansComponent} from "@xintek/travel/plans/components/plans/plans.component";
import {HomeComponent} from "@xintek/travel/home/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [() => {
                    return true;
                }]
            },
            {
                path: 'report',
                component: ArticleComponent,
                canActivate: [() => {
                    return true;
                }]
            },
            {
                path: 'plans',
                component: PlansComponent,
                canActivate: [() => {
                    return true;
                }]
            }
        ]
    }
];
