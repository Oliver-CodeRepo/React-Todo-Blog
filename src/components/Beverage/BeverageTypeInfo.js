import { Link, useParams } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import Loading from "../../Globals/Loading.js";


function BeverageTypeInfo() {

    let params = useParams();
    const [coffeeData, setCoffeeData] = useState({})
    const [ingredients, setIngredients ] = useState([])
    const [isLoading, setIsLoading ] = useState(false)


    // fetch selected item info from coffee api
    const fetchData = async () => {
        try {
            const fetchedData = await fetch(`https://api.sampleapis.com/coffee/${params.type}/${params.id}`)
            const data = await fetchedData.json()
            setCoffeeData(data);
            setIngredients(data.ingredients);
            setIsLoading(true)

        }catch(e){
            console.log(e);
        }
    }


    useEffect(() => {
        fetchData()
    })

    return (
        
        <div className='container'>
            <div className='container'>
                <div className="row ">
                    <Link className='col-1 nav-link text-danger' to={`/`}> Home </Link>
                    <Link className='col-1 nav-link text-secondary' to={`/beverage`}> Beverage </Link>
                    <Link className='col-2 nav-link text-primary' to={`/beverage/${params.type}`}> {params.type} coffee</Link>
                </div>  
            </div>
            { isLoading ? (
            <div className='row d-flex justify-content-center align-items-center '>
                <div className="blog-card col-12 mt-3 ">
                    <div className="meta">
                        <div className="photo" style={{backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)`}}></div>
                    </div>
                    <div className="description">
                        <h1>{coffeeData.title}</h1>
                        <h2>{coffeeData.description}</h2>
                        <h5>Ingredients</h5>
                        <ul className="list-group">
                        {ingredients.map((item) => (
                            <li className="list-group-item list-group-item-action">{item}</li>                    
                        ))}
                        </ul>
                    </div>                
                </div>           
            </div>) : <Loading />}

        </div>
    )
}

export default BeverageTypeInfo
