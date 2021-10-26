import React from 'react'
import { Link } from 'react-router-dom'

function BodyCards() {
    return (
        <div className='container '>
            <div className="blog-card">
                <div className="meta">
                <div className="photo" style={{backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)`}}></div>
                <ul className="details">
                    <li className="author"><a href="#">Oliver</a></li>
                    <li className="date">Oct. 20, 2021</li>
                    <li className="tags">
                    <ul>
                        <li><a href="">Learn</a></li>
                        <li><a href="">Code</a></li>
                        <li><a href="">React</a></li>
                        <li><a href="">Todo App</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div className="description">
                <h1>Learning to Code React</h1>
                <h2>Opening a door to the future [Todo App]</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p className="read-more">
                    <Link to='/todo'> Read More</Link>
                </p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                <div className="photo" style={{backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)`}}></div>
                <ul className="details">
                    <li className="author"><a href="#">Oliver</a></li>
                    <li className="date">Oct. 20, 2021</li>
                    <li className="tags">
                    <ul>
                        <li><a href="">Learn</a></li>
                        <li><a href="">Code</a></li>
                        <li><a href="">React</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div className="description">
                <h1>Mastering the React Language</h1>
                <h2>Java is not the same as JavaScript  [Blog]</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p className="read-more">
                    <Link to='/blog'> Read More</Link>
                </p>
                </div>
            </div>
        </div>
    )
}

export default BodyCards
