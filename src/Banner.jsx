
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Img1 from "../src/images/home-slider.jpg";
import Img2 from '../src/images/wound-img.png';
import '../node_modules/jquery/dist/jquery.min.js';
const Banner=()=>{
 return(
  <React.Fragment>
<section class = "bannersec">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
 
    <div class="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="carousel-captionDiv">
        <h1>Wound<span>C</span>lot Advanced Bleeding </h1>
        <h2> Next Generation Hemostatic Gauze</h2>
        <p>Some representative placeholder content for the first slide.</p>
        <a href="#" className="slider-button">Read More</a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className ="wound-img">
        <img src={Img2} className="img-fluid" alt="..."/>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="carousel-captionDiv">
        <h1>Wound<span>C</span>lot Advanced Bleeding </h1>
        <h2> Next Generation Hemostatic Gauze</h2>
        <p>Some representative placeholder content for the first slide.</p>
        <a href="#" className="slider-button">Read More</a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className ="wound-img">
        <img src={Img2} className="img-fluid" alt="..."/>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="carousel-captionDiv">
        <h1>Wound<span>C</span>lot Advanced Bleeding </h1>
        <h2> Next Generation Hemostatic Gauze</h2>
        <p>Some representative placeholder content for the first slide.</p>
        <a href="#" className="slider-button">Read More</a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className ="wound-img">
        <img src={Img2} className="img-fluid" alt="..."/>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>

</div>
</section>
</React.Fragment>
 )
};


export  default Banner;