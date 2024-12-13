export class Customer {
    name: string;
    address: string;
    email: string;
    mobile: string;

    constructor(name: string, address: string, email: string, mobile: string) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.mobile =mobile;
    }
}