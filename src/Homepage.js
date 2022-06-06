
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
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-store text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Cargo Storage</h6>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
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