export interface Article {
  readonly  title: string;
  readonly  contents: ArticlePart[];

  readonly  timestamp?: string; // ISO date time format UTC timezone
  readonly country?: string;
  readonly  city?: string;
  readonly  isDraft?: boolean;
}

export interface ArticlePart {
  readonly imgUrl?: string;
  readonly description: string;
}
