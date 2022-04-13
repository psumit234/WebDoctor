import React ,{useState,useContext}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ApiServics from "../services/ApiServics";
import { Link } from "react-router-dom";


const Login =  ()=> {

    const {setUser} = useContext(UserContext);
    const [login,setLogin] = useState();
    const [error, setError] = useState();
    const history = useHistory();
    const location = useLocation();
        

    const setData = (event) => {
      let data = event.target.value;
      let id = event.target.id;
      if (id === 'floatingPassword') {
          setLogin(prevData => ({...prevData, password: data}));
      } else if (id === 'floatingInput') {
          setLogin(prevData => ({...prevData, email: data}));
      }        
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    ApiServics.login(login)
        .then(resp => {
            let user = resp.data;
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            setError(null);
            if (user.did) 
                history.push("/doctor");
            else  
                history.push("/patient");
        }).catch(() => {
            setUser(null);
            setError('Invalid Login!');
        })
}




return (
  <div class="container-fluid" >
      <section className="vh-100">
          <div class="row" >
              <div class="col-sm-6 text-black" style={{marginTop:"14%"}}>

                  <div class="px-5 ms-xl-4">
                      <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                      <span class="h1 fw-bold mb-0"></span>
                  </div>

                  <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-5 mt-5 pt-5 pt-xl-0 mt-xl-n5" >

                      <form style={{ width: "23rem" }}>

                          <h3 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                          <div class="form-outline mb-4">
                              <input type="email" id="floatingInput" class="form-control form-control-lg" placeholder="Enter Email" onChange={setData} />
                              <label class="form-label" htmlFor="floatingInput">Email address</label>
                          </div>

                          <div class="form-outline mb-4">
                              <input type="password" id="floatingPassword" class="form-control form-control-lg" placeholder="Enter password" onChange={setData}/>
                              <label class="form-label" htmlFor="floatingPassword">Password</label>
                          </div>

                          <div class="pt-1 mb-4">
                              <button class="btn btn-info btn-lg btn-block" type="button" onClick={handleSignIn}>Login</button>
                          </div>

                          <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                          <p>Don't have an account? <Link to='/signup' style={{textDecoration:"none"}}><span id="register-here">SignUp</span></Link></p>

                      </form>

                  </div>

              </div>
              <div class="col-sm-5 px-0 d-none d-sm-block bg-image">
                  
              </div>

              <div className="text_center mt-2" style={{color: 'red'}} dangerouslySetInnerHTML={{__html:error}}></div>
              <div className="row">
                {location.state && <span className="text-center ms-2 lead" style={{color:'blue'}} dangerouslySetInnerHTML={{__html:location.state.message}}/>}
              </div>
          </div>
      </section>
  </div>


)
}

export default Login;