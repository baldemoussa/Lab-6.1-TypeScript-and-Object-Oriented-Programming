# Critical Thinking

### 1. How does TypeScript enforce type safety in this object-oriented program?
TypeScript enforces type safety by allowing developers to define static types for class properties, method parameters, and return values (e.g., specifying a `price` must be a `number`). It validates these types at compile-time, catching errors before the code runs. Additionally, it ensures that instances of classes strictly adhere to their defined interfaces or parent class structures.

### 2. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
Inheritance allows both `PhysicalProduct` and `DigitalProduct` to inherit shared properties (like `id`, `name`, and `price`) and methods from a common base `Product` class. This means the core properties and logic only need to be written once in the `Product` class, preventing the need to duplicate that same code across all specific product subclasses.

### 3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
Encapsulation safeguards an object's internal state. Using access modifiers:
- `private` prevents external code from directly modifying critical properties (like an internal ID), protecting the object from invalid states.
- `protected` allows subclasses to access base class properties while keeping them hidden from the outside.
- `public` defines a controlled, predictable API (via methods or getters/setters) for external code to interact with the object safely, hiding the underlying implementation details.

### 4. If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
Polymorphism allows different subclasses to be treated as instances of their common base class. If you add a `SubscriptionProduct` that inherits from `Product`, you can add it to an existing array of `Product`s. When you call a shared method (like `getDetails()`) on each item in the array, the specific implementation for `SubscriptionProduct` will automatically execute. You don't need to write custom logic or complex `if-else` checks to handle the new product type in the rest of your program.
