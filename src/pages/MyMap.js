import { Map, NavigationControl, Marker, GeolocateControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";


// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;



const MyMap = () => {
    return ( 
        <Map 
            mapLib={import('mapbox-gl')}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            style={{width: "85vw", height: "50vh"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            initialViewState={{
               latitude: 55.7060378,
               longitude: 12.5142235,
               zoom: 16
            }}
        >
         <NavigationControl />  

         <Marker latitude={55.7060378} longitude={12.5142235} color="hotpink" />
        <GeolocateControl 
            trackUserLocation={true}
            positionOptions={{ enableHighAcuracy: true }}
            showAcuracyCircle={true}
            auto
        />

        </Map>
     );
}
 
export default MyMap;