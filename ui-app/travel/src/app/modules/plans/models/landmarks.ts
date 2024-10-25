export interface Landmark {
    name: string;
    area?: string;
    country: string;
    continent: string;
    description: string;
    mustHave: boolean; // must have or nice to have
    detail?: string; // everything you need to know
}
