import React from "react";
import Products from './products';
import OnDemand from './OnDemand';
import LowDemand from './LowDemand';
import './App.css';
function VegTrade(){
    
    return(
        <>
            <div className='home'> 
                <h2>Featured Products</h2>
                <Products/>
            </div>
        
            <div className='home-ondemand'>
                <OnDemand/>
            </div>
            <div className='main-low'>
                <h2>Low Demand</h2>
                <LowDemand/>
            </div>
      </>
    );
}

export default VegTrade;