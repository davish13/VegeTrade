import React,{useState} from "react";
import "./login.css";
import LoginBg from "./images/loginbg.jpg";
import { Link } from "react-router-dom";

function Login(){
    // const [email,setEmail] =useState("");
    // const [password,setPassword] = useState("");

    // const handleLogin = async ()=>{
    //     try{
    //         const response = await fetch("http://localhost:5000/login", {
    //             method: "POST",
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ email, password }),
    //           });
    //           if(response.ok){
    //             console.log("Login Successfully");
    //           }
    //           else{
    //             console.log("Login failed")
    //           }
    //     }catch (error){
    //         console.log("Login failed:",error);
    // }
    return(
        <div className="login"> 
            <img src={LoginBg} className="loginbg"/>
                <div className="container">
                    <div className="head"><h2>LOGIN</h2></div>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" placeholder="email..." /*value={email} onChange={(e)=>{setEmail(e.target.value)}}*//>
                    </div>
                    <div className="pwd">
                        <label>Password</label>
                        <input type="password" placeholder="pasword..." /*value={password} onChange={(e)=>{setPassword(e.target.value)}}*//>
                    </div>
                    <div className="btn">
                        <Link to="/vegtrade" className="btn-login">
                        <button type="click" /* onClick={handleLogin}*/>Login</button>
                        </Link>
                       
                    </div>

                    <div className="signuplink">
                        <h4>OR</h4>
                        <a href="#">
                        <Link to="/register">
                        Create an account
                        </Link>
                            
                            </a>
                    </div>
                </div>
            </div>
    );
}


export default Login;