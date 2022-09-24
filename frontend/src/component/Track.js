import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Track = () => {
    
    const [userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {
        
        const response = await fetch('http://localhost:5000/issue/getall');

        const data = await response.json();

        console.log(data);
        setUserList(data);
    };

    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/issue/delete/'+id, {
            method : 'DELETE'
        });

        console.log(res.status);
        getDataFromBackend();
        toast.success('User Deleted 😎');

    }

    useEffect(() => {
      getDataFromBackend();
    }, []);

    const displayUsers = () => {

        return <table className='table table-striped table-light'>
            <thead>
                <tr>
                    <th>title</th>
                    <th>type</th>
                    <th>assignedTo</th>
                    <th>team</th>
                    <th>assignedBy</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    userList.map( (issue) => (
                        <tr>
                            <td>{issue.title}</td>
                            <td>{issue.type}</td>
                            <td>{issue.assignedTo}</td>
                            <td>{issue.team}</td>
                            <td>{issue.status}</td>
                            <td>{issue.assignedBy}</td>
                            <td>{issue.status}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteUser(issue._id) }} >
                                    <i className="fas fa-trash"></i>
                                </button>
                                
                            </td>
                            
                            <td>
                                <button className='btn btn-primary'>
                                    <i className="fas fa-pen"></i>
                                </button>
                            </td>
                        </tr>
                    ) )
                }
            </tbody>

        </table>

    }

  return (
    <div className='container'>
        <h1 className='text-center'>Tracker</h1>
        <hr />
        {displayUsers()}
    </div>
  )
}

export default Track;