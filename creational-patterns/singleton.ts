/**
 * Creational Patterns deal with object creation mechanisms, in a way they are flexible and reusable.
 * The Singleton pattern ensures a class has only one instance and provides a global point of access to it.
 * When we need exactly one object to coordinate actions across the system.
 */

/**
 * Participants in the Singleton pattern
 * - Singleton: The class that is responsible for creating and managing its own instance.
 * - Client: The code that interacts with the Singleton instance.
 */

class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    public static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBusinessLogic(): string {
        return 'Executing business logic in the singleton instance.';
    }
}

function clientHandler() {
    const singletonInstance = Singleton.getInstance();
    console.log(singletonInstance.someBusinessLogic());
}