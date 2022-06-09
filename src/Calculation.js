import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavMenu,NavLink, useNavigate} from 'react-router-dom';
import './Calculation.css';

const Calculation = () => {
    return(
      <div class="Calci">
        
        <form class="calc">
        <label for="from">From </label>
        <input type="text" id="from" placeholder="source" />
        <label for="to">To </label>
        <input type="text" id="to" placeholder="destination" />

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

        <label for="wgt">Approximate weight </label>
        <input type="text" id="wgt" placeholder="weight in kgs"/>
        <div className='button'>
        <button type="button" id="calculate" onclick="calculateCost();">Calculate Shipping</button>
        </div>

        </form>
</div>

        
      
   );
};
export default Calculation;
