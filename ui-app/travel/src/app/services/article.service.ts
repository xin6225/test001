import {Injectable} from "@angular/core";
import {Article} from "@xintek/travel/article/models/article";
import allArticles from '../modules/article/models/mock-articles.json';

@Injectable({providedIn: 'root'})
export class ArticleService {

    getLatestArticle(): Article {
        console.log('test', allArticles);
        return allArticles[0];
    }

}