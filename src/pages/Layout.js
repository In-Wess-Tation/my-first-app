import { Outlet } from "react-router-dom";


const Layout = () => {
    return ( 
        <>
            <header>
                <p>This is the header</p>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p>This is the footer</p>
            </footer>
        </>
     );
}
 
export default Layout;