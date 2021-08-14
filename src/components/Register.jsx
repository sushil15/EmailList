import React, { useState } from 'react';
import "../App.css";
import natureImg from "../images/natureImg.jpg";
import {NavLink} from  "react-router-dom";

const  Register=()=>{
  const [userdata,setUserData]=useState({
      name:"",
      number:"",
      email:"",
      password:"",
  });

  const getInfo=(e)=>{
    if(e.target.type=="text"){
      setUserData({...userdata, name:e.target.value});
    }
    else if(e.target.type=="password"){
        setUserData({...userdata, password:e.target.value});
    }
    else if(e.target.type=="email"){
        setUserData({...userdata, email:e.target.value});
    }
    else{
        setUserData({...userdata, number:e.target.value});
    }
  }

  const setFormData=(e)=>{
   e.preventDefault();
  

   if(new RegExp("^[a-z A-Z \s]*$").test(userdata.name) && 
     new  RegExp("^[0-9]{10}$").test(userdata.number) &&
     new RegExp("^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$").test(userdata.email) &&
      new  RegExp("^[a-zA-Z0-9@#$%*&]{8,20}$").test(userdata.password)
     ){
    if(localStorage.getItem("userData") == null){
    localStorage.setItem("userData",JSON.stringify([userdata]));
     }
   else{
    const prevData=JSON.parse(localStorage.getItem("userData"));
    const newData=[...prevData];
    newData.push(userdata);
    localStorage.setItem("userData",JSON.stringify(newData));
   }
  alert("Register Successfully");
  setUserData({...userdata,name:"",email:"",password:"",number:""});
  }
  else{
    alert("Enter valid credential");
  }
}

    return (
        <div className="container registerMainDiv">
           <div className="row mt-lg-none mt-md-4">
               <div className="col-lg-8">
                 <img src={natureImg} alt="nature" className="img-fluid"></img>
               </div>
               <div className="col-lg-4  d-flex flex-column justify-content-center">
                   <div className="row my-lg-auto mt-4">
                       <div className=" col-12 text-center">
                         <h1>Register</h1>
                         <form className="mt-2" onSubmit={setFormData} autoComplete="off">
                            <div className="form-group mt-2">
                            <input onChange={getInfo}  value={userdata.name}   type="text" className="form-control"   placeholder="Enter your name" required/>
                           </div>
                           <div className="form-group mt-2">
                            <input onChange={getInfo}  value={userdata.number} type="number" className="form-control"   placeholder="Enter your mobile number" required/>
                           </div>
                           <div className="form-group mt-2">
                             <input onChange={getInfo}  value={userdata.email} type="email" className="form-control"   placeholder="Enter your email" required/>
                           </div>
                           <div className="form-group my-2">
                            <input  onChange={getInfo}  value={userdata.password} type="password" className="form-control"  placeholder="Enter your password" required/>
                           </div>
                          <button type="submit" className="btn btn-primary">Register</button>
                           <p> Have you already register ? <NavLink exact to="/login">Please login</NavLink></p>
                       </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Register;