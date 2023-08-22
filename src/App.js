import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import PWAPrompt from "react-ios-pwa-prompt"


function App() {
  return (
    <>
    <Header />

     <main>
         <Outlet/>
     </main>

     <Footer />
     <PWAPrompt copyTitle="Add to Homepage"/>
     </>
  );
}

export default App;
