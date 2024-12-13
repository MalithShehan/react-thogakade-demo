import './App.css'
import {useState} from "react";
import {Customer} from "./model/Customer.ts";
function App() {
    const [customers, setCustomers] = useState<Customer[]>([])

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    function addCustomer() {
        const customer = new Customer(name, address, email, mobile)
        setCustomers([...customers, customer])
    }

    function deleteCustomer(email: string) {
        setCustomers(customers.filter((customer) => customer.email !== email))
    }

    function viewCustomer(index: number) {
        const customer = customers[index]
        setName(customer.name)
        setAddress(customer.address)
        setEmail(customer.email)
        setMobile(customer.mobile)
    }

    function updateCustomer() {
        const customer = new Customer(name, address, email, mobile)
        const index = customers.findIndex((customer) => customer.email === email)
        if (index !== -1) {
            const newCustomers = [...customers]
            newCustomers[index] = customer
            setCustomers(newCustomers)
        }
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)}/>
            </form>
            <div className="btn-container">
                <button onClick={addCustomer}>Add Customer</button>
                <button onClick={updateCustomer}>Update Customer</button>
            </div>

            <br/>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => (
                    <tr key={index} >
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.mobile}</td>
                        <td>
                            <button onClick={() => deleteCustomer(customer.email)}>Delete</button>
                            <button onClick={() => viewCustomer(index)}>View</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default App