import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <header>
            <p>This is the header</p>
            <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/location"}>Location</Link>
            <Link to={"/geolocation"}>GeoLocation</Link>
            </div>
        </header>
     );
}
 
export default Header;