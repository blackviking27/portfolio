import React, { useState } from 'react'
import './css/Navbar.css'
import {motion} from 'framer-motion'
import menu from './img/menu.svg'
import close from './img/close.svg'

export default function Navbar(){

    const [isClosed, setIsClosed] = useState(true)

    const svgVariant = {
        hide:{
            opacity: 0
        },
        show:{
            opacity: 1
        }
    }

    const pathVariant = {
        hide:{
            opacity: 0,
            pathLength: 0,
            x: 40
        },
        show:{
            opacity: 1,
            pathLength: 1,
            x: 0,
            transition: { duration : 1.2, ease: 'easeInOut' }
        }
    }

    return(
        <div className='navbar-div' >
            <div className='nav-logo' >
                <motion.svg 
                    variants={svgVariant}
                    initial='hide' animate='show'
                    width="65" height="65" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                
                <motion.path variants={pathVariant} fill-rule="evenodd" clip-rule="evenodd" d="M133 75V119V153V153.343L133.091 153.601C133.031 154.226 133 154.859 133 155.5C133 166.27 141.73 175 152.5 175C163.27 175 172 166.27 172 155.5C172 144.73 163.27 136 152.5 136C146.181 136 140.563 139.006 137 143.666V119V75H133Z"/>
                </mask>
                
                <motion.path variants={pathVariant} d="M133 75V71H129V75H133ZM133 153.343H129V154.028L129.228 154.674L133 153.343ZM133.091 153.601L137.073 153.986L137.158 153.105L136.863 152.27L133.091 153.601ZM137 143.666H133V155.483L140.178 146.096L137 143.666ZM137 75H141V71H137V75ZM137 119V75H129V119H137ZM137 153V119H129V153H137ZM137 153.343V153H129V153.343H137ZM136.863 152.27L136.772 152.011L129.228 154.674L129.319 154.932L136.863 152.27ZM137 155.5C137 154.988 137.025 154.483 137.073 153.986L129.11 153.216C129.037 153.969 129 154.731 129 155.5H137ZM152.5 171C143.94 171 137 164.06 137 155.5H129C129 168.479 139.521 179 152.5 179V171ZM168 155.5C168 164.06 161.06 171 152.5 171V179C165.479 179 176 168.479 176 155.5H168ZM152.5 140C161.06 140 168 146.94 168 155.5H176C176 142.521 165.479 132 152.5 132V140ZM140.178 146.096C143.017 142.383 147.479 140 152.5 140V132C144.882 132 138.11 135.629 133.822 141.237L140.178 146.096ZM133 119V143.666H141V119H133ZM133 75V119H141V75H133ZM133 79H137V71H133V79Z" fill="white" mask="url(#path-1-inside-1)"/>
                
                <motion.path variants={pathVariant} fill-rule="evenodd" clip-rule="evenodd" d="M105.57 132.865C112.912 118.363 118.187 101.099 123.5 77.0664V75H123.953L124.046 74.5758L126 75H127.5V75.3256L127.954 75.4242C127.803 76.1223 127.651 76.8151 127.5 77.5026V175H123.5V146.75H109.996V142.75H123.5V94.3543C119.346 110.452 114.876 123.339 109.138 134.672C101.294 150.165 91.1328 162.652 76.366 176.461L73.634 173.539C88.1667 159.949 97.9945 147.827 105.57 132.865Z" fill="white"/>
                <circle cx="179.5" cy="169.5" r="5" fill="#FF3E55" stroke="black"/>
                </motion.svg>
            </div>

            <ul className='navbar-list' >
                <li ><a href='#home' className='nav-link' >home</a></li>
                <li ><a href='#work' className='nav-link' >work</a> </li>
                <li ><a href='#skills' className='nav-link' >skills</a></li>
                <li ><a href='#contact' className='nav-link' >contact</a></li>
            </ul>

            <div className='nav-mobile'>
                <div className='nav-menu-icon' >
                    <img src={ isClosed ? menu : close} alt='Menu' onClick={() => { setIsClosed(!isClosed) }} />
                </div>
                <ul className={ isClosed ? 'nav-list-mobile close' : 'nav-list-mobile open'} >
                    <li className='nav-link-div-mob'><a href='#home' className='nav-link' >home</a></li>
                    <li className='nav-link-div-mob' ><a href='#work' className='nav-link' >work</a> </li>
                    <li className='nav-link-div-mob' ><a href='#skills' className='nav-link' >skills</a></li>
                    <li className='nav-link-div-mob' ><a href='#contact' className='nav-link' >contact</a></li>
                </ul>
            </div>
        </div>
    )
}