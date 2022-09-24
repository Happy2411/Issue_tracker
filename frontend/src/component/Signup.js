import { Formik } from "formik"
import React from "react"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { Await } from "react-router-dom"
// import './Signup.css';



const Signup = () => {
  const navigate=useNavigate();
  const loginSubmit = async (formdata,{resetForm}) => {
    console.log(formdata)
    // resetForm()

    const response = await fetch('http://localhost:5000/user/add', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(response.status === 200){
      console.log('request sent');
      resetForm();
      Swal.fire({
        icon : 'success',
        title : 'Nice',
        text : 'User Registered!!'
      })
      navigate('/login');
    }else{
      console.log('some error occured');
    }

  }

  return (
    <div>
  
      <Formik initialValues={{name:"",age:"", email: "", password: "" }} onSubmit={loginSubmit}>
        {({ handleSubmit, values, handleChange }) => (
            <body className="body-style">
          <form onSubmit={handleSubmit}>
            
            <div className="card">
                <h2 className="title">Signup Here</h2>
            <label>Name</label>
             
             <input className="form-control" id="number" value={values.number} onChange={handleChange} />
             <label>Age</label>
             <input className="form-control" id="age" value={values.age} onChange={handleChange}/>
            <label>Email</label>
            <input className="form-control" id="email" value={values.email} onChange={handleChange} />

            <label>Password</label>
            <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange} />

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
            </div>
          </form>
          </body>
          
        )}
      </Formik>
    </div>
  )
}

export default Signup