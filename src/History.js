import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavMenu,NavLink, useNavigate} from 'react-router-dom';
import './NewShipment.css';
import './History.css';
export const History=()=>(
 
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
   

        <div class="table-wrapper">
    <table class="table-03">
      <tr>
        <th>Order Id</th>
        <th>Mode</th>
        <th>Type of good</th>
        <th>Delivery date</th>
        <th>Review</th>
      </tr>
  
      <tr>
        <td>190345</td>
        <td>Ocean</td>
        <td>Clothes</td>
        <td>22/5/2022</td>
        <td><div className="btns">
      <NavLink to = "/Review"><button>Review</button></NavLink>
    </div></td>
      </tr>
  
      <tr>
        <td>190678</td>
        <td>Air</td>
        <td>Industrial goods</td>
        <td>7/3/2022</td>
        <td><div className="btns">
      <NavLink to = "/Review"><button>Review</button></NavLink>
    </div></td>
      </tr>
    </table>
  </div>
  <footer class="foot-col">
          <div class="foot-main">
            <div class="foot-row">
            <h4>Company</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Service">services</NavLink></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="foot-row">
            <h4>Get help</h4>
            <ul>
                <li><a href="#">Track order</a></li>
                <li><a href="#">Return</a></li>
                <li><a href="#">Payment</a></li>
                <li><a href="#">Shipping</a></li>
            </ul>
        </div>
        <div class="foot-row">
            <h4>Connet</h4>
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
    </div>
</footer>
    </div>
  
    );

