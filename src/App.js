import React, { useState, useEffect } from 'react'
import './App.css';

//Importing different componenets
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Skills from './components/Skills'
import ContactMe from './components/ContactMe.js';

import Parallax from 'react-rellax'

// Importing svgs
import controller from './components/img/console.svg'
import ipod from './components/img/ipod.svg'
import mouse from './components/img/mouse.svg'

function App() {

  const [loading, setLoading] = useState(true)

    useEffect(() => {
        const preloader = document.querySelector('.preloader')
        preloader.classList.add('preload-finish')
        setLoading(false)
    },[])

  return (
    
    <div className="app">
        
        {/* Body content */}
        { !loading && (
              <div style={{ height: '100%', width: '100%' }}>
                {/* Background for the app */}
                <Parallax speed={ -3 } >
                  <div className='app-background' >
                    <div className='background-svg' >
                      <div className='console-svg'>
                        <img src={controller} alt='' className='mob-svg' />
                      </div>
                    </div>
                    <div className='background-svg' >
                      <div className='ipod-svg' >
                        <img src={ipod} alt='' className='mob-svg' />
                      </div>
                    </div> 
                    <div className='background-svg' >
                      <div className='mouse-svg' >
                        <img src={mouse}  alt='' className='mob-svg' />
                      </div>
                    </div> 
                  </div>
                </Parallax>
                <Navbar />
                <Home />
                <Work />
                <Skills />
                <ContactMe />
              </div>
        )}
      </div>

  );
}

export default App;
