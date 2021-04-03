import React from 'react';
import './css/Home.css'
import Parallax from 'react-rellax'
import Heading from './Heading';
import Man from './Man';
import { motion } from 'framer-motion';

export default function Home(){

    return(
        <div id='home' className='home-div'>
            <div className='heading-content' >
                <Parallax speed={ 6 } >
                    <Heading />
                </Parallax>
                <div className= 'title-container' >
                    <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            animate={{ opacity: 1, x: 0}}    
                            transition={{ duration: 1 }}
                        >
                        <Parallax speed={ 4 } >
                            <span className='title'>Front-End Developer</span> during the day.
                        </Parallax>
                    </motion.div>
                    <motion.div
                        initial={{  opacity: 0,x: -120 }}
                        animate={{  opacity: 1,  x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className='title'>Hacker</span> by night
                    </motion.div>
                </div>
            </div>
            <Man />
        </div>
    )
}