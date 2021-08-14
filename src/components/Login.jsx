import React, { useState } from 'react';
import "../App.css";
import natureImg from "../images/natureImg.jpg";
import {NavLink,useHistory} from  "react-router-dom";

const  Login=()=>{
    const history=useHistory();
    const [logindata,setLoginData]=useState({
        email:"",
        password:""
    });
   
    const getLoginData=(e)=>{
          if(e.target.type=="email"){
            setLoginData({...logindata, email:e.target.value});
          }
          else{
            setLoginData({...logindata, password:e.target.value});
          }
      }   

     const checkLogin=(e)=>{
        e.preventDefault();
        if(new RegExp("^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$").test(logindata.email) &&
        new RegExp("^[a-zA-Z0-9@#$%*&]{8,20}$").test(logindata.password)
       ){
          if(localStorage.getItem("userData") == null){
            alert("Please register");  
           }
           else{
            const prevData=JSON.parse(localStorage.getItem("userData"));
            const newData=[...prevData];
            console.log(newData);
            const value=newData.find((data)=>{
             return  data.email==logindata.email && data.password==logindata.password;
            })

            if(value != undefined){
                history.push("/emaillist");
            }
            else{
                alert("User not found ! please register");  
            }

           }
        }
        else{
          alert("Enter valid credential");
        }
     }

    return (
        <div className="container loginMainDiv">
           <div className="row  mt-lg-none mt-4 mt-md-4">
               <div className="col-lg-8">
                 <img src={natureImg} alt="nature" className="img-fluid"></img>
               </div>
               <div className="col-lg-4 d-flex flex-column justify-content-center">
                   <div className="row my-lg-auto mt-4">
                       <div className=" col-12 text-center">
                         <h1>Welcome Back !</h1>
                         <form className="mt-2" onSubmit={checkLogin} autoComplete="off">
                           <div className="form-group mt-2">
                             <input onChange={getLoginData} value={logindata.email} type="email" className="form-control"   placeholder="Enter your email" required/>
                           </div>
                           <div className="form-group my-2">
                            <input onChange={getLoginData} value={logindata.password} type="password" className="form-control"   placeholder="Enter your password" required/>
                           </div>
                          <button type="submit" className="btn btn-primary">Login</button>
                          <p>Not yet register ? <NavLink exact to="/">please register</NavLink></p>  
                       </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Login;