/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './Header.css'
import logo from './../Asserts/logo.png'
import { useSelector } from 'react-redux'


function Header() {

    const data =useSelector(state =>state.getdata.userdata)
  
    return (
        <div className="header">
            <img src={logo} alt="img" width="80px" height="50px"/>
            <h1>{data ?(data.first_name):"Select User"}</h1>
        </div>
    )
}

export default Header
