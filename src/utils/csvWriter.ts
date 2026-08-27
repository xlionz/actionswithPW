import { createObjectCsvWriter } from 'csv-writer';

const csvWriter = createObjectCsvWriter({
    path: './playwright-report/src/data/products.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'price', title: 'PRICE'},
    ]
    // append: true
});

export interface Product {
    name: string;
    price: string;
}

export async function saveProductsToCSV(products: Product[]){
    await csvWriter.writeRecords(products);
}