class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer('Martin', 'Dixon');

console.log(`Name: ${myCustomer.firstName} ${myCustomer.lastName}`);
