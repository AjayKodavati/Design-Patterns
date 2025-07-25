/**
 * facade pattern: This pattern provides a simplified interface to a complex subsystem.
 * It defines a higher-level interface that makes the subsystem easier to use.
 * Provides a unified interface but delegates most of the work to other classes.
 */

/**
 * Participants of the Facade Pattern:
 * - Facade: The class that provides a simplified interface to the complex subsystem.
 * - Subsystem classes: The classes that implement the complex functionality.
 * - Client: The code that interacts with the Facade to perform operations.
 */

class SubsystemA {
    public operationA(): string {
        return 'SubsystemA: Ready!';
    }
}

class SubsystemB {
    public operationB(): string {
        return 'SubsystemB: Get ready!';
    }
}

/**
 * The facade delegates the client requests to the appropriate subsystem objects.
 */
class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;

    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }

    public operation(): string {
        const results: string[] = [];
        results.push(this.subsystemA.operationA());
        results.push(this.subsystemB.operationB());
        return `Facade: The facade is ready to work!\n${results.join('\n')}`;
    }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a  facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. 
 * We can create an interface with unifed methods make facade concrete class implement the interface make the client to
 * talk to the interface to follow the dependency inversion principle.
 */

function clientCode4(facade: Facade) {
    // ..
    console.log(facade.operation());
}

/**
 * SOLID principles:
 * - Single Responsibility Principle: The Facade class has a single responsibility of providing a simplified interface
 * to the complex subsystem.
 * - Open/Closed Principle: The Facade can be extended with new subsystems without modifying existing code.
 * - Liskov Substitution Principle: The Facade can be replaced with any other class that implements the same interface.
 * - Interface Segregation Principle: The Facade provides a simple interface that does not force the client to depend on methods it does not use.
 * - Dependency Inversion Principle: The client code depends on the Facade interface rather than concrete subsystem classes.
 */