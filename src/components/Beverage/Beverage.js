import React from 'react'
import { Link } from 'react-router-dom'


function Beverage() {

    return (
        <div className='container'>
            <h1>Coffee type</h1>
            <div className='row d-flex justify-content-between'>
                <div className="blog-card col-lg-6">
                    <div className="meta">
                    <div className="photo" style={{backgroundImage: `url(https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                    </div>
                    <div className="description">
                    <h1>Iced Coffee</h1>
                    <h2>Stimulate yourself chilled</h2>
                    <p> Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee in the normal way and then serving it over ice or in cold milk, or by brewing the coffee cold. </p>
                    <p className="read-more">
                        <Link to='/beverage/iced'> Read More</Link>
                    </p>
                    </div>
                </div>
                <div className="blog-card col-lg-6">
                    <div className="meta">
                    <div className="photo" style={{backgroundImage: `url(https://media.istockphoto.com/photos/cup-of-coffee-picture-id467148153?b=1&k=20&m=467148153&s=170667a&w=0&h=R5YmcC91P9qiTzSdb64CQMTwZvG2XH-IgeVKw5MY6v0=)`}}></div>
                    </div>
                    <div className="description">
                    <h1>Hot Coffee</h1>
                    <h2>Hype yourself as the tropical sun</h2>
                    <p>Hot brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.</p>
                    <p className="read-more">
                        <Link to='/beverage/hot'> Read More</Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beverage
