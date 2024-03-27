export interface Article {
    readonly  timestamp: string; // ISO date time format UTC timezone
    readonly  geoPosition: string;
    readonly country: string;
    readonly  city: string;
    readonly  title?: string;
    readonly  isDraft: boolean;
    readonly  contents: ArticlePart[];
}

export interface ArticlePart {
    readonly filename?: string;
    readonly description: string;
}
