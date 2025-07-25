/**
 * Adapter is a structural design pattern, which allows incompatible objects to collaborate.
 * it contains the instance of the adaptee and implements the target interface.
 * The Adapter translates the request from the Target interface to the Adaptee's specific request format.
 * This allows the client code to work with the Target interface without knowing about the Adaptee.
 */

/**
 * Participants of the Adapter Pattern:
 * - Target: The interface that defines the domain-specific interface that the client uses.
 * - Adaptee: The existing interface that needs to be adapted.
 * - Adapter: The class that implements the Target interface and contains an instance of Adaptee.
 * - Client: The code that interacts with the Target interface.
 */

interface Target {
    request(): string;
}

/**
 * TargetImpl is a concrete class that implements the Target interface.
 */
class TargetImpl implements Target {
    request(): string {
        return 'Target implementation';
    }
}

/**
 * Adaptee is a class that has a specific request method that is incompatible with the Target interface.
 */

class Adaptee {
    specificRequest(): string {
        return 'Adaptee implementation';
    }
}

/**
 * Adapter is a class that implments the target interface and contains an instance of Adaptee to which the requests are delegated.
 * it accepts requests in the Target interface format and adapts them to the Adaptee's specific request format.
 * To follow dependency inversion principle, the Adapter should depend on abstractions (Target interface) rather than concrete implementations (Adaptee).
 * and for dynamicaly changing the Adaptee and make it flexible, we can create a new interface for the adaptee and implement concrete classes for it.
 */
class Adapter implements Target {
    private Adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.Adaptee = adaptee;
    }

    request(): string {
        // Adapting the specific request of Adaptee to the Target interface
        return this.Adaptee.specificRequest();
    }
}

const target = new TargetImpl();
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

function clientCodeAdapter(target: Target) {
    console.log(target.request());
}

clientCodeAdapter(target); // Output: Target implementatio
clientCodeAdapter(adapter); // Output: Adaptee implementation

