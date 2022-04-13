import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ApiServics from "../services/ApiServics";


const DoctorAppointmentDetails = () => {

    const [appointment, setAppointmentDetails] = useState([]);
    
    const email = JSON.parse(localStorage.getItem("user"));
    console.log(email.email);
    

    
    const init = () => {
        ApiServics.getDoctorBookingDetails(email.email)
            .then(resp => {
                console.log(resp.data);
                setAppointmentDetails(resp.data);
            }).catch(err => {
                console.log("Some thing Wrong" + err);
            })

    }
    
    useEffect(()=>{
        init();
    },[]);

    


    return (
        <div style={{ marginTop: "5%" }}>
            <h1>All Appointment Details</h1>
            <form class="form-inline" method="get" style={{ marginLeft: "70%" }} >
                <div class="form-group mx-sm-3 mb-2">
                    <label for="email" class="sr-only">Email</label>
                    <input type="text" class="form-control" name="email"  placeholder="Enter Email"></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">get Details</button>
            </form>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <table class="table table-dark">
                    <tr>
                        <th>Appointment ID</th>
                        <th>Patient Name</th>
                        <th>Patient Email</th>
                        <th>Patient Age</th>
                        <th>Doctor Name</th>
                        <th>Doctor Email</th>
                        <th>Appoitment Date</th>
                        <th>Appointment Time</th>
                        <th>Action</th>
                    </tr>
                    {
                        appointment.map(app => (
                            <tr key={app.aid}>
                                <td>{app.aid}</td>
                                <td>{app.name}</td>
                                <td>{app.email}</td>
                                <td>{app.age}</td>
                                <td>{app.dname}</td>
                                <td>{app.demail}</td>
                                <td>{app.appointmentDate}</td>
                                <td>{app.startTime}</td>
                                <td><Link className="btn btn-info" to={`/consultation/${app.email}`}>Consult Patient</Link></td>
                            </tr>
                        ))
                    }

                </table>
                <br />
                <br />

                <br />

                <br />

            </div>
        </div>
    )
}
export default DoctorAppointmentDetails