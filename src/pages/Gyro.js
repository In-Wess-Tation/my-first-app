import { useState, useEffect } from "react";



const Gyro = () => {

    const [deviceAlpha, setDeviceAlpha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        if (navigator.userAgent.match(/iPhone/i)) {
            setIsIOS(true)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("deviceorientation", e => {
            setDeviceAlpha(e.alpha.toFixed(1))
            setDeviceBeta(e.beta.toFixed(1))
            setDeviceGamma(e.gamma.toFixed(1))
        })
    }, []);

    const enableDeviceOrientation = () => {
        DeviceOrientationEvent.requestPermission().then(response => {
            if(response === "granted") {
                window.addEventListener("deviceorientation", e => {
                    setDeviceAlpha(e.alpha.toFixed(1))
                    setDeviceBeta(e.beta.toFixed(1))
                    setDeviceGamma(e.gamma.toFixed(1))
                })
            }
        })
    }

    return ( 
        <section>
            <h1>Gyroscope</h1>

            { isIOS && <p>You are on an IPhone!</p>}
            <h2>Values of the Gyroscope: </h2>
            <p>Alpha: {deviceAlpha}</p>
            <p>Beta: {deviceBeta}</p>
            <p>Gamma: {deviceGamma}</p>


            {isIOS && !deviceAlpha ? 
                <button onClick={enableDeviceOrientation}>
                    Enable on IPhone
                </button>
             : null}
        </section>
     );
}
 
export default Gyro;