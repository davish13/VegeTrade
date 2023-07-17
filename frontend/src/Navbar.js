import React from 'react';
import {BiSearchAlt  } from "react-icons/bi";
import {BsCart4} from "react-icons/bs";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className='nav'>
              <div className='logo'>
                VegTraDE
            </div>
            <div className='nav-corner'>
              
               <ul className='nav-inner'>
                    <li className='search'>
                        <input type='text' className='search-in' placeholder='Search Vegetables...'/>
                        <BiSearchAlt className='search-icon' />
                    </li>
                    <li className='markets'>
                        <button className='markets-btn'>Markets</button>
                    </li>
                    <li className='addCart'>
                        <h4>Cart</h4>
                        <BsCart4 className='add-btn' />
                    </li>
               </ul>
            </div>
            
        </div>
      
    );

}
export default Navbar;