class Product {
    private _id: number
    private _sku: string
    private _name: string
    protected _price: number
    constructor(id: number, sku: string, name: string, price: number) {
        this._id = id
        this._sku = sku
        this._name = name
        this._price = price
    }
    public get id(): number {
        return this._id
    }
    public set sku(sku: string) {
        this._sku = sku
    }
    public get sku(): string {
        return this._sku
    }
    public set name(name: string) {
        this._name = name
    }
    public get name(): string {
        return this._name
    }
    public set price(price: number) {
        this._price = price
    }
    public get price(): number {
        return this._price
    }
    public displayDetails(): string {
        return `ID: ${this.id}, SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`
    }

    public getPriceWithTax(): number {
        return this._price * (1 + 0.05) //Set the default tax rate to 5% for all products. This can be overridden in subclasses if needed.
    }
}
    export default Product