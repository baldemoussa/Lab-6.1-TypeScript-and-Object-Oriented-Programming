import Product from "./Product";

class PhysicalProduct extends Product {
    private _weight: number
    constructor(id: number, sku: string, name: string, price: number, weight: number) {
        super(id, sku, name, price);
        this._weight = weight;
    }
    public set weight(weight: number) {
        this._weight = weight;
    }
    public get weight(): string {
        return `${this._weight.toString()} kg`;
    }

    //Challenge 3: Added a new method applyBulkDiscount() for physical products over a certain weight. 
    // The discount criteria is passed as a parameters.
    public applyBulkDiscount(weightThreshold: number, discountAmount: number): void {
        if (this._weight > weightThreshold) {
            console.log(`Discount amount applied to ${this.name}: ${discountAmount}. This discount amount will be applied to the price. Current price: ${this.price}`);
            this.price -= discountAmount;
            console.log(`Bulk discount applied to ${this.name}! New price: ${this.price}`);
        } else {
            console.log(`Discount amount not applied to ${this.name}: ${discountAmount}. This discount amount will be applied to the price. Current price: ${this.price}`);
        }
    }

    public getPriceWithTax(): number {
        return this._price * (1 + 0.1) //10% tax rate for physical products.
    }
}

export default PhysicalProduct;