import React, { useEffect } from 'react'
import './css/Work.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import WorkCard from './WorkCard';

export default function Work(){

    //Initialize AOS
    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    }, [])

    const projects = [
    {
        name: 'Password Check',
        url: 'https://passcheck.netlify.app/',
        description: 'This app tests the strength of your password and also provides a feature to generate a random strong password.This project is created with React and is open sourced.',
    },{
        name: 'Portfolio',
        url: 'https://new-ab.netlify.app/',
        description: 'This is a React project which utilises many front end technology for smooth user experience. This is my personal portfolio website which includes all the work I have done do far.'
    },{
        name: 'Netflix Clone',
        url: 'https://github.com/blackviking27/Netflix-clone',
        description: 'This projects focuses on technologies like firebase ,axios and database. API calls are made to fetch the list and display the content.This project is clone of Netflix\'s home page'
    },{
        name: 'Instagran Clone',
        url: 'https://github.com/blackviking27/instagram-clone',
        description: 'This project focuses on technologies like firebase ,axios and database. It allows you to upload images and comment on someone\'s picture too .This project is clone of Instagram\'s home page'
    },{
        name: 'Weather App',
        url: 'https://github.com/blackviking27/Weather-App',
        description: 'It\'s flask app which is used to check the weather of place. You can specify the city for which you want the weather report for. It uses Openweather API to fetch the data.'
    },{
        name: 'Task manager App',
        url: 'https://github.com/blackviking27/Weather-App',
        description: 'It\'s flask app which keeps track of tasks. You can add or delete the activites that you want to do for the day in this app. '
    },{
        name: "CryptoMon",
        url : "https://addons.mozilla.org/en-US/firefox/addon/crypto-monitor/",
        description: "It is Firefox extension which allows you to monitor real time cryptocurrency rates."
    },{
        name: "Hulu Clone",
        url : "https://hulu-clone-build.vercel.app/",
        description: "It is a responsive clone of Hulu home page utilizing TMDB API to fetch data and display. It is built upon Next JS."
    },{
        name: "Amazon Clone",
        url : "https://amazon-clone-nine-tan.vercel.app",
        description: "Responsive Clone of Amazon made using Next JS and Tailwind CSS. The app has the ability to sign in a user and maintain track of orders. Payment method is implemented using Stripe which provides fast and safe transaction."
    }
]

    return(
        <div id='work' className='work-div'>
            
            <div className='projects-div' >
                <div data-aos='fade-down' className='work-heading'>
                    Projects
                </div>
                <div className='work-list'>
                        {
                            projects.map(project => {
                                return(
                                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                                        <WorkCard name={project.name} url={project.url} desc={project.description} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>

            <div className='writeups-div' >
                    <div className='writeups-text' >
                            <div data-aos='fade-down' className='writeup-heading'>
                                Writeups
                            </div>
                            <div data-aos='fade-up' className='writeup-context'>
                                I participate in Capture the Flag competitions which are basically Hacking competition and I also solve many hacking challenges on TryHackMe. I have written solutions for all the challenges that I have solved.
                            </div> 
                        <div data-aos='fade-up' style={{ display: 'flex', justifyContent: 'center' }} >
                            <div className='writeup-link-div' >
                                <div className='writeup-link-middle' >
                                    <a href='https://github.com/blackviking27/CTFs' className='writeup-link'>
                                        Read
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}
