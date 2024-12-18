import {createContext, useState} from "react";
import {Customer} from "../model/Customer.ts";

export const CustomerContext  = createContext();

export function CustomerProvider({children}) {

    const [customers, setCustomers] = useState<Customer[]>([]);

    return (
        <CustomerContext.Provider value={[customers, setCustomers]}>
            {children}
        </CustomerContext.Provider>
    );
}