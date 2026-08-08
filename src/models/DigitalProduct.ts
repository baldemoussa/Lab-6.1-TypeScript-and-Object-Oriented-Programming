import Product from "./Product";
import type { DiscountableProduct } from "./DiscountableProduct";
// Challenge 1: Implementing DiscountableProduct interface in DigitalProduct class.
class DigitalProduct extends Product implements DiscountableProduct {
    private _fileSize: number;
    constructor(id: number, sku: string, name: string, price: number, fileSize: number) {
        super(id, sku, name, price);
        this._fileSize = fileSize;
    }
    public set fileSize(fileSize: number) {
        this._fileSize = fileSize;
    }
    public get fileSize(): string {
        return `${this._fileSize} MB`;
    }
    //Challenge 1: Method applyDiscount() method from DiscountableProduct interface
    public applyDiscount(discount: number): void {
        this.price -= this.price * discount;
    }
    public getPriceWithTax(): number {
        return this.price //no tax for digital products.
    }
}
export default DigitalProduct;