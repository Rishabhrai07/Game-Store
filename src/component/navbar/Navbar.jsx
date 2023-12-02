
import {  useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Screen from '../../component/screen/Screen'

import './style.css'



const  Navbar =() =>{
  const [endpoint,setEndpoint]=useState(null);

 
  
  return (
    <>
      <div className="navbar-container">
        <div className="logo">My Games Store</div>
          <input value={endpoint} onChange={(e)=>setEndpoint(e.target.value)} className="search-container" type="text" placeholder="Search your favorite games here...." />
          <IoSearchOutline className="search-icon" />
      </div>
          <Screen props={endpoint}/>
      
    </>
  );
}

export default Navbar;
