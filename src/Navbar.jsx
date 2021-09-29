import React from 'react';
import Img1 from '../src/images/logo.png';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import  Img2 from '../src/images/flag.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const Navbar =()=>{
 return (
<React.Fragment>
<header>
<div className="container">
<div className="row">
<div className="col-lg-2 col-md-2 col-xs-12">
<div className="navbar-header"> <a href="index.html" className="navbar-brand"><img src={Img1} class="img-fluid" alt="Logo"/></a>
</div>
</div>
<div className="col-lg-7 col-md-7 col-xs-12">
<nav class="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto justify-content-center">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home"> Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/ClinicalInformation">Clinical Information </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/ProductLines">ProductLines </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/FAQ">FAQ </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/Company">Company </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/Contact Us">Contact Us </NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
<div className="col-md-2 col-xs-12 col-sm-2 col-lg-2">
<div className="search-icon">
<a  href="#"><i class="fa fa-search" aria-hidden="true"></i><img src={Img2} className="img-fluid" alt="flag"/></a>
</div>
</div>
</div>
</div>
</header>
</React.Fragment>

 )
};



export default Navbar;