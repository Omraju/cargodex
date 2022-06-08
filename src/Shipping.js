import { NavLink } from "react-router-dom";
// import './App.css';
import './Shipping.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Shipping = () => (
  <div>
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="#">Cargoodex</a>
        </div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Service">services</NavLink></li>
          <li><NavLink to="/Shipping">Shipping</NavLink></li>
          <li><NavLink to=".Homepage">Logout</NavLink></li>
        </ul>
      </div>
    </nav>
    <div className="img"></div>
    {/* <div className="center">
      <div className="title">Real-Time Visibility for Your Entire Supply Chain</div>
      <div className="sub_title">The #1 trusted for  the world’s most recognized Shipping Management</div>
    </div> */}
    <div>
    <div class="container">

<h1 class="heading">Image Gallery with CSS Grid <span>& Flexbox Fallback</span></h1>

<div class="gallery">

  <div class="gallery-item">
    <img class="gallery-image" src="https://img.freepik.com/free-photo/top-viwe-transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-510.jpg?w=1380" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"></img>
  </div>

  <div class="gallery-item">
    <img class="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt="sunset behind San Francisco city skyline"></img>
  </div>

  <div class="gallery-item">
    <img class="gallery-image" src="https://img.freepik.com/free-photo/global-transportation-industry_37416-162.jpg?w=1380" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"></img>
  </div>

  <div class="gallery-item">
    <img class="gallery-image" src="https://img.freepik.com/free-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-487.jpg?w=1380" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"></img>
  </div>

  <div class="gallery-item">
    <img class="gallery-image" src="https://img.freepik.com/free-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-505.jpg?w=1380" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"></img>
  </div>

  <div class="gallery-item">
    <img class="gallery-image" src="https://img.freepik.com/free-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-507.jpg?w=1380"></img>
  </div>

</div>
</div>
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