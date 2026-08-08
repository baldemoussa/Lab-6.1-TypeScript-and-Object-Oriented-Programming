// Challenge 2: Implementing a module to handle sorting products by price or by name.

import Product from "../models/Product";

export function sortProductsByName(products: Product[]): Product[] {
    return products.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}

export function sortProductsByPrice(products: Product[], ascending: boolean = true): Product[] {
    return products.slice().sort((a, b) => {
        if (ascending) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}