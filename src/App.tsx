import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import { Dashboard } from "./components/Dashboard";
import { AddCustomer } from "./components/AddCustomer";
import { Error } from "./components/Error";

function App() {
    const router = createBrowserRouter([
        {path: "/", element: <Dashboard/>},
        {path: '/add', element: <AddCustomer/>},
        {path: '*', element: <Error/>}
    ]);
    return (
        <>
            <RouterProvider router={router}>

            </RouterProvider>
        </>
    )
}

export default App