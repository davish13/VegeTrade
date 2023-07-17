import React from 'react';
// import Beans from './images/bean.jpg';
// import Onion from './images/onion.jpg';
// import Ginder from './images/ginder.jpg';
// import Celery from "./images/Celery.jpg";
// import LineChart from './components/LineChart';
// import Tomoto from "./images/tomoto.jpg";
// import Chilli from "./images/chilli.jpg";
// import Mushroom from "./images/Mushrooms.jpg"
import LineChart from './components/LineChart';
import {Ondata} from './data.js';
import { Link } from 'react-router-dom';
const products = Ondata.products;


function OnDemand(){
    return(
        <>
          <h2>On Demand</h2>  
          <div className="demand-products">
            <div className='ondemand'>
                        {products.map((product)=>{
                            return(<div key={product.slug} className='product-items'>
                                <div className='product-img'>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className='product-details'>
                                    <p className='product-name'>{product.name}</p>
                                    <p className='product-price'> ₹ {product.price}</p>
                                    <Link to={`/product/${product.slug}?source=ondemand&csv=${product.name}`} className='view-more' >
                                        <button className='view-more'>View More</button>
                                    </Link>
                                    
                                    <button className='add-to-cart'>Add to Cart</button>
                                </div>   
                                
                                    
                            </div>);
                        })}
            </div>
            <div className='graph'>
                        <LineChart/>
            </div>
                
            </div>
        </>
    );
}

export default OnDemand;