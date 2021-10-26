import React from 'react'
import BodyCards from './BodyCards'
import './Body.css'

function Body() {
    return (
        <div className='main-container'>
            <div className='bodyCover'>
                <div className="info">
                    <h4 className='mb-3'><span className='border border-4 p-2 w-25 ' style={{textAlign:'center'}}> A New Chapter </span></h4>
                    <h1>In React App Blog and Todo Apps</h1>
                    <div className="meta">
                        <a  href="https://www.linkedin.com/in/oliver-mulaku-715390161" target="_b" className="author"></a> <br />
                        By Oliver
                    </div>
                </div>
            </div>
            
            <BodyCards />
        </div>
            
    )
}

export default Body
