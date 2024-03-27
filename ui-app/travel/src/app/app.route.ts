import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component'),
        children: [
            {
                path: 'article',
                loadComponent: () => import('@xintek/travel/article/components/article.component'),
                canActivate: [() => {
                    return true;
                }],
                title: 'Article'
            }
        ]
    }
];
