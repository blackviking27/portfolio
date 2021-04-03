import React, { useState, useEffect } from 'react'
import './css/ContactMe.css'
import emailjs from 'emailjs-com';

// Import logo
import linkedin from './img/linkedin.svg'
import github from './img/github.svg'
import dev from './img/dev-logo.svg'

export default function ContactMe(){

    const [email, setEmail] = useState('')
    // const [subject, setSubject] = useState('')
    // const [message, setMessage] = useState('')
    const [error, setError] = useState({})

    async function sendMail(e){
        e.preventDefault();
        let result = email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)

        if(result !== null){
            emailjs.sendForm('service_j1or6bh', 'template_b21dm6z', e.target, 'user_jFObl1X8exUA6s1dBhSuQ')
            .then((result) => {
                // console.log(result);
            }, (error) => {
                // console.log(error.text);
            });
        }else{
            alert("Check your details carefully")
        }
        e.target.reset()
    }

    // regex for email [a-zA-Z0-9]*@[a-zA-Z0-9]+.[a-zA-Z0-9]+
    useEffect(() => {
        var result = email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)
        if ( result == null && email.length !== 0 ){
            setError({
                opacity: '1',
                color: 'red',
                fontSize: '18px',
                transition: 'all 0.2s ease-in',
                position: 'absolute',
                top: 0,
                right: 0
            })
        }else{
            setError({  
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    transition: 'all 0.2s ease-out'
                })
        }
    }, [email])

    return(
        <div id='contact' className='contact-container' >
            <div className='contact-div' >
                <div className='contact-heading' >
                    Like what you see? Connect with me
                </div>
                <div className='social-links-div' >
                        <div className='link-div' >
                            <a href='https://github.com/blackviking27' ><img src={github} alt='Github' ></img></a>
                        </div>
                        <div className='link-div' >
                            <a href='https://dev.to/blacviking' ><img src={dev} alt='Dev' ></img></a>
                        </div>
                        <div className='link-div' >
                            <a href='https://www.linkedin.com/in/abhishek-prajapati-a5ba80179/' ><img src={linkedin} alt='LinkedIn' ></img></a>
                        </div>
                    </div>
                <div className='contact-fields' >
                    <form onSubmit={sendMail} >
                        <div className='input-field' >
                            <input name='email' className='contact-input'  onChange={(e) => { setEmail(e.target.value) }} required='required' ></input>
                            <div className='contact-label' >Email</div>
                        <div style={error} >Invalid Email</div>
                        </div>
                        <div className='input-field' >
                            <input name='subject' className='contact-input'  required='required' ></input>
                            <div className='contact-label' >Subject</div>
                            
                        </div>
                        <div className='input-field' >
                            <textarea name='message' className='contact-input'  required='required' ></textarea>
                            <div className='contact-label' >Message</div>
                        </div>
                        <div className='submit-btn-div' >
                            <input className='submit-btn' type='submit' value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}