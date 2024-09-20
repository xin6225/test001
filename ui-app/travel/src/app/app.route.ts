import {Routes} from "@angular/router";
import AppComponent from "./app.component";
import ArticleComponent from "@xintek/travel/article/components/article.component";

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'article',
                component: ArticleComponent,
                canActivate: [() => {
                    return true;
                }]
            }
        ]
    }
];
