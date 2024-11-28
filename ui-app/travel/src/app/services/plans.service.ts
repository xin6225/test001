import {Injectable} from "@angular/core";
import allTodos from "@xintek/travel/plans/models/data/todos.json";
import allLandmarks from "@xintek/travel/plans/models/data/landmarks.json";
import {Todo} from "@xintek/travel/plans/models/todos";
import {Landmark} from "@xintek/travel/plans/models/landmarks";
import allPackingThings from "@xintek/travel/plans/models/data/packinglist.json";
import {PackingList} from "@xintek/travel/plans/models/packinglist";

@Injectable({providedIn: 'root'})
export class PlansService {
    getTodos(): Todo[] {
        return allTodos;
    }

    getLandmarks(): Landmark[] {
        return allLandmarks;
    }

    getPacklist(): PackingList[] {
        return allPackingThings;
    }
}
