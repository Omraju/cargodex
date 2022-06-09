import { NavLink } from "react-router-dom";
// import './App.css';
import './Shipping.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckStatus } from "./CheckStatus";
export const Shipping = () => (
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
    {/* <div className="center">
      <div className="title">Real-Time Visibility for Your Entire Supply Chain</div>
      <div className="sub_title">The #1 trusted for  the world’s most recognized Shipping Management</div>
    </div> */}
    <div>
    <section>
        <div className="row">
          <h2 className="section-heading">Shipping</h2>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fas fa-hammer"></i>
              </div>
              <h3>Create shipment</h3>
              <p>
              <li><NavLink to="/NewShipment">Click here to create new shipment</NavLink></li>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fas fa-brush"></i>
              </div>
              <h3>View history</h3>
              <p>
              <li><NavLink to="/History">Click here to view history</NavLink></li>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fas fa-wrench"></i>
              </div>
              <h3>Check status</h3>
              <p>
              <li><NavLink to="/CheckStatus">Click here to view history</NavLink></li>
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
<footer className="foot-col" >
      <div className="foot-main">
        <div className="foot-row">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><NavLink to="/Service">services</NavLink></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="foot-row">
          <h4>Get help</h4>
          <ul>
            <li><a href="#">Track order</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Shipping</a></li>
          </ul>
        </div>
        <div className="foot-row">
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
