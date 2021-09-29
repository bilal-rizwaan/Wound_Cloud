import React from 'react';
import Img5 from '../src/images/company-img.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const OurCompany=()=>{
    return(
        <section className="our-company-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-12 col-12">
              <div className="our-company-text wow fadeInLeft" wow-data-duration="2s">
                <h3>Our Company</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <a href="#" className="tc-image-effect-shine hvr-shrink">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 col-12">
                <div className="company-img wow fadeInRight" wow-data-duration="2s">
                  <img src={Img5} className="img-fluid" alt="img"/>
                </div>
              </div>
          </div>
        </div>
      </section>
    )
}


export default OurCompany;