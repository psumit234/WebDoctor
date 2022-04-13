import React, { useState } from "react";
import PatientHistory from "./PatientHistory";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import ApiServics from "../services/ApiServics";


const TendToPatient =()=>{
    const [patient_id, setPatientId] = useState();
    const [search, setSearch] = useState(false);
    const [error, setError] = useState();

    const datatable = {
        columns: [
            {
                label: 'Doctor',
                field: 'name',
                width: 110,
            },
            {
                label:'Doctor Address',
                field:'address',
                width: 270,
            },
            {
                label: "Doctor Mobile",
                field: 'mobile',
                width: 150,
            },
            {
                label: 'Consultation ID',
                field: 'cid',
                width: 151,
            },
            {
                label: 'Date',
                field: 'data',
                width: 100,
            },
            {
                label: 'Diagnosis',
                field: 'diagnosis',
                width: 200,
            },
            {
                label: 'Medicines',
                field: 'medicines',
                width: 200,
            },
            {
                label: 'Prognosis',
                field: 'prognosis',
                width: 200,
            },
        ],
        rows:[]
    }


    const searchHandler = function(){
        const input = parseInt(document.getElementById('inp').value);
        ApiServics.patientConsultations(input)
        .then(resp=>{
            console.log(resp.data);
        })
    }
    

    const enterPressed =function(event){
        if(event.key === 'Enter'){
            searchHandler();
        }
    }



    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{width:"60%"}}>
            <div className="row mt-1" style={{minHeight: "30px"}}>
              <span className="text-center lead" style={{color: 'red'}} dangerouslySetInnerHTML={{__html: error}} />
            </div>
            <div className="row mt-2">
              <div className ="btn-group">
                <input id="inp" type="text" placeholder="Enter Patient ID to check history" style={{width: '250px'}} onKeyPress={enterPressed} />
                <button type="button" className="btn btn-success ms-2" onClick={searchHandler}>Search</button> 
                <Link type="button" className="btn btn-success ms-2" style={{marginLeft:"4px"}} to="/getDoctorDetails">GetAppointment</Link>
                    
              </div>
            </div>
            <div className="mt-4">
              {search ? <PatientHistory pid={patient_id} consult={true}/> : <MDBDataTableV5 small scrollX hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />}
            </div>
        </div>
    )
}

export default TendToPatient;