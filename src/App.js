import React from 'react';
import {Switch , Route ,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';


const App=()=>{

 return(
 <React.Fragment>
  <Navbar></Navbar>
  <Switch>
   <Route exact path='/Home' component={Home}/>
   <Redirect to="/" />
  </Switch>
 </React.Fragment>
 )
};

export default App;
