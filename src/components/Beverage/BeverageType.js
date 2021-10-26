import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Loading from "../../Globals/Loading.js";

function BeverageType() {
    let types = useParams();
    const [coffeeData, setCoffeeData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    // fetch data from coffee api
    const fetchData = async () => {
        try {
            const fetchData = await fetch(`https://api.sampleapis.com/coffee/${types.type}`);
            const data = await fetchData.json();
            setCoffeeData(data);
            setIsLoading(true);
        } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='container mt-3'>
            <div className='row'>
            <h2 style={{textTransform: 'capitalize'}}>{types.type} Coffee</h2>
            {isLoading ? 
            (coffeeData.map((item) => (
                <div className='col-lg-4  col-md-6 col-sm-12 blog-card ml-1' key={item.id}>
                    <Link className='nav-link' to={`/beverage/${types.type}/${item.id}`}> {item.title} </Link>
                </div>
            )))
            :
            <Loading />
            }
            </div>
        </div>
    )
}

export default BeverageType
