import { Formik } from "formik"
import React from "react"
// import './Signup.css';



const Signup = () => {
  const loginSubmit =  (formdata) => {
    console.log(formdata)
    // resetForm()

    

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