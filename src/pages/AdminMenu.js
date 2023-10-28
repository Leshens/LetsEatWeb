import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function AdminMenu() {
  const[users,setUsers]=useState([]);

      useEffect(() => {
        loadUsers();    
    },[])

    const loadUsers = async()=>{
       /* await axios
        .get("http://localhost:8080/users")
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error.response.data.error)
         })*/
    }
    const deleteUser = async (id) => {
        //await axios.delete(`http://localhost:8080/deleteuser/${id}`);
        //loadUsers();
      };
      return (
        <div className='container'>
            <h1>Panel administratora</h1>
            <h2>Dane restauracji</h2>  
          <div className='py-4'>
          <table className="table table-dark table-hover table-striped-columns">
              <thead>
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nazwa</th>
                  <th scope="col">Rodzaj</th>
                  <th scope="col">Godziny<br></br> otwarcia</th>
                  <th scope="col">Adres</th>
                  <th scope="col">Telefon</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map((user,index)=>(
                          <tr>
                          <th scope="row" key={index}>{index+1}</th>
                          <td>{user.firstName}</td>
                          <td>{user.email}</td>
                          <td>{user.mobileNumber}</td> 
                          <td>{user.password}</td> 
                          <td>{String(user.admin)}</td>
                          <td>{String(user.chef)}</td> 
                          <td>{String(user.waiter)}</td> 
                          <td>{String(user.quartermaster)}</td> 
                          <td>{user.registeredAt}</td> 
                          <td>{user.lastLogIn}</td> 
                          <td>
                              <Link
                                  className="btn btn-primary mx-2 d-inline "
                                  to={`/viewuser/${user.userId}`}
                               >
                                  View
                              </Link>
                              <Link
                                  className='btn btn-outline-success mx-2 d-inline '
                                  to={`/edituser/${user.userId}`}>Edit</Link>
                              <button
                                  className="btn btn-danger mx-2 d-inline "
                                  onClick={() => deleteUser(user.userId)}
                              >
                                  Delete
                              </button>
                          </td>
                      </tr>
                      ))
                  }
              </tbody>
          </table>
          </div>
      </div>
    )
  }