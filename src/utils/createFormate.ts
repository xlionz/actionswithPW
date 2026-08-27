import { Product } from "./csvWriter";

export function createFormat(name: string, price: string): Product {
    return {
        name,
        price
    };
}