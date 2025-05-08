export type Sale = {
    month: string;
    sale: number
};

export type SalePlatform = {
    name: string;
    count: number;
    fill: string;
};

export const sales: Sale[] = [
    { month: 'January', sale: 210500000 },
    { month: 'February', sale: 155500000 },
    { month: 'March', sale: 170500000 },
    { month: 'April', sale: 200500000 },
    { month: 'May', sale: 150000000 },
];

export const salePlatforms: SalePlatform[] = [
    { name: 'online', count: 2000, fill: '#2563eb' },
    { name: 'store', count: 3000, fill: '#EF4444' },
    { name: 'others', count: 500, fill: '#FACC15' },
];
