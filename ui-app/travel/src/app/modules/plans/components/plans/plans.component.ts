import {AfterViewInit, ChangeDetectionStrategy, Component, inject, ViewChild, viewChild} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PlansService} from "../../../../services/plans.service";
import {Todo} from "@xintek/travel/plans/models/todos";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Landmark} from "@xintek/travel/plans/models/landmarks";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatListModule} from "@angular/material/list";
import {PackingList} from "@xintek/travel/plans/models/packinglist";
import {BudgetComponent} from "@xintek/travel/plans/components/budget/budget.component";
import {KostPlan} from "@xintek/travel/plans/models/budgets";

@Component({
    selector: 'app-plans',
    standalone: true,
    imports: [
        MatButtonModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSortModule,
        MatTabsModule,
        MatTableModule,
        MatListModule,
        BudgetComponent,
    ],
    templateUrl: './plans.component.html',
    styleUrl: './plans.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansComponent implements AfterViewInit {
    accordion = viewChild.required(MatAccordion);
    #liveAnnouncer = inject(LiveAnnouncer);
    public todos: Todo[];
    public displayedColumns = ['visitTime', 'continent', 'country', 'area', 'name', 'description', 'must'];
    public packingList: PackingList[] = [];
    public dataSource = new MatTableDataSource<Landmark>();
    public dataSourceBudget = new MatTableDataSource<KostPlan>();

    public landmarks: Landmark[] = [];
    public kostPlan: KostPlan[] = [];


    @ViewChild(MatSort)
    public sort: MatSort | undefined;

    constructor(planService: PlansService) {
        this.todos = planService.getTodos();
        this.landmarks = planService.getLandmarks();
        this.packingList = planService.getPacklist();
    }

    ngAfterViewInit() {
        this.dataSource = new MatTableDataSource(this.landmarks);
        this.dataSourceBudget = new MatTableDataSource(this.kostPlan);
        this.dataSource.sort = this.sort!;
    }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this.#liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this.#liveAnnouncer.announce('Sorting cleared');
        }
    }
}
