import { Formik } from 'formik'
import React from 'react'
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const IssueForm = () => {
  
  // const navigate = useNavigate();
  
  const userSubmit = async (formdata, {resetForm}) => {
    console.log(formdata);

    // 1. URL
    // 2. Request Method
    // 3. Data
    // 4. Data Format

    // Sending request to backend
    // asynchronous function - returns promise
    const response = await fetch('http://localhost:5000/issue/add', {
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
      // navigate('/login');
    }else{
      console.log('some error occured');
    }
  }

  return (
    <div className="issue-design" >
          <Formik 
            initialValues={{title : '', type : '', assignedTo: '', team : "", assignedBy:"",createdAt: new Date()}}
            onSubmit={userSubmit}
          >
            { ({values, handleSubmit, handleChange}) => (
              <form onSubmit={handleSubmit}>
                <div className="container" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div className="card " style={{width:600}} >
        <div className="card-body" style={{width:500}}>
              <h3 className='text-center'>Team Issues</h3>
              <label>Title</label>
              <input id="title" value={values.title} onChange={handleChange} className='form-control mb-2' />
              <label>Type</label>                                                                         
              <input id="type" value={values.type} onChange={handleChange} className='form-control mb-2' />
              <label>AssignedTO</label>
              <input id="assignedTo" value={values.assignedTo} onChange={handleChange}  className='form-control mb-2' />
              <label>Team</label>
              <input id="team" value={values.team} onChange={handleChange} className='form-control mb-2' />
              <label>Status</label>
              <input id="status" value={values.status} onChange={handleChange} className='form-control mb-2' />
              <label>assignedBy</label>
              <input id="assignedBy" value={values.assignedBy} onChange={handleChange} className='form-control mb-2' />

              
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
              </div>
              </div>
              </div>
            </form>
            ) }
          </Formik>
          </div>

       
  )
}

export default IssueForm