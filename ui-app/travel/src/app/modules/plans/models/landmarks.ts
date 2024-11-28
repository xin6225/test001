export interface Landmark {
    name: string;
    area?: string;
    country: string;
    continent: string;
    description: string;
    mustHave: boolean; // true: must have;  false: nice to have
    detail?: string; // everything you need to know, when is the best time to visit etc.
    visitTime: string; // yyyy-mm
}
