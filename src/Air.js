import { NavLink } from "react-router-dom";
import './App.css';
import './Air.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Air = () => (
    <div>
        <nav>
      <div className="menu">
      <div className="logo">
        <a href="#">Cargoodex</a>
       </div>
       <ul>
       <li><NavLink to=".Homepage">Home</NavLink></li>
       <li><NavLink to="/About">About</NavLink></li>
       <li><NavLink to="/Service">services</NavLink></li>
       <li><NavLink to="/Shipping">Shipping</NavLink></li>
       <li><NavLink to="/">Logout</NavLink></li>
       </ul>
       </div>
        </nav>
       <div className="img"></div>
       <div class="Calci">
           <form class="calc">
               <label for="from">From </label>
               <input type="text" id="from" name="from" placeholder="source" value="" />
               <label for="to">To </label>
               <input type="text" id="to" name="to" placeholder="destination" value="" />
               <label for="product">Mode of shipment</label>
               <select name="" id="product">
                   <option value="Select Option">Select Option</option>
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
                       <label for="wgt">Approximate weight </label>
                       <input type="text" id="wgt" name="wgt" placeholder="weight in kgs" value="" />
                       <div className='button'>
                           <button type="button" id="calculate" onclick="calculateCost();">Calculate Shipping</button>
                        </div>
            </form>
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