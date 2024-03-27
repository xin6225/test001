import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Article} from "../models/article";

@Component({
    selector: 'app-article',
    standalone: true,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslateModule],
})
export class ArticleComponent {
    @Input()
    public article: Article | undefined;

}

export default ArticleComponent;
