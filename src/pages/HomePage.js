import React from "react";
import {useSelector} from 'react-redux';


export default function HomePage() {
let user=useSelector(state=>state.user)
let userdetail=()=>{
        
  if(user.authenticate===true){return (
  <div style={{fontSize:"25px", fontStyle:"italics", textAlign:"center"}}>Welcome!
    <span style={{textAlign:"center",color:"rgb(153, 29, 147)" }}>   {user.username}</span>
 
  <div style={{fontSize:"15px"}}>counter is done yay</div>
  </div>)} 
}

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{height:"90vh",
    // border:"1px solid black"
    }}>

  {userdetail()}

      <div style={{fontSize:"60px",marginBottom:"30px" }}>HomePage</div>
    </div>
  );
}