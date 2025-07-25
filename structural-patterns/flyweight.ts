/**
 * Flyweight Pattern: Used to minimize memory usage by sharing common parts of state between multiple objects.
 * The common intrinsic immutable state for different objects is stored in a shared object, we maintain a pool
 * of shared objects and reuse them instead of creating new ones.
 * The Flyweight pattern is particularly useful when dealing with a large number of similar objects.
 */

/**
 * Participants of the Flyweight Pattern:
 * - Flyweight: The interface for the flyweight objects.
 * - ConcreteFlyweight: Implements the Flyweight interface and represents the shared state.
 * - UnsharedConcreteFlyweight: Represents the unique state of an object that is not shared
 * - FlyweightFactory: Creates and manages the flyweight objects, ensuring that they are shared properly.
 * - Client: Uses the Flyweight objects and interacts with them through the Flyweight interface.
 */

// Flyweight interface
interface PizzaFlyweight {
    serve(toppings: string[]): void;
}

// ConcreteFlyweight: shared pizza base and sauce
class PizzaBase implements PizzaFlyweight {
    private base: string;
    private sauce: string;

    constructor(base: string, sauce: string) {
        this.base = base;
        this.sauce = sauce;
    }

    public serve(toppings: string[]): void {
        console.log(
            `Pizza with base: ${this.base}, sauce: ${this.sauce}, toppings: ${toppings.join(", ")}`
        );
    }
}

// UnsharedConcreteFlyweight: unique pizza (e.g., special order)
class CustomPizza implements PizzaFlyweight {
    private description: string;

    constructor(description: string) {
        this.description = description;
    }

    public serve(toppings: string[]): void {
        console.log(
            `Custom Pizza: ${this.description}, toppings: ${toppings.join(", ")}`
        );
    }
}

// FlyweightFactory: manages the shared pizza objects
class PizzaFactory {
    private pizzas: Map<string, PizzaFlyweight> = new Map();

    public getPizza(base: string, sauce: string): PizzaFlyweight {
        const key = `${base}-${sauce}`;
        if (!this.pizzas.has(key)) {
            this.pizzas.set(key, new PizzaBase(base, sauce));
        }
        return this.pizzas.get(key)!;
    }

    public getCustomPizza(description: string): PizzaFlyweight {
        return new CustomPizza(description);
    }
}

/**
 * Client code: uses the Flyweight objects
 */
function clientCode3() {
    const factory = new PizzaFactory();

    // Create shared pizzas
    const margherita = factory.getPizza("Thin Crust", "Tomato Sauce");
    const pepperoni = factory.getPizza("Thick Crust", "BBQ Sauce");

    // Serve pizzas with different toppings
    margherita.serve(["Mozzarella", "Basil"]);
    pepperoni.serve(["Pepperoni", "Olives"]);

    // Create a custom pizza
    const customPizza = factory.getCustomPizza("Gluten-Free Base with Vegan Cheese");
    customPizza.serve(["Spinach", "Mushrooms"]);
}

// Run the client code
clientCode3();

