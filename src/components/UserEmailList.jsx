import React, { useState,useEffect} from 'react';
import "../App.css";
import natureImg from "../images/natureImg.jpg";
import {NavLink} from  "react-router-dom";

const  UserEmailList=()=>{
 const [localStorageData,setLocalStorageData]=useState([]);  
    
useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("userData"));
    if(data!=null){
        setLocalStorageData(data);
    }
    else{
     setLocalStorageData([]);
    }    
},[])
   

    return (
        <div className="container EmailListMainDiv d-flex flex-column">
           <div className="row  mt-lg-none mt-4 mt-md-4">
               <div className="col-md-8">
                 <img src={natureImg} alt="nature" className="img-fluid"></img>
               </div>
               <div className="col-md-4 d-flex flex-column justify-content-center">
                   <div className="row my-lg-auto mt-2">
                    <div className=" col-12 text-center">
                       <div className="row">
                         <div className="col-12">
                              <h1>Email !</h1>
                         </div>
                         <div className="emailList">
                          {
                          localStorageData.map((entry,id)=>{
                         return (
                             <div className="col-12 email_div py-2" key={id}>
                                 <h6>{entry.email}</h6>
                             </div>
                         );
                        })
                        } 
                         </div>
                        </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="row mx-auto my-2">
               <div className="col-12">
                 <NavLink  exact to="/login"><h3> Go Back</h3></NavLink>  
               </div>
           </div>
        </div>
    )
}
export default UserEmailList;