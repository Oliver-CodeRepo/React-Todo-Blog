import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header' >
            <div className='container header'>
                <h1>Welcome Bro</h1>              
                <nav>
                    <ul className="d-flex nav">
                        <li className='nav-item h5'><Link className='nav-link text-white' to='/'> Home</Link></li>
                        <li className='nav-item h5'><Link className='nav-link text-white' to='/todo'> Todo App</Link></li>
                        <li className='nav-item h5'><Link className='nav-link text-white' to='/blog'> Blog</Link></li>
                        <li className='nav-item h5'><Link className='nav-link text-white' to='/beverage'> Beverage</Link></li>
                        <li className='nav-item h5'><Link className='nav-link text-white' to='/about'> About</Link></li>
                        <li className='nav-item h5'><Link className='nav-link text-white' to='/about?type=contact'> Contact</Link></li>
                        {/* <li className='nav-item mx-3 h5'><Link to='/about'> About</Link> </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
