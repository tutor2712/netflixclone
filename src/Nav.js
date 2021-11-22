import React,{useState,useEffect} from 'react';

import "./Nav.css"

function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
      window.addEventListener("scroll",() => {
          if(window.scrollY > 100){
              handleShow(true);
          }else handleShow(false);
      });
      return () =>{
          window.removeEventListener("scroll");
      };  
    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="./Netflix-Logo.png" alt="logo"/>
            <img className="nav_avatar" src="./Profile.jpg" alt="logo-profile"/>
            
        </div>
    )
}

export default Nav
