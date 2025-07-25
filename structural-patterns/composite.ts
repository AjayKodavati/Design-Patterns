/**
 * Composite Pattern: lets us compose objects into tree structures and then work with these structures as if they were individual objects.
 * Composite's main purpose is to allow clients to treat individual objects and compositions of objects uniformly.
 */

/**
 * Participants of the Composite Pattern:
 * - Component: The interface that defines the common operations for both leaf and composite objects.
 * - Leaf: The class that represents the end objects of a composition. A leaf can't have any children.
 * - Composite: The class that represents the complex components that may have children. It implements all Component methods, including those for managing children.
 * - Client: The code that interacts with the Component interface. It can work with both leaf and composite objects uniformly.
 */

interface Component {
    operation(): string;
}

/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 */
class Leaf implements Component {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public operation(): string {
        return `Leaf: ${this.name}`;
    }   
}

/**
 * The Composite class represents the complex components that may have children.
 * It implements all Component methods, including those for managing children.
 */

class Composite implements Component {
    private children: Component[] = [];

    public add(child: Component): void {
        this.children.push(child);
    }

    public remove(child: Component): void {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    public operation(): string {
        const results = this.children.map(child => child.operation());
        return `Composite:\n${results.join('\n')}`;
    }
    public getChildren(): Component[] {
        return this.children;
    }
}

/**
 * The client code works with all components via the Component interface.
 * This way it can support both simple leaf components and complex composites.
 */ 
function clientCode(component: Component) {
    console.log(`Result: ${component.operation()}`);    
}

/**
 * The client code can work with any component, whether it's a leaf or a composite.
 */
let leaf1 = new Leaf('Leaf 1');
let leaf2 = new Leaf('Leaf 2');
let composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);

clientCode(leaf1);
clientCode(leaf2);
clientCode(composite);
clientCode(new Composite()); // Empty composite