import React from 'react'
import Navbar from './Navbar'
import './index.css'

function Contact(){
    return(
        <div>
            <Navbar/>
           <div className="contactbox">
            
            <img className="pfp" alt="" src={require('./images/IMG-1728.jpg')}/>
            <div className="bio">
                <h1 className="eliana">ELIANA CHOI</h1>
                <p>Hi! I'm Eliana, a Sophomore majoring Information Systems and Finance at the University of Maryland, College Park.
                    Outside of being a student, I am a webcomic creator and self-taught artist with a small business in graphic design/illustration.
                    Digital art and graphic design has always been a huge passion of mine and it wasn't until recently when I discovered
                    my interest in technology. I wanted to find a way to bridge art and technology and after doing some research, I
                    came across UI/UX. However, my interest in technology continued to grow and I discovered front-end development and was
                    immediately interested by the concept of using code to essentially create art. I hope to continue expanding my knowledge
                    within the computer science field to create even cooler projects!
                </p>
                <p>Email: eliechoi@terpmail.umd.edu</p>
                <p>Phone: 301-943-3485</p>
            </div>
            
        </div>




        </div>
        
    )
}

export default Contact