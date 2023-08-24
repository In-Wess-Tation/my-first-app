import { useState, useEffect } from "react";



const Gyro = () => {

    const [deviceAlpha, setDeviceAlpha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();

    useEffect(() => {
        window.addEventListener("deviceorientation", e => {
            setDeviceAlpha(e.alpha.toFixed(1))
            setDeviceBeta(e.beta.toFixed(1))
            setDeviceGamma(e.gamma.toFixed(1))
        })
    }, []);

    return ( 
        <section>
            <h1>Gyroscope</h1>

            <h2>Values of the Gyroscope: </h2>
            <p>Alpha: {deviceAlpha}</p>
            <p>Beta: {deviceBeta}</p>
            <p>Gamma: {deviceGamma}</p>

        </section>
     );
}
 
export default Gyro;