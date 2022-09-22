import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  
  const navigate = useNavigate();
  
  const userSubmit = async (formdata, {resetForm}) => {
    console.log(formdata);

    // 1. URL
    // 2. Request Method
    // 3. Data
    // 4. Data Format

    // Sending request to backend
    // asynchronous function - returns promise
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
    <div className="container pt-5">
      <div className="card">
        <div className="card-body">

          <Formik 
            initialValues={{title : '', type : '', assignedTo: '', team : "", assignedBy:"",createdAt:"", Date:0}}
            onSubmit={userSubmit}
          >
            { ({values, handleSubmit, handleChange}) => (
              <form onSubmit={handleSubmit}>
              <h3 className='text-center'>Register User</h3>
              <label>title</label>
              <input id="title" value={values.title} onChange={handleChange} className='form-control mb-3' />
              <label>Type</label>
              <input id="type" value={values.type} onChange={handleChange} className='form-control mb-3' />
              <label>AssignedTO</label>
              <input id="assignedTo" value={values.assignedTo} onChange={handleChange}  className='form-control mb-3' />
              <label>Team</label>
              <input id="team" value={values.team} onChange={handlChange} className='form-control mb-3' />
              <label>assignedBy</label>
              <input id="assignedBy" value={values.assignedBy} onChange={handlChange} className='form-control mb-3' />
              <label>createdAt</label>
              <input id="createdAt" value={values.createdat} onChange={handlChange} className='form-control mb-3' />
              <label>Date</label>
              <input id="Date" value={values.Date} onChange={handlChange}type="Number" className='form-control mb-3' />
              
              <button type='submit' className='btn btn-primary mt-5'>Submit</button>
            </form>
            ) }
          </Formik>
          

        </div>
      </div>
    </div>
  )
}

export default Register