import './style.css'
import DigitalProduct from './models/DigitalProduct';
import PhysicalProduct from './models/PhysicalProduct';
import Product from './models/Product';
import { calculateTax } from './utils/taxCalculator';
import { sortProductsByName, sortProductsByPrice } from './utils/productSorter';

const documentTitle = 'Inventory Tracker';

const myDigitalProduct = new DigitalProduct(1, 'DGT001', 'Digital Book', 19.99, 2.5);
const myPhysicalProduct = new PhysicalProduct(2, 'PHYS001', 'Book', 29.99, 1.5);
const myProduct = new Product(3, 'GEN001', 'Generic Product', 9.99);
const anotherPhysicalProduct = new PhysicalProduct(4, 'PHYS002', 'Heavy Book', 49.99, 6.0);
const anotherDigitalProduct = new DigitalProduct(5, 'DGT002', 'Large File', 199.99, 1200.0);
myPhysicalProduct.applyBulkDiscount(1.0, 1.00);

const myProducts = [myDigitalProduct, myPhysicalProduct, myProduct, anotherPhysicalProduct, anotherDigitalProduct];


console.log("Sorted by name:");
for (const product of sortProductsByName(myProducts)) {
  console.log(`${product.displayDetails()} Price with tax: $${product.getPriceWithTax().toFixed(2)}`);
}

console.log("Sorted by price:");
for (const product of sortProductsByPrice(myProducts, false)) {
  console.log(`${product.displayDetails()} Price with tax: $${product.getPriceWithTax().toFixed(2)}`);
}

let page = document.querySelector<HTMLDivElement>('#app');
page!.innerHTML = `
  <h1 class="text-3xl font-bold text-center">${documentTitle}</h1>
  <table class="w-full text-sm text-left rtl:text-right text-body">
    <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
      <tr>
        <th scope="col" class="px-6 py-3 font-medium">ID</th>
        <th scope="col" class="px-6 py-3 font-medium">SKU</th>
        <th scope="col" class="px-6 py-3 font-medium">Name</th>
        <th scope="col" class="px-6 py-3 font-medium">Price</th>
        <th scope="col" class="px-6 py-3 font-medium">Price with Tax</th>
        <th scope="col" class="px-6 py-3 font-medium">Weight / File Size</th>
        <th scope="col" class="px-6 py-3 font-medium">Details</th>
      </tr>
    </thead>
    <tbody>
      ${myProducts.map(product => `
        <tr class="bg-neutral-primary border-b border-default">
          <td class="text-right px-6 py-4">${product.id}</td>
          <td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">${product.sku}</td>
          <td class="px-6 py-4">${product.name}</td>
          <td class="text-right px-6 py-4">$${product.price.toFixed(2)}}</td>
          <td class="text-right px-6 py-4">$${calculateTax(product).toFixed(2)}</td>
          <td class="text-right px-6 py-4">${product instanceof PhysicalProduct ? `${(product as PhysicalProduct).weight}` : `${(product as DigitalProduct).fileSize}`}</td>
          <td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">${product.displayDetails()}</td>
        </tr>`).join('')}
    </tbody>
  </table>
`;
