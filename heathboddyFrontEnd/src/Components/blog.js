import React from "react";
import "./blog.css";

const Blog = function () {
    return (
        <div>
            <div >
                <h1 align="center" style={{ font: "bold", fontFamily: "fGeorgia" }}>Health Baddy Blog</h1>
                <h5> Read the latest posts from experts at Harvard Health Publishing covering a variety of health topics and perspectives on medical news.</h5>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Children's Health</h5>
                            <p className="card-text">Pandemic challenges may affect babies — possibly in long-lasting ways</p>
                            <a href="#" className="btn btn-info">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Staying Healthy</h5>
                            <p className="card-text">4 immune-boosting strategies that count right now</p>
                            <a href="#" className="btn btn-info">Know More</a>

                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Pain</h5>
                            <p className="card-text">If you have knee pain, telehealth may help</p>
                            <a href="#" className="btn btn-info">Know More</a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Children's Health</h5>
                            <p className="card-text">How to address opposition in young children</p>
                            <a href="#" className="btn btn-info">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Men's Health</h5>
                            <p className="card-text">New study investigates treatment-associated regrets in prostate cancer</p>
                            <a href="#" className="btn btn-info">Know More</a>

                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Mind & Mood</h5>
                            <p className="card-text">Minimizing successes and magnifying failures? Change your distorted thinking</p>
                            <a href="#" className="btn btn-info">Know More</a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Staying Healthy</h5>
                            <p className="card-text">Are poinsettias, mistletoe, or holly plants dangerous?</p>
                            <a href="#" className="btn btn-info">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Mind & Mood</h5>
                            <p className="card-text">Waiting for motivation to strike? Try rethinking that</p>
                            <a href="#" className="btn btn-info">Know More</a>

                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Heart Health</h5>
                            <p className="card-text">5 numbers linked to ideal heart health</p>
                            <a href="#" className="btn btn-info">Know More</a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Blog;