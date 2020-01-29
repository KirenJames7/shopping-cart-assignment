import { Product } from '../../product/models/product.model';

export interface Item {
    product: Product;
    quantity: number;
}
