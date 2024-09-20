import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Article} from "../models/article";
import {ArticleService} from "../../../services/article.service";

@Component({
    selector: 'app-article',
    standalone: true,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslateModule],
})
export class ArticleComponent {
    public article: Article | undefined;

    constructor(articleService: ArticleService) {
        this.article = articleService.getLatestArticle();
    }
}
