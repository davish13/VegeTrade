import React from "react";
import {FaFacebook} from "react-icons/fa";
import {BsLinkedin,BsGithub} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";

function Footer(){
    return(
        <>
            <ul className='ul-footer'>
              <li className='main-footer'>
                  <ul>
                    <li>YOUR SECURITY</li>
                    <li>
                      <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy & Security</li>
                        <li>Cookie Policy</li>
                        <li>Accessibility</li>
                      </ul>
                    </li>
                  </ul>
              </li>
              <li className='main-footer'>
                    <ul>
                      <li>WHO WE ARE</li>
                      <li>
                        <ul>
                          <li>Our History</li>
                          <li>Our Markets</li>
                          <li>Careers</li>

                          <li>Corporate Polices</li>
                        </ul>
                      </li>
                    </ul>  
              </li>
              <li className='main-footer'>
              <ul>
                      <li>WHOLE & RETAILS SALES</li>
                      <li>
                        <ul>
                          <li>At Your Sales</li>
                          <li>What Sales</li>
                          <li>Veg Trade</li>
                          <li>Order</li>
                      
                        </ul>
                      </li>
                    </ul> 
              </li>
              <li className='main-footer'>
              <ul>
                      <li>HELP & SUPPORT</li>
                      <li>
                        <ul>
                          <li>Contact Us</li>
                          <li>Delivery</li>
                          <li>Payment Options</li>
                          <li>Payment Security</li>
                        </ul>
                      </li>
                    </ul> 
              </li>
              <li className='main-footer'>
                        <ul className='main-follow'>
                          <li >
                            <h2>FOLLOW US ON</h2>
                            <div className='icon'>
                              <a href='#'><FaFacebook/></a>
                              <a href='#'><BsLinkedin/></a>
                              <a href='#'><BiLogoGmail/></a> 
                              <a href='#'><BsGithub/></a> 
                            </div>
                          </li>
                          <li>
                            <h3>For the latest price and VIP information</h3>
                            <div className='footer-email'>
                              <input type='text' placeholder='Enter Your Mail...'/>
                              <button type='click'>SUBMIT</button>
                            </div>
                          </li>
                        </ul>
              </li> 
            </ul>
        </>
        

    );
}
export default Footer;