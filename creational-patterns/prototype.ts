/**
 * Prototype Design Pattern: Allows cloning of objects, even complex ones, without coupling the client code to their classes.
 * All prototype classes should have a common interface that makes it possible to clone objects even if their 
 * concrete classes are unknown to the client code.
 */ 

/**
 * participants in the Prototype pattern:
 * 1. Prototype: An interface that declares a method for cloning itself.
 * 2. ConcretePrototype: Implements the Prototype interface and defines the cloning method.
 * 3. Client: Uses the Prototype interface to create new objects by cloning existing ones.
 *  Client code can work with the Prototype interface without knowing the concrete classes of the objects it clones.
 */

interface Prototype {
    clone(): Prototype;
    getState(): string;
}

class ConcretePrototype implements Prototype {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    clone(): Prototype {
        return new ConcretePrototype(this.state);
    }

    getState(): string {
        return this.state;
    }
}

function clientDemo() {
    const original = new ConcretePrototype('Original State');
    console.log(`Original: ${original.getState()}`);

    const clone = original.clone();
    console.log(`Clone: ${clone.getState()}`);
}

clientDemo();