import {Component} from '@angular/core';
import {Article} from '@xintek/travel/article/models/article';
import {ArticleService} from '../../../services/article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public articles: Article[] | undefined;

  constructor(articleService: ArticleService) {
    this.articles = articleService.getHomeArticles();
  }
}
