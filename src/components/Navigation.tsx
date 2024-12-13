import {Link} from "react-router";

export function Navigation() {
    return (
        <div>
            <h1>Navigation</h1>

            <Link to={"/"}>Dashboard</Link><br/>
            <Link to={"/add"}>Add Customer</Link>
        </div>
    );
}