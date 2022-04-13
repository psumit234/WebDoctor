import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css";
const Home = function(){
    return(
        <div className="video-background-holder id1">
            <div className="video-background-overlay"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="/videos/video1.mp4" type="video/mp4"></source>
            </video>
            <div className="video-background-content container h-100">
                <div className=" d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <main className="px-3">
                            <h1 className="display-2">WebDoctor</h1>
                            <p className="lead">It is extensive health magement system. Track all your health history with ease. </p>
                            <p className="lead">
                                <a href="/learn" className="btn btn-outline-light">Learn more....</a>
                            </p>
                        </main>

                    </div>

                </div>

            </div>

            
            
        </div>
    )
}
export default Home;