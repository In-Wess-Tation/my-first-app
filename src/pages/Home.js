

const Home = () => {
    return ( 
       <section>
        <h1>This is Home</h1>

        <button onClick={navigator.vibrate(200)}>Press to Vibrate</button>
       </section>
     );
}
 
export default Home;