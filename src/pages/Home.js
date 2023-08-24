

const Home = () => {

  const [deviceAlpha, setDeviceAlpha] = useState();

  const Vibrate = () => {
    if(navigator.vibrate(200)) {
      setDeviceAlpha
    }
  }

    return ( 
       <section>
        <h1>This is Home</h1>

        <button onClick={Vibrate}>Press to Vibrate</button>
       </section>
     );
}
 
export default Home;