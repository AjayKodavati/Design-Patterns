/**
 * Decorator Pattern: Dynamically adds behavior or responsibilities to objects, the object is wrapped in a decorator class that implements the same interface.
 * We have a base component interface, concrete component class, and decorator class that implements the same interface. the main
 * difference with bridge pattern is that we have different interface for implmentation and abstraction.
 */

/** 
 * Component is a base interface that defines the operations that can be performed.
 * It can be implemented by concrete components and decorators.
 */

/**
 * Participants of the Decorator Pattern:
 * - Component: The interface that defines the operations that can be performed.
 * - ConcreteComponent: The class that implements the Component interface and provides the default behavior.
 * - Decorator: The abstract class that implements the Component interface and contains a reference to a Component object.
 * - ConcreteDecorator: The class that extends the Decorator class and adds additional behavior.
 * - Client: The code that interacts with the Component interface.
 */

interface Component {
    operation(): string;
}

/**
 * ConcreteComponent is a class that implements the Component interface, provides the default behavior.
 * there can be multiple concrete components with different implementations.
 */

class ConcreteComponent implements Component {
    operation(): string {
        return 'ConcreteComponent operation';
    }
}

/**
 * Decorator is a class that implements the Component interface and contains a reference to a Component object.
 * It can add additional behavior before or after delegating the call to the wrapped component.
 */

abstract class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    operation(): string {
        return this.component.operation();
    }
}

/**
 * ConcreteDecoratorA is a class that extends the Decorator class and adds additional behavior.
 * It can override the operation method to add its own behavior.
 */
class ConcreteDecoratorA extends Decorator {
    constructor(component: Component) {
        super(component);
    }
    /**
     * Overrides the operation method to add additional behavior.
     * It calls the operation method of the wrapped component and adds its own behavior.
     */
    operation(): string {
        // Adding behavior before delegating the call to the wrapped component
        return `ConcreteDecoratorA: ${super.operation()} with additional behavior A`;
    }
}

/**
 * ConcreteDecoratorB is another class that extends the Decorator class and adds different additional behavior.
 */
class ConcreteDecoratorB extends Decorator {
    constructor(component: Component) {
        super(component);
    }
    /**
     * Overrides the operation method to add different additional behavior.
     * It calls the operation method of the wrapped component and adds its own behavior.
     */
    operation(): string {
        // Adding behavior after delegating the call to the wrapped component
        return `ConcreteDecoratorB: ${super.operation()} with additional behavior B`;
    }
}

/**
 * Client code that uses the Component interface to work with both ConcreteComponent and Decorators.
 */
function clientCode2(component: Component) {
    console.log(component.operation());
}

const concreteA = new ConcreteComponent()
const decoratorA = new ConcreteDecoratorA(concreteA)

clientCode2(decoratorA)

const decaratorB = new ConcreteDecoratorB(decoratorA)
clientCode2(decaratorB)