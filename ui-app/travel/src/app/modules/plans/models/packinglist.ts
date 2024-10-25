export interface PackingList {
    category: string;
    items: PackingThing[];
}

export interface PackingThing {
    name: string;
    description: string;
}
