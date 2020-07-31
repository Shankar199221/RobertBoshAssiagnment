import React, { useState } from 'react'
import './index.css'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import {EditdataAction} from '../Actions/EditdataAction';





function UserProfile   ({userdata,changeUserList} ,props) {

    const [user,setUser]= useState(userdata)
    const dispatch =useDispatch();
    const updaData =(user)=>dispatch(EditdataAction(user))
    
// change the form details in this below handleChange
   const handleChange=(event)=>{
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setUser({ ...user, [name]: value });  
    }
    
// submited  the form data to store
      const submitHandler=(e)=>{
            e.preventDefault();
            updaData(user)
            changeUserList(0)
    }
    return (
        <>
         {userdata ? (
             <div className="useprofile">
                    <img className="useprofile__img" src={user.avatar} alt="avator" />
                    <form onSubmit={submitHandler} className="useprofile__form">
                        <h2>Fisr_Name:</h2>
                        <input  value={user.first_name} name="first_name" onChange={handleChange} className="useprofile__form__input" aria-describedby="my-helper-text" />
                        <h2>Last_Name:</h2>
                        <input value={user.last_name}name="last_name" onChange={handleChange} className="useprofile__form__input" aria-describedby="my-helper-text" />
                        <h2>Email address</h2>
                        <input value={user.email}name="email" onChange={handleChange} className="useprofile__form__input" aria-describedby="my-helper-text" />
                        <button className=" button"  >Submit</button>
                    </form>
             </div>
         ):<h1 style={{margin:"3rem"}}>Please Select user From List</h1>} 
        </>
    )
}
UserProfile.propTypes = {
    userid:PropTypes.number,
    data:PropTypes.array
  };

export default UserProfile
