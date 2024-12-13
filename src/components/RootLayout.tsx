import {Link, Outlet} from "react-router";
export function RootLayout() {
    return (
        <>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/add">Add Customer</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {/* The Outlet component renders the matched child route's component */}
                    <Outlet/>
                </main>
            </div>

        </>
    );
}