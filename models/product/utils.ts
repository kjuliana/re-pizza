import {Product, ProductsByCategory} from "../models";

export const groupByCategoryId = (products: Product[]): ProductsByCategory => {
    const result: ProductsByCategory = {};
    for (let product of products) {
        result[product.menuCategoryId] ??= [];
        result[product.menuCategoryId].push(product);
    }
    return result;
}

export const filter = (products: Product[], search: string): Product[] => {
    return products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
}
