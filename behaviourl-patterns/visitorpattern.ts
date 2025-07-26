/**
 * visior is a behavioural design pattern that seperates the algorithms from the objects on which they operate.
 * This allows adding new bheaviours to existing class hierarchy without altering the existing code.
 */

/**
 * @type {visitor} takes the base visior interface as an argument and decide which methods/behaviour of visitor to execute.
 */
interface Component {
    accept(v: Visitor): void
}

/**
 * decleares the set of visiting methods that corresponds to the component class, the signature of a visiting method
 * allows the visitor to identify the exact class of component class.
 */
interface Visitor {
    visitorConcreteComponentA(e: ConcreteImplementationA)
    visitorConcreteComponentB(e: ConcreteImplementationB)
}

class ConcreteImplementationA implements Component {
    /**
     * Note that we're calling `visitConcreteComponentA`, which matches the
     * current class name. This way we let the visitor know the class of the
     * component it works with.
     */
    public accept(v: Visitor): void {
        v.visitorConcreteComponentA(this);
    }

    public randomMethodOfConcertA() {
        console.log("some business logic for concrete component class A");
    }
}

class ConcreteImplementationB implements Component {
    public accept(v: Visitor): void {
        v.visitorConcreteComponentB(this)
    }

     public randomMethodOfConcertB() {
        console.log("some business logic for concrete component class B");
    }
}

/**
 * Concrete Visitors implement several versions of the same algorithm, which can
 * work with all concrete component classes.
 */


class ConcreteVisitor1 implements Visitor {
    public visitorConcreteComponentA(e: ConcreteImplementationA) {
        console.log(`${e.randomMethodOfConcertA} + concrete visitor 1` )
    }

    public visitorConcreteComponentB(e: ConcreteImplementationB) {
        console.log(`${e.randomMethodOfConcertB} + concrete visitor 1`)
        
    }
}


class ConcreteVisitor2 implements Visitor {
    public visitorConcreteComponentA(e: ConcreteImplementationA) {
        console.log(`${e.randomMethodOfConcertA} + concrete visitor 2` )
    }

    public visitorConcreteComponentB(e: ConcreteImplementationB) {
        console.log(`${e.randomMethodOfConcertB} + concrete visitor 2`)
        
    }
}


/**
 * The client code can run visitor operations over any set of elements without
 * figuring out their concrete classes. The accept operation directs a call to
 * the appropriate operation in the visitor object.
 */
function clientCode(components: Component[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }

}

const components = [
    new ConcreteImplementationA(),
    new ConcreteImplementationB()
]

const concreteVisitor1 = new ConcreteVisitor1()
clientCode(components, concreteVisitor1)



console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);