import React, { useEffect, useState } from "react";

import ApiServics from "../services/ApiServics";



const PatientHistory = () => {


  const [patient_consultaitons, setPatient_consultation] = useState([]);
  const patient = JSON.parse(localStorage.getItem("user"));

  const getDetails =()=>{
    ApiServics.patientConsultations(patient.pid)
      .then(resp => {
        
        console.log(resp.data.patient_consultaitons);
        alert(resp.data.patient_consultaitons)

        setPatient_consultation(resp.data.patient_consultaitons);
      }).catch((e) => {
        console.log(e);

      })
  }
 

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{marginTop:"15px"}}>

      
      <table class="table table-dark">
        <tr>
          <th>Consult Id</th>
          <th>Doctor Name</th>
          <th>Doctor Email</th>
          <th>Doctor Mobile</th>
          <th>Diagnosis</th>
          <th>Medicines</th>
          <th>Prognosis</th>
        </tr>
        {
          patient_consultaitons.map(details => (
            <tr key={details.consultations.cid}>
              <td >{details.consultations.cid}</td>
              <td>{details.doctor.name}</td>
              <td>{details.doctor.email}</td>
              <td>{details.doctor.mobile}</td>
              <td>{details.consultations.diagnosis}</td>
              <td>{details.consultations.medicines}</td>
              <td>{details.consultations.prognosis}</td>

            </tr>
          ))
        }

      </table>
      <button type="button" class="btn tbn-info" onClick={getDetails} style={{float:"right"}}>Get Details</button>
    </div>
  );
}

export default PatientHistory;