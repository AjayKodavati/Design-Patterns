/**
 * Chain of Responsibility Pattern: The request is passed along a chain of handlers, each
 * of which can either handle the request or pass it to the next handler in the chain.
 */

/**
 * Participants of the Chain of Responsibility Pattern:
 * - Handler: The interface that defines the method for handling requests and setting the next handler.
 * - ConcreteHandler: The classes that implement the Handler interface and handle specific requests.
 * - Client: The code that interacts with the Handler interface to send requests.
 */

/**
 * Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.
 * they use composition to object delegation to achieve flexibility and reusability.
 * All the behavioral patterns compose the objects and use dynamic dispatch by implementing the same interface.
 * runtime polymorphism is used to dynamically change the behavior of the objects.
 */


interface Handler<Request = string, Result = string> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Result | null;
}

/**
 * implements the default chaining behaviour
 */

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler| null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler
        return handler
    }

    public handle(request: string): string | null {
        if(this.nextHandler)
            return this.nextHandler.handle(request)
        return null
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request)
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string | null{
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string | null{
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

function client(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`); 
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}

const monkey = new MonkeyHandler()
const Squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(Squirrel).setNext(dog)


/**
 * The client should be able to send a request to any handler, not just the
 * first one in the chain.
 */
console.log('Chain: Monkey > Squirrel > Dog\n');
client(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
client(Squirrel);
