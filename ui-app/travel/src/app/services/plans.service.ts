import {Injectable} from "@angular/core";
import allTodos from "../modules/plans/models/todos.json";
import allLandmarks from "../modules/plans/models/landmarks.json";
import {Todo} from "@xintek/travel/plans/models/todos";
import {Landmark} from "@xintek/travel/plans/models/landmarks";
import allPackingThings from "@xintek/travel/plans/models/packinglist.json";
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
