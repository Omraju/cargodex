import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavMenu,NavLink, useNavigate} from 'react-router-dom';
import './Review.css';
export const StatusCheck=()=>(
 
<div className='hist'>
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="#">Cargoodex</a>
        </div>

        <ul>
          <li><a href="/Home">Home</a></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Service">services</NavLink></li>
          <li><NavLink to="/Shipping">Shipping</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    
    <div className="img"></div>
        <div className="review">
             <div className="rev">
        <h2 className="section-heading">Check Status</h2>
        </div>
      
     
       <label for="orderid">OrderId </label>
       <input type="number" id="id"/>
       <label for="review">Status </label>
       <input type="message" id="rev" />
       <label for="review">Expected date of delivery </label>
       <input type="message" id="rev" />
       <div className="button">
        <NavLink to = "StatusCheck"><button>Cancel Booking</button></NavLink>
        </div>
       </div>
      </div>
   );