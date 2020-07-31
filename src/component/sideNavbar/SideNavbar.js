import React from 'react';
import { Link } from 'react-router-dom';
import house from './../../Asserts/house.svg';
import editlist from './../../Asserts/editlist.svg';
import eyeopen from './../../Asserts/eyeopen.svg';
import wrench from './../../Asserts/wrench.svg';

import './SideNavbar.css'



function SideNavbar() {

        return (
          <div className="sideNavbar">
                <Link to="/home/userlist" className="sideNavbar__link sideNavbar__link__1"><img src={house} alt="h" width="80px" height="50px"/></Link>
                <Link to="/contact" className="sideNavbar__link"><img src={editlist} alt="h" width="80px" height="50px"/></Link>
                <Link to="/about" className="sideNavbar__link"><img src={eyeopen} alt="h" width="80px" height="50px"/></Link>
                <Link to="/details" className="sideNavbar__link"><img src={wrench} alt="h" width="80px" height="50px"/></Link>
           </div>
    )
}

export default SideNavbar
