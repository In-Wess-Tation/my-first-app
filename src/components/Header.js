import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
    return ( 
        <header>
            <p>This is the header</p>
            <div className="links">
            <StyledLink to={"/"}>Home</StyledLink>
            <StyledLink to={"/location"}>Location</StyledLink>
            <StyledLink to={"/geolocation"}>GeoLocation</StyledLink>
            <StyledLink to={"/gyro"}>Gyroscope</StyledLink>
            <StyledLink to={"/mymap"}>Map</StyledLink>
            </div>
        </header>
     );
}
 
export default Header;