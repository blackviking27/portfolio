import React, { useEffect } from "react";
import './css/WorkCard.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function WorkCard({ name, url, desc }){

    //Initialize AOS
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return(
        <div data-aos='fade-up' className='work-card-div' >
            <div className='work-card-text' >
                <div className='work-name' >
                    {name}
                </div>
                <div className='work-desc' >
                    {desc}
                </div>
            </div>

            {/* Button */}
            <div className='work-card-btn' >
                <div className='work-link-btn' >
                    <div className='work-link-div'>
                        <a href={url} id='work-link' >
                            Visit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}