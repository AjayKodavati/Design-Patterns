/**
 * Proxy Pattern: Provides a surrogate or placeholder for another object to control access to it.
 * it delegates requests to the real subject while adding additional functionality.
 * It can be used for lazy initialization, access control, logging, etc.
 */

/**
 * Participants of the Proxy Pattern:
 * - Subject: The interface that defines the common operations for RealSubject and Proxy.
 * - RealSubject: The actual object that the Proxy represents.
 * - Proxy: The surrogate object that controls access to the RealSubject.
 * - Client: The code that interacts with the Proxy.
 */

interface Image {
    display(): void;
}

class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading image: ${this.filename}`);
    }

    public display(): void {
        console.log(`Displaying image: ${this.filename}`);
    }
}

class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    public display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

function clientCode5(proxy: Image) {
    // The client interacts with the Proxy, which controls access to the RealSubject.
    proxy.display();
}

const proxyImage = new ProxyImage("example.jpg");
clientCode5(proxyImage);

