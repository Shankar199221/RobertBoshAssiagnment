import React,{useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom'

import Home from './Home/Home';
import AboutUs from './component/AboutUs';
import Details from './component/Details';
import Contact from './component/Contact';
import SideNavbar from './component/sideNavbar/SideNavbar';
import Header from './layout/Header';
import {useSelector,useDispatch} from 'react-redux'
import { GetDataAction } from './Actions/GetDataAction';


  function App() {

      const data =useSelector(state =>state.getdata.data)
      
      const dispatch =useDispatch();
      const getData =()=>dispatch(GetDataAction())
   
   // Fecth data from the API and get data from store
         useEffect(()=>{
            getData();
         },[])
         return(
            <div className="container1">
               <Router>
                  <div className="main">
                      <div className="main__sidebar">
                         <SideNavbar />
                       </div> 
                    <div className="main__body">
                          <Header />         
                      <Redirect exact from="/home" to="/home/userlist" />
                       <Switch>
                           <Route  exact path="/home/:page?" render={props => <Home data={data} {...props}/>} />
                           <Route exact path="/contact" component={Contact} />
                           <Route exact path="/about" component={AboutUs} />
                           <Route exact path="/details" component={Details} />
                       </Switch>
                     </div>
                   </div>
               </Router>
            </div>
         ) 
  
}

export default App;
