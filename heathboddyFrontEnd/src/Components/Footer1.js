import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer1.css";



const Footer1 = function () {
    return (
        <div>
            <div class="footer">
                <div class="inner-footer">


                    <div class="footer-items">
                        <h1>WebDoctor</h1>
                        <p>We are here for you make your life Healthy</p>
                    </div>


                    <div class="footer-items">
                        <h3>Quick Links</h3>
                        <div class="border1"></div>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="#"><li>Search</li></a>
                            <a href="#"><li>Contact</li></a>
                            <a href="about"><li>About</li></a>
                        </ul>
                    </div>


                    <div class="footer-items">
                        <h3>Cities</h3>
                        <div class="border1"></div>
                        <ul>
                            <a href="#"><li>Varanasi</li></a>
                            <a href="#"><li>Pune</li></a>
                            <a href="#"><li>Lucknow</li></a>
                            <a href="#"><li>Mumbai</li></a>
                        </ul>
                    </div>


                    <div class="footer-items">
                        <h3>Contact us</h3>
                        <div class="border1"></div>
                        <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i>Sumit Patel</li>
                            <li><i class="fa fa-phone" aria-hidden="true"></i>6386994033</li>
                            <li><i class="fa fa-envelope" aria-hidden="true"></i>psumitkumar471@gmail.com</li>
                        </ul>


                        <div class="social-media">
                            {/* facebook */}
                            <a style={{color: "#3b5998;"}} href="#?" role="button">
                            <i class="fab fa-facebook-f fa-lg"></i>
                            </a>

                            {/* twitter */}
                            <a style={{color: "#55acee;"}} href="twitter" role="button"
                            ><i class="fab fa-twitter fa-lg"></i
                            ></a>

                            {/* instagram */}
                            <a style={{color: "#ac2bac;"}} href="instagram" role="button"
                            ><i class="fab fa-instagram fa-lg"></i
                            ></a>
                        </div>
                    </div>
                </div>


                <div class="footer-bottom">
                    Copyright &copy; WebDoctor 2022.
                </div>
            </div>
        </div>
    )
}
export default Footer1;
