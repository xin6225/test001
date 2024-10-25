import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Article} from "../models/article";
import {ArticleService} from "../../../services/article.service";
import {MatDividerModule} from "@angular/material/divider";
import {DatetimePipe} from "../../../pipes/datetime.pipe";

@Component({
    selector: 'app-article',
    standalone: true,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TranslateModule,
        MatDividerModule,
        DatetimePipe
    ],
})
export class ArticleComponent {
    public articles: Article[] | undefined;

    constructor(articleService: ArticleService) {
        this.articles = articleService.getAllArticles();
    }
}
