interface Payment {
    makePayment(amount: number): string; 
}

class CreditCard implements Payment {
    private creditCardNumber: string;
    private hashPassword: string;

    constructor(creditCardNumber: string, hashPassword: string) {
        this.creditCardNumber = creditCardNumber;
        this.hashPassword = hashPassword;
    }

    public makePayment(amount: number): string {
        if (amount <= 0) {
            return "Invalid amount. Payment amount must be greater than zero.";
        }
        return `Payment of $${amount} processed with Credit Card ending ${this.creditCardNumber.slice(-4)}`;
    }
}

class UPI implements Payment {
    private UPIID: string;
    private upiPassword: string;

    constructor(upiId: string, upiPassword: string) {
        this.UPIID = upiId;
        this.upiPassword = upiPassword;
    }

    public makePayment(amount: number): string {
        if (amount <= 0) {
            return "Invalid amount. Payment amount must be greater than zero.";
        }
        return `Payment of $${amount} processed via UPI ID ${this.UPIID}`;
    }
}

class Context {
    private paymentMethod: Payment;

    constructor(paymentMethod: Payment) {
        this.paymentMethod = paymentMethod;
    }

    public setPaymentmethod(payment: Payment) {
        this.paymentMethod = payment;
    }

    public doPayment(amount: number) {
        const result = this.paymentMethod.makePayment(amount);
        console.log(result);
    }
}

// Example usage
const creditCardPayment = new CreditCard("**** **** **** *234", '@#$$$$$1');
const context = new Context(creditCardPayment);
context.doPayment(900);

// Example with UPI payment
const upiPayment = new UPI("user@vpa", 'upipassword');
context.setPaymentmethod(upiPayment);
context.doPayment(500);