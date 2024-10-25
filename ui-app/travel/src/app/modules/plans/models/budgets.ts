export interface Budget {
    category: BudgetCategory;
    period: Period;
    amount: number;
    description: string;
}

export interface Kost {
    category: BudgetCategory;
    period: Period;
    amount: number;
    currency?: string;
    description?: string;
}

enum BudgetCategory {
    EQUIPMENT = 'EQUIPMENT',
    INSURANCE = 'INSURANCE',
    TRANSPORT = 'TRANSPORT',
    VISUM = 'VISUM',
    ACCOMMODATION = 'ACCOMMODATION', //unterkunft
    FOOD = 'FOOD', //essen & trinken
    ACTIVITIES = 'ACTIVITIES',  // tickets, guild tour etc.
    SHOPPING = 'SHOPPING',
    OTHERS = 'OTHERS'
}

enum Period {
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}
