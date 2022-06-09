import { NavLink } from "react-router-dom";
import './App.css';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const About = () => (
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
      <li><NavLink to="/Homepage">Logout</NavLink></li>
     </ul>
    </div>
   </nav>
   <div className="img"></div>
      <div className="center">
        
    </div>
    <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
            <h6>World wide</h6>
            <p>Global Services means internet-related services, including but not limited to the streaming media, web site hosting, maintenance, content delivery, and e-commerce services offered by Global to its customers in the ordinary course of its business</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <h6>Tracking service</h6>
            <p>To track a package, locate the tracking number sent to you and enter it on the shipping carrier's website. If the shipper uses self-delivery or in-house shipping, they may have a specific tracking solution they will electronically send to you.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
            <h6>Business Growth</h6>
            <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
            <h6>Market Strategy</h6>
            <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-camera"></i></span>
            <h6>Affordable cost</h6>
            <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* <section class="section-prices">
<h2 class="section-header">Our Pricing</h2>
<div class="list-boxs">
	<div class="card starter">
		<div class="head">
			Starter
		</div>
		<div class="ticket">$5.90</div>
		<div class="body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore
				magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
			<button class="btn">Order Now</button>
		</div>
	</div>
	<div class="card standard">
		<div class="head">
			Standard
		</div>
		<div class="ticket">$10.50</div>
		<div class="body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore
				magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
			<button class="btn">Order Now</button>
		</div>
	</div>
	<div class="card premium">
		<div class="head">
			Premium
		</div>
		<div class="ticket">$15.90</div>
		<div class="body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore
				magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
			<button class="btn">Order Now</button>
		</div>
	</div>
</div>
</section>
  </div> */}

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