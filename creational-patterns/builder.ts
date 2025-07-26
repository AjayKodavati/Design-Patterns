/**
 * Builder Pattern: Constructs a complex object step by step. the pattern allows to produce
 * different types and representations of an object using the same construction code.
 */

/**
 * Participants of the Builder Pattern:
 * 1. Builder: Specifies an abstract interface for creating parts of a Product object.
 * 2. ConcreteBuilder: Constructs and assembles parts of the product by implementing the Builder interface.
 * 3. Director: Constructs an object using the Builder interface.
 * 4. Product: Represents the complex object under construction.
 * 5. Client: Uses the Director to construct the product.
 */

interface Builder {
    buildPartA(): void;
    buildPartB(): void;
    getResult(): Product;
}

interface Product {
    partA: string;  
    partB: string;
}

/**
 * It makes sense to use the Builder pattern when:
 * - The construction process of an object is complex and involves multiple steps and configurations.
 * - The results of various configurations of the object need to be represented differently.
 */
class ConcreteProduct implements Product {
    partA: string;
    partB: string;
    constructor(partA: string, partB: string) {
        this.partA = partA;
        this.partB = partB;
    }
    toString(): string {
        return `Product with ${this.partA} and ${this.partB}`;
    }
}

class ConcreteBuilder implements Builder {
    private product: Product;

    constructor() {
        this.product = new ConcreteProduct('', '');
    }

    buildPartA(): void {
        this.product.partA = 'Part A';
    }

    buildPartB(): void {
        this.product.partB = 'Part B';
    }

    getResult(): Product {
        return this.product;
    }
}

class ConcreteBuilder2 implements Builder {
    private product: Product;

    constructor() {
        this.product = new ConcreteProduct('', '');
    }

    buildPartA(): void {
        this.product.partA = 'Part A2';
    }

    buildPartB(): void {
        this.product.partB = 'Part B2';
    }

    getResult(): Product {
        return this.product;
    }
}

/**
 * The Director class is only resposnible for executing the building steps in a specific order.
 */

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    construct(): Product {
        this.builder.buildPartA();
        this.builder.buildPartB();
        return this.builder.getResult();
    }
}

/**
 * The client code creates a Builder object, passes it to the Director, and then invokes the construction process.
 * the end result is either returned by the Director or retrieved from the Builder.
 */

class Client {
    private director: Director;

    constructor(builder: Builder) {
        this.director = new Director(builder);
    }

    run(): void {
        const product = this.director.construct();
        console.log(product.toString());
    }
}

const builder1 = new ConcreteBuilder();
const client1 = new Client(builder1);
client1.run(); // Output: Product with Part A and Part B

const builder2 = new ConcreteBuilder2();
const client2 = new Client(builder2);
client2.run(); // Output: Product with Part A2 and Part B2


