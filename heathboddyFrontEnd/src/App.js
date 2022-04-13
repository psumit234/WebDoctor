import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/about';
import { useState } from 'react';
import Login from './Components/Login';
import Ragistration from './Components/RagistrationForm';
import Learn from './Components/Learn';
import Blog from './Components/blog';
import Footer1 from './Components/Footer1';
import { UserContext } from './Components/UserContext';
import PatientHome from './Components/PatientHome';
import DoctorHome from './Components/DoctorHome';
import ConsultationForm from './Components/ConsultationForm';
import Appoitment from './Components/Appointment';
import GetAppointmentDetails from './Components/GetAppointmentDetails';
import DoctorAppointmentDetails from './Components/DoctorAppointmentDetails';
function App() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Navbar></Navbar>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/patient" component={PatientHome}></Route>
            <Route exact path="/doctor" component={DoctorHome}></Route>
            <Route exact path="/consultation/:email" component={ConsultationForm}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Ragistration}></Route>
            <Route exact path="/Learn" component={Learn}></Route>
            <Route exact path="/blog" component={Blog}></Route>
            <Route exact path="/appointment" component={Appoitment}></Route>
            <Route exact path="/getAppDetails" component={GetAppointmentDetails}></Route>
            <Route exact path="/getDoctorDetails" component={DoctorAppointmentDetails}></Route>
            

            <Footer1></Footer1>
          </UserContext.Provider>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
