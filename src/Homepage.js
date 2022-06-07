
import { NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Homepage = () => (
    <div>
        <nav>
            <div className="menu">
                <div className="logo">
                    <a href="#">Cargoodex</a>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/service">services</NavLink></li>
                    <li><NavLink to="/Shipping">Shipping</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        <div className="img"></div>
        <div className="center">
            <div className="title">Real-Time Visibility for Your Entire Supply Chain</div>
            <div className="sub_title">The #1 trusted for  the world’s most recognized Shipping Management</div>
            <div className="btns">
                <NavLink to="/About"><button>Learn More</button></NavLink>
            </div>
        </div>
        <div className="container">
            <div className="row align-items-center">
            </div>
        </div>
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="text-center pb-2">
                    <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
                    <h1 className="mb-4">Best Logistic Services</h1>
                </div>
                <div className="row pb-3">
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-plane text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
                        </div>
                        <p>Air freight parcel delivery is the transfer and shipment of goods via an air carrier, which may be charter or commercial. Such shipments travel out of commercial and passenger aviation gateways to anywhere planes can fly and land.</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
                        </div>
                        <p>ocean freight is the method of transporting often large loads of goods by sea – putting cargo in large containers which are loaded onto vessels. Over 90% of all the world's trade is carried by sea – and even more in some countries.</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
                        </div>
                        <p>Land transport is the transport or movement of people, animals or goods from one location to another location on land. The two main forms of land transport can be considered to be rail transport and road transport.</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-store text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Cargo Storage</h6>
                        </div>
                        <p>Cargo Handling refers to the overall activities in warehouses and logistics centers, such as loading and unloading cargo, transporting cargo, warehousing, picking, and sorting.</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
            {/* <div class="row">
  {/* <section>
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
    </div>} */}
        <div class="container">
           {/* <h1 class="text-center">ggg</h1> */}
              <div class="row">
              <div class="col-md-6">
                <img src="https://media.istockphoto.com/photos/loading-cargo-into-the-aircraft-before-departure-in-domodedovo-in-picture-id1047540990?k=20&m=1047540990&s=612x612&w=0&h=uKvjzz45-8R31nlQod4SczMn42n8DMtDDKWB1uK9SsI=" alt="" class="w-100" />
              </div>
         <div class="col-md-6">
          <div class="row align-items-center h-100">
            <div class="col">
               <h1 class="display-3">CARGOODEX</h1>
               <p class="lead">Flexbox grids help you build some really nice layouts.
               <br /><br />
               {/* <a href="" class="">Learn More</a> */}
               </p>
            </div>
          </div>
         </div>
        </div>
        </div>
    
        <footer className="foot-col">
            <div className="foot-main">
                <div className="foot-row">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
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
)