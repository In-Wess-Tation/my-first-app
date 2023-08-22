import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <header>
        <p>This is the header</p>
    </header>

    <main>
        <Outlet/>
    </main>

    <footer>
        <p>This is the footer</p>
    </footer>
</>
  );
}

export default App;
