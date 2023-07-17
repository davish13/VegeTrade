import React from "react";
import "./signup.css";
import SignUpBg from "./images/signbg.jpg";
import {Link} from "react-router-dom"
function SignUp(){
    return(
        <div className="signup">
                <img src={SignUpBg} className="signupbg" />
                <div className="container">
                    <div className="head"><h2>SIGNUP</h2></div>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" placeholder="email..." />
                    </div>
                    <div className="pwd">
                        <label>Password</label>
                        <input type="password" placeholder="pasword..." />
                    </div>
                    <div className="con-pwd">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="pasword..." />
                    </div>
                    <div className="signUp-btn">
                      
                        <Link to="/login" className="signup-link">
                        <button type="Click" >
                        Sign Up
                        </button>
                        </Link>
                      
                    </div>
                </div>
        </div>
    );

}

export default SignUp;