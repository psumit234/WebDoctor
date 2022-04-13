
import React, { useEffect, useState } from "react";
import ApiServics from "../services/ApiServics";

const GetAppointmentDetails = () => {

    const [appointment,setAppointment] = useState([]);
    
    
    
    
    const email1 = JSON.parse(localStorage.getItem("user"));
    console.log(email1.email);
    const init = () => {
        ApiServics.getBookingDetails(email1.email)
            .then(resp => {
                console.log("All details", resp.data);
                setAppointment(resp.data);
            }).catch(error => {
                console.log("Something went wrong", error);
            })
    };
    useEffect(()=>{
        init();
    },[]);

    

    return (
        <div style={{ marginTop: "5%" }}>
            <h1>All Appointment Details</h1>
            <form class="form-inline" method="get" style={{marginLeft:"70%"}}>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="email" class="sr-only">Email</label>
                    <input type="text" class="form-control" id ="email" name="email"  placeholder="Enter Email"></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">get Details</button>
            </form>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <table class="table table-dark">
                    <tr>
                        <th>Patient Name</th>
                        <th>Patient Email</th>
                        <th>Patient Age</th>
                        <th>Doctor Name</th>
                        <th>Doctor Email</th>
                        <th>Appoitment Date</th>
                        <th>Appointment Time</th>
                    </tr>
                    {
                        appointment.map(app =>(
                            <tr key={app.aid}>
                                <td>{app.name}</td>
                                <td>{app.email}</td>
                                <td>{app.age}</td>
                                <td>{app.dname}</td>
                                <td>{app.demail}</td>
                                <td>{app.appointmentDate}</td>
                                <td>{app.startTime}</td>
                            </tr>
                        ))
                    }

                </table>
                <br/>
                <br/>

                <br/>

                <br/>

            </div>
        </div>
    )


}

export default GetAppointmentDetails