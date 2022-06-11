import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavMenu,NavLink, useNavigate} from 'react-router-dom';
import './NewShipment.css';

export const NewShipment =()=>{
    return(
        <><div>
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
        <div className="img"><h1>New SHipment</h1></div>


        <form class="book">
          <div className="row">
            <h2 className="section-heading">Create New Shipment</h2>
          </div>

          <label for="from">Company Name </label>
          <input type="text" id="from" name="from" placeholder="name of your company" />
          <label for="to">Email </label>
          <input type="text" id="to" name="to" placeholder="email" />
          <label for="to">From </label>
          <input type="text" id="to" name="to" placeholder="source" />
          <label for="to">To </label>
          <input type="text" id="to" name="to" placeholder="destination" />
          <label for="product">Mode of shipment</label>
          <select name="" id="product">
            <option value="air">Air transportation</option>
            <option value="ocean">Ocean transportation</option>
            <option value="road">Road transportation</option>
          </select>
          <label for="product">Types of goods</label>
          <select name="" id="product">
            <option value="ec">Electronics</option>
            <option value="cl">Clothes</option>
            <option value="au">Automobiles</option>
            <option value="ha">Household appliances</option>
            <option value="ig">Industrial goods</option>
            <option value="lg">Luxury goods</option>
            <option value="gl">Glass materials</option>
            <option value="og">Other goods</option>
          </select>
          <label for="to">Weight </label>
          <input type="text" id="to" name="to" placeholder="weight in kgs" />
          <div className="button">
            <NavLink to="/NewShipment"><button>Confirm and pay</button></NavLink>
          </div>
        </form>
      </div><footer class="foot-col">
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
        </footer></>
    );  
}
export default NewShipment;