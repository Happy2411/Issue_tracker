
import { Formik } from "formik"
import React from "react"
import Swal from "sweetalert2"
import './Login.css';

const Login = () => {

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    // resetForm()

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    });

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Loggedin Successfully'
      })
    }else if(response.status === 401){
      Swal.fire({
        icon : 'error',
        title : 'Failed',
        text : 'Loggedin Failed'
      })
    }else{
      console.log('unknown error occured');
    }

  }

  return (
    
    <div className="body-style">
      <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
             
         
            <div className="container" style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
            <div className="card">
            <h3 className='text-center'>Login</h3>
            <label>Email</label>
            <input className="form-control" id="email" value={values.email} onChange={handleChange} />

            <label>Password</label>
            <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange} />

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
            </div>
            </div>
            
          </form>
        )}
      </Formik>
      </div>
    
    
  )
}

export default Login