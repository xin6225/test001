import {Routes} from '@angular/router';
import {HomeComponent} from '@xintek/travel/home/home/home.component';
import {PlansComponent} from '@xintek/travel/plans/components/plans/plans.component';
import {BudgetsComponent} from '@xintek/travel/plans/components/budgets/budgets.component';
import {TodosComponent} from '@xintek/travel/plans/components/todos/todos.component';
import {PacklistComponent} from '@xintek/travel/plans/components/packlist/packlist.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [() => true]
      },
      {
        path: 'plans',
        component: PlansComponent,
        canActivate: [() => true]
      }, {
        path: 'budgets',
        component: BudgetsComponent,
        canActivate: [() => true]
      }, {
        path: 'todos',
        component: TodosComponent,
        canActivate: [() => true]
      }, {
        path: 'packlist',
        component: PacklistComponent,
        canActivate: [() => true]
      }
    ]
  },
];
