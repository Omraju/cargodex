import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavMenu,NavLink, useNavigate} from 'react-router-dom';
import './CheckStatus.css';

export const CheckStatus =()=>(
    
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
     <div class="status">
       <div class="stat">
            <h2>Check Status</h2>
            </div>
        <div class="form-group col-xs-12 col-sm-6">
          <h3>Order ID</h3>
          <input name="OrId" type="text" />
        </div>
        <div className="btns">
        <NavLink to = "StatusCheck"><button>Check Status</button></NavLink>
        </div>
     </div>
     </div>
    
);
export default CheckStatus;
