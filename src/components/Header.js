import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <header>
            <p>This is the header</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/location"}>Location</Link>
        </header>
     );
}
 
export default Header;