import React,{useState, Fragment} from 'react'
import UserList from '../component/UserList'
import UserProfile from '../component/UserProfile'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Home.css'
import PropTypes from 'prop-types';

   function Home(props) {   
     
        const {match,history} = props;
        const {params}= match;
        const {page}= params;
    
     
        const indexToTabName = {
            userlist :0,
            userprofile:1
         }
        const tabNameToIndex = {
            0:"userlist",
            1:"userprofile"
         }


        const [selectedtab, setSelectedtab] = useState(indexToTabName[page]);
        const [userdata,setUserdata] =useState()

  // handleChange function used to change the Tabs
        const handleChange = (event, newValue) => {
            history.push(`/home/${tabNameToIndex[newValue]}`)
            setSelectedtab(newValue);
        };

  //  // changeUserProfile function used to change the Tabs  && get userdata from userlist.  
       const changeUserProfile =(data)=>{
            history.push(`/home/${tabNameToIndex[1]}`)
            setSelectedtab(1)
            setUserdata(data)
    }
    
   // // handleChange function used to change the Tabs && change tab from userProfile to userlist
        const changeUserList =(index)=>{
            setSelectedtab(0);
            history.push(`/home/${tabNameToIndex[0]}`)
    }


    return (
          <Fragment>
               <h1 className="main__body__h1">Page Title</h1> 
               <div className="main__body__table">
               <AppBar position="static"  className="appbar">
                    <Tabs value={selectedtab} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="userlist"  />
                    <Tab label="userprofile" />
                    </Tabs>
                </AppBar>
                  {selectedtab === 0 && <UserList onChangeUser={changeUserProfile} data={props.data} />}
                  {selectedtab === 1  && <UserProfile  userdata={userdata} changeUserList={changeUserList}  />}
               </div>
         
           </Fragment>
    )
}
Home.propTypes = {
    data:PropTypes.array
  };
export default Home
