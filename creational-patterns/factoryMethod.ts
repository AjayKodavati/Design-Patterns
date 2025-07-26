/**
 * Factory Method Pattern: Creates objects without specifying the exact class of object that will be created.
 * The factory method defines a method for creating objects instead of using a direct constructor call. subclasses can override this method to change the type of objects that will be created.
 * While concrete classes are used during the object creation, the return type of the factory method is usually
 * an interface or an abstract class.
 */

/**
 * Participants in the Factory Method Pattern:
 * - Creator: The class that declares the factory method, which returns an object of type Product. The creator's subclasses will override this method to create specific products.
 * - ConcreteCreator: The classes that implement the factory method to create specific products.
 * - Product: The interface or abstract class that defines the type of object the factory method will create.
 * - ConcreteProduct: The classes that implement the Product interface or extend the abstract class.
 * - Client: The code that interacts with the Creator to create products.
 */

abstract class Creator {
    public abstract factoryMethod(): Product;

    /**
     * Also contains some business logic that uses the product objects returned by the factory method.
     * subclasses can indirectly change the business logic by overriding the factory method.
     */

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete creators override the factory method to change the resulting product's type.
 */
class ConcreteCreatorA extends Creator {
    public factoryMethod() {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    public factoryMethod() {
        return new ConcreteProductB();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    public operation(): string {
        return 'Result of the ConcreteProductA';
    }
}

class ConcreteProductB implements Product {
    public operation(): string {
        return 'Result of the ConcreteProductB';
    }
}

/**
 * @param creator as long as the client code works with the creator via the base interface, 
 * it can stay independent of the concrete creator classes.
 */

function clientHandler1(creator: Creator) {
    console.log(creator.someOperation());
}

const conCreat = new ConcreteCreatorA();
clientHandler1(conCreat);
