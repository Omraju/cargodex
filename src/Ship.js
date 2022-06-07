import { NavLink } from "react-router-dom";
import './App.css';
import './Ship.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Ship = () => (
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
       <div>
          <section>
          <div id="ocean"></div>
       <div id="wholeship">
          <div id="ship-container">
              <div class="ship">
                  </div><div class="smokestack ss1">
                      <div class="smoke smoke1"></div>
                       </div>
                       <div class="smokestack ss2"><div class="smoke smoke2"></div></div>
                       <div class="smokestack ss3"><div class="smoke smoke3"></div></div>
                       <div class="smokestack ss4"><div class="smoke smoke4"></div></div>
                        <div class="deck">
                             <div class="compartments-lower">
                                 <div class="door d1"></div>
                                 <div class="door d2"></div>
                                 <div class="door d3"></div>
                                 <div class="door d4"></div>
                                 <div class="door d5"></div>
                                 <div class="door d6"></div>
                                 <div class="door d7"></div>
                                 <div class="door d8"></div>
                                 <div class="door d9"></div>
                                 <div class="door d10"></div>
                                 <div class="door d11"></div>
                                 <div class="door d12"></div>
                                 <div class="door d13"></div>
                             </div>
                             <div class="compartments-upper">
                                 <div class="cph cp1"></div>
                                 <div class="cph cp2"></div>
                                 <div class="cph cp3"></div>
                                 <div class="cph cp4"></div>
                                 <div class="cph cp5"></div>
                                 <div class="cph cp6"></div>
                                 <div class="cph cp7"></div>
                                 <div class="cph cp8"></div>
                                 <div class="cph cp9"></div>
                                 <div class="cph cp10"></div>
                                 <div class="cph cp11"></div>
                                 <div class="cph cp12"></div>
                                 </div>
                                 <div class="roof"></div>
                                 </div>
                                 <div class="hull">
                                     <div class="hull-top">
                                         <div class="porthole p1"></div>
                                         <div class="porthole p2"></div>
                                         <div class="porthole p3"></div>
                                         <div class="porthole p4"></div>
                                         <div class="porthole p5"></div>
                                         <div class="porthole p6"></div>
                                         <div class="porthole p7"></div>
                                         <div class="porthole p8"></div>
                                         <div class="porthole p9"></div>
                                         <div class="porthole p10"></div>
                                         <div class="porthole p11"></div>
                                         <div class="porthole p12"></div>
                                         <div class="porthole p13"></div>
                                         <div class="porthole p14"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
          </section>
       </div>   
 
        <footer class="foot-col">
          <div class="foot-main">
            <div class="foot-row">
            <h4>Company</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Service">services</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
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