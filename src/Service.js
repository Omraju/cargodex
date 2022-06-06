import { NavLink } from "react-router-dom";
// import './App.css';
import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Service = () => (
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
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    <div className="img"></div>
    <div className="center">
      <div className="title">Real-Time Visibility for Your Entire Supply Chain</div>
      <div className="sub_title">The #1 trusted for  the world’s most recognized Shipping Management</div>
    </div>
      <section>
        <div className="row">
          <h2 className="section-heading">Our Services</h2>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fas fa-hammer"></i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fas fa-brush"></i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fas fa-wrench"></i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </section>
    <div class="row">
  <section>
      <div id="some-box">
  <h1>Section Heading</h1>

	<article class="row" id="idea-one">
		<div><img src="https://media.istockphoto.com/photos/plane-on-the-ground-with-wide-open-freight-room-picture-id1178750940?k=20&m=1178750940&s=612x612&w=0&h=FePNH94dm8NSgF4v8KVeLfnFYTU_T6KymxJ7Av2aEIw="/></div>
		<div>
			<h3>Idea 1</h3>
			<p>Here's your descriptive text for your idea to sell people on the thing after the image gets their attention. This type of section looks best when there's enough text to take up most of the height of the adjacent image.</p>
			<a href="#">Link to read more</a>
		</div>
	</article>

	<article class="row" id="idea-two">
		<div>
			<h3>Idea 2</h3>
			<p>Alternating images and text works with the natural flow of your user's eyes as they scan the page, allowing their eyes to catch on each of the images in turn. If the user's eyes catch on an image, they'll likely read the accompanying text.</p>
			<a href="#">Link to read more</a>
		</div>
		<div><img src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?cs=srgb&dl=pexels-julius-silver-753331.jpg&fm=jpg"/></div>
	</article>
       </div>   
  </section>
    </div>
    <div class="row">
      <section>
      <div class="container">
    <h1>Service box</h1>
    <div class="row">
        <div class="col-md-3 col-sm-6 ">
            <div class="service-box">
                <div class="service-icon yellow">
                    <div class="front-content">
                        <i class="fa fa-trophy"></i>
                        <h3>design</h3>
                    </div>
                </div>
                <div class="service-content">
                    <h3>design</h3>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 ">
            <div class="service-box">
                <div class="service-icon orange">
                    <div class="front-content">
                        <i class="fa fa-anchor"></i>
                        <h3>php</h3>
                    </div>
                </div>
                <div class="service-content">
                    <h3>php developer</h3>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="service-box ">
                <div class="service-icon red">
                    <div class="front-content">
                        <i class="fa fa-trophy"></i>
                        <h3>Ui Developer</h3>
                    </div>
                </div>
                <div class="service-content">
                    <h3>Developer</h3>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="service-box">
                <div class="service-icon grey">
                    <div class="front-content">
                        <i class="fa fa-paper-plane-o"></i>
                        <h3>java script</h3>
                    </div>
                </div>
                <div class="service-content">
                    <h3>java script</h3>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    </div>     
    <div class="row">
      <section>
      <iframe src="//maps.google.com/maps?q=11.0247° N,77.0021° E&z=15&output=embed"></iframe>
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