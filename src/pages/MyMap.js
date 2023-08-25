import { Map } from "react-map-gl";

const MyMap = () => {



    return ( 
        <Map 
            mapLib={import('mapbox-gl')}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            style={{width: "100vw", height: "50vh"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            


        </Map>
     );
}
 
export default MyMap;