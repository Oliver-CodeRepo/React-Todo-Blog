import React from 'react'

function TaskList() {
    return (
        <div className='col-lg-8 col-md-7 col-sm-12'>
            <div className='card my-3'>
                <div className='card-header'>
                    ToDo Tasks
                </div>
                <div className='card-body'>
                    <ul className='ul'>
                        <li className='li'>Lorem dolor amet sit <span className='li-right'>X</span> </li>
                        <li className='li'>Lorem ipsum dolor sit amet consecutor adipiscingLorem ipsum dolor sit amet </li>
                        <li className='li'>Lorem ipsum dolor sit amet consecutor</li>
                        <li className='li'>Lorem dolor amet sit </li>
                        <li className='li'>Lorem dolor amet sit </li>
                        <li className='li'>
                            Lorem ipsum dolor sit amet consecutor adipiscingLorem ipsum dolor sit amet 
                            <span className='li-right text-danger'>
                                <i className="fas fa-times    "></i>
                            </span> 
                        </li>
                        <li className='li'>Lorem ipsum dolor sit amet consecutor</li>
                        <li className='li'>Lorem dolor amet sit </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TaskList
