"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer('Martin', 'Dixon');
console.log(`Name: ${myCustomer.firstName} ${myCustomer.lastName}`);
