import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Location from "./pages/Location";
import GeoLocation from "./pages/GeoLocation";
import Gyro from "./pages/Gyro";
import MyMap from "./pages/MyMap";
import LocalBase from "./pages/Localbase";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="/location" element={<Location />}/>
            <Route path="/geolocation" element={<GeoLocation />}/>
            <Route path="/gyro" element={<Gyro />}/>
            <Route path="/mymap" element={<MyMap />}/>
            <Route path="/localbase" element={<LocalBase />}/>
        </Route>
    )
)


