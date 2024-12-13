import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import { RootLayout } from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {Error} from "./pages/Error.tsx";

function App() {
    const router = createBrowserRouter([
            {
                path : "/",
                element : <RootLayout />,
                children : [
                    {path : '/', element : <Dashboard />},
                    {path : '/add', element : <AddCustomer/>},
                    {path : '/delete', element : <DeleteCustomer/>},
                    {path : 'update', element : <UpdateCustomer/>}
                ]

            },

            {path : '*', element : <Error/>}

]);

    return (
        <>
            <RouterProvider router={router}>

            </RouterProvider>
        </>
    )
}

export default App