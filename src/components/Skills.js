import React, { useEffect } from 'react'
import './css/Skills.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Skills(){

    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    }, [])
    
    const skills = [
        {
            name: 'React',
            icon: 'fab fa-react',
            rating: '4/5',
            color: '#00D8FF'
        },{
            name: 'Javascript',
            icon: 'fab fa-js',
            rating: '4/5',
            color: '#F7DF1E'
        },{
            name: 'Python',
            icon: 'fab fa-python',
            rating: '4/5',
            color: '#387EB8'
        },{
            name: 'Node',
            icon: 'fab fa-node-js',
            rating: '3/5',
            color: '#689f63'
        },{
            name: 'Linux',
            icon: 'fab fa-linux',
            rating: '4/5',
            color: 'white'
        },{
            name: 'SQL',
            icon: 'fas fa-database',
            rating: '3/5',
            color: '#f29111'
        },{
            name: 'Git',
            icon: 'fab fa-git-alt',
            rating: '3/5',
            color: '#F1502F'
        },{
            name: 'HTML',
            icon: 'fab fa-html5',
            rating: '4/5',
            color: '#e34c26 '
        },{
            name: 'CSS',
            icon: 'fab fa-css3-alt',
            rating: '4/5',
            color: '#264de4 '
        }
    ]

    return(
        <div id='skills' className='skills-div' >
            <div data-aos='fade-down' className='skills-heading' >
                Skills
            </div>
            <div className='skills-list-container' >
                <div className='skills-list' >
                    {
                        skills.map(skill => (
                            <div className='skill-item'  data-aos='fade-up'>
                                <div style={{ color: `${skill.color}`, opacity: '95%' }} className='skill-icon' >
                                    <i className={`${skill.icon} fa-7x`}></i>
                                </div>
                                <div className='skill-text-div'>
                                    <div className='skill-text'>
                                        <div className='skill-name' >{skill.name}</div>
                                        <div className='skill-rating'>Rating:{ skill.rating }</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}