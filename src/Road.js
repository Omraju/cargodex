import { NavLink } from "react-router-dom";
import './App.css';
import './Road.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Road = () => (
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
      <li><NavLink to="/Contact">Contact</NavLink></li>
     </ul>
    </div>
   </nav>
   <div className="img"></div>
      <div className="center">
        </div>
        <div>
            <h1>
                hii
            </h1>
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