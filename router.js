import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/Home";
import Location from "./src/pages/Location";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="/location" element={<Location />}/>
        </Route>
    )
)


