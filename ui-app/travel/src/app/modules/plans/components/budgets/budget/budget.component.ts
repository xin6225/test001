import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KostPlan} from '@xintek/travel/plans/models/budgets';
import {PlansService} from '../../../../../services/plans.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-budget',
    standalone: true,
    imports: [
        MatIconModule
    ],
    templateUrl: './budget.component.html',
    styleUrl: './budget.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BudgetComponent {
    public kostPlan: KostPlan[] = [];

    constructor(planService: PlansService) {
        this.kostPlan = planService.getBudgetList();
    }
}
