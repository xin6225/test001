import {Injectable} from '@angular/core';
import {Article} from '@xintek/travel/article/models/article';
import allArticles from '../../assets/reports/report-articles.json';
import homeArticles from '../../assets/home/home-articles.json';

@Injectable({providedIn: 'root'})
export class ArticleService {

  getAllArticles(): Article[] {
    return allArticles;
  }

  getHomeArticles(): Article[] {
    return homeArticles;
  }
}
