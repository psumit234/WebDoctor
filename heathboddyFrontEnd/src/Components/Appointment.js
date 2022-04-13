import React,{useState,useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import ApiServics from "../services/ApiServics";




const Appoitment = ()=> {
    

    
    
    let aid=0;
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState(0);
    const [dname,setDname] = useState('');
    const [demail,setDemail] = useState('');
    const [appointmentDate,setAppointmentDate] = useState('');
    const [startTime,setStartTime] = useState('');
    const [endTime,setEndTime] = useState('');
    const history = useHistory();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const appData ={aid,name,email,age,dname,demail,appointmentDate,startTime,endTime};
        console.log(appData);
        ApiServics.appointmentBooking(appData)
        .then(resp=>{
            console.log(resp.data);
            history.push({
                pathname:'/getAppDetails',
                state:{mesage:resp.data}
            });
        }).catch(err=>{
            console.log(err);
        })
    };
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
        ApiServics.patientInfo(user.pid)
        .then(resp=>{
            setName(resp.data.name);
            setEmail(resp.data.email);
        }).catch(err=>{
            console.log("Something went wrong "+err);
        })
    })

    
    
    

    return (
        <div >
            <div style={{ marginTop: "8%" }}>
                <h1>Patient Appoitment Form</h1>
                <br />
                <hr />
                <form onSubmit={(e)=>handleSubmit(e)} style={{ width: "40%", marginLeft: "30%" }} class='card p-3 bg-light' method="post" autoComplete="on" className="needs-validation" >
                
                    <div class="form-group">
                        
                        <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)}  value={name} placeholder="Enter Patient Name"></input>
                    </div>

                    <div class="form-group">
                      
                        <input type="email" class="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Patient Email"></input>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" name="age" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Patient Age"></input>

                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="dname"onChange={(e)=>setDname(e.target.value)} placeholder="Enter Doctor Name"></input>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="demail" onChange={(e)=>setDemail(e.target.value)} placeholder="Enter Doctor Email"></input>
                    </div>

                    <div class="form-group">
                        <label for="appointmentDate">Appoitment Date</label>
                        <input type="Date" class="form-control" name="appointmentDate"onChange={(e)=>setAppointmentDate(e.target.value)}  placeholder="Enter Date"></input>
                    </div>
                    <div class="form-group">
                        <label for="startTime">Start Time</label>
                        <input type="time" class="form-control" name="startTime" onChange={(e)=>setStartTime(e.target.value)} placeholder=""></input>
                    </div>
                    <div class="form-group">
                        <label for="endTime">End Time</label>
                        <input type="time" class="form-control" name="endTime"onChange={(e)=>setEndTime(e.target.value)}  placeholder=""></input>
                    </div>
                   
                    <br/>
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                        <button type="reset" class="btn btn-outline-secondary">Clear</button>

                    </div>

                </form>


            </div>
        </div>
    )
}
export default Appoitment