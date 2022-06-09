import { NavLink } from "react-router-dom"
import './Review.css';
import './NewShipment.css';
import './History.css';
export const Review =()=>{
    return(
        <div>
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
        <h2 className="section-heading">Review</h2>
        </div>
      
     
       <label for="orderid">OrderId </label>
       <input type="number" id="id" placeholder="Your order Id"/>
       <label for="review">Add your review </label>
       <input type="message" id="rev" placeholder="Kindly add your review here"/>
       </div>
      </div>
    );
}
export default Review;