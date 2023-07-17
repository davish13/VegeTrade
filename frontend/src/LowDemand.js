import React from 'react';
import {lowdata} from './data.js';
import { Link } from 'react-router-dom';
const products = lowdata.products;



function LowDemand(){
    return(
        
        <>
        
            <div className='products'>
                
                {products.map((product)=>{
                    return(<div key={product.slug} className='product-items'>
                        <div className='product-img'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className='product-details'>
                            <p className='product-name'>{product.name}</p>
                            <p className='product-price'> ₹ {product.price}</p>

                            <Link to={`/product/${product.slug}?source=lowdata&csv=${product.name}`} className="view-more">
                            <button className='view-more'>View More</button>
                            </Link>
                                
                            
                            <button className='add-to-cart'>Add to Cart</button>
                        </div>   
                           
                            
                    </div>);
                })}
            </div>
            
        </>
    );
}



export default LowDemand;


