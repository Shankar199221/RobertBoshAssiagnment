import React, { useState } from 'react'
import AddUser from './AddUser'
import EditUser from './EditUser'


function Home() {

  const data =[{
      id:1,
      name:'shan',
      company:'mindtree'
  },
  {
    id:2,
    name:'shan',
    company:'mindtree'
},
{
    id:3,
    name:'shan',
    company:'mindtree'
}
]

const addUser=()=>{
    console.log('useradd')
    
}
const removeUser=(id)=>{
   console.log(id)
   const updateuser =user.filter((user)=> user.id !==id )
   setUser(updateuser)
}

const [user,setUser] =useState(data)
    return (
        <div className="home">
            
            <div className="tablecenter">
                <table className="table">
                    <thead className="thead">
                    <tr>
                        <td>Emp.id</td>
                        <td>EmpName</td>
                        <td>EmpCompany</td>
                        <td>UpdateFeilds</td>
                    </tr>
                    </thead>
                    <tbody>
                        {user.map((user)=>{
                            return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.company}</td>
                            <td className="tabletd">
                               <span><button className="button__add" onClick={addUser}>Add</button></span>
                               <span><button className="button__edit" onClick={()=>(<EditUser />)}>Edit</button></span>
                               <span><button className="button__remove" onClick={()=>removeUser(user.id)}>Remove</button></span>
                            </td>
                        </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
