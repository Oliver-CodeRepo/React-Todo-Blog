import React from 'react'
import { useLocation } from 'react-router-dom';
import Contact from './Contact.js'

function About() {
    const { search } = useLocation();
    const match = search.match(/type=(.*)/);
    const type = match?.[1];

    return (
        <div className='container'>
            {type === 'contact' ? <Contact />
            :
            "About"
            }
            
        </div>
    )
}

export default About
