import React, { useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OneSignal from 'react-onesignal';

import PWAPrompt from "react-ios-pwa-prompt"


function App() {

  useEffect(() => {
    OneSignal.init({ appId: process.env.REACT_APP_ONESIGNAL })
  }, []);

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
