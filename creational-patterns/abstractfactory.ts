/**
 * Abstract Factory Pattern: This pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
 * It allows the client code to work with various families of objects without being tightly coupled to their implementations.
 * This is useful when the system needs to be independent of how its objects are created, composed, and represented.
 */

/**
 * Participents of the Abstract Factory Pattern:
 * 1. AbstractFactory: Declares an interface for operations that create abstract product objects.
 * 2. ConcreteFactory: Implements the operations to create concrete product objects.
 * 3. AbstractProduct: Declares an interface for a type of product object.
 * 4. ConcreteProduct: Implements the AbstractProduct interface.
 * 5. Client: Uses only interfaces declared by AbstractFactory and AbstractProduct classes.
 */

export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

interface AbstractProductA {
    operationA(): string;
}

interface AbstractProductB {
    operationB(): string;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

class ConcreteProductA1 implements AbstractProductA {
  operationA(): string {
    return 'ConcreteProductA1';
  }
}

class ConcreteProductA2 implements AbstractProductA {
  operationA(): string {
    return 'ConcreteProductA2';
  }
}

class ConcreteProductB1 implements AbstractProductB {
  operationB(): string {
    return 'ConcreteProductB1';
  }
}

class ConcreteProductB2 implements AbstractProductB {
  operationB(): string {
    return 'ConcreteProductB2';
  }
}

export class Client {
  private productA: AbstractProductA;
  private productB: AbstractProductB;

  constructor(factory: AbstractFactory) {
    this.productA = factory.createProductA();
    this.productB = factory.createProductB();
  }

  run(): void {
    console.log(this.productA.operationA());
    console.log(this.productB.operationB());
  }
}

// Example usage
const factory1 = new ConcreteFactory1();
const client1 = new Client(factory1);
client1.run(); // Outputs: ConcreteProductA1, ConcreteProductB1

const factory2 = new ConcreteFactory2();
const client2 = new Client(factory2);
client2.run(); // Outputs: ConcreteProductA2, ConcreteProductB2

/**
 * Use the abstract factory pattern when:
 * 1. You need to create families of related or dependent objects without specifying their concrete classes.
 * 2. when we have multiple products that are designed to work together.
 */