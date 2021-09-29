import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Img3 from '../src/images/surgical-img.jpg';



const About=()=>{
    return(
    <React.Fragment>
    <section className="clinical-sec">
      <div className="container">
        <div className="row flexRow">
          <div className=" col-12 col-md-6 col-sm-6 col-lg-6">
            <div className="clinical-shape surgical-img">
              <div className="clinical-img tc-image-effect-shine">
              
              <a href="javascript:void(0)">
                   <img src={Img3} className="img-responsive" alt="img"/>
                  <div className="clinic-icon">
                  <i class="fa fa-play" aria-hidden="true"></i>
                  </div>
                  </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-6 col-lg-6">
            <div className="clinical-text">
              <h3>Mechanisms</h3>
              <p>When WoundClot® gauze is applied to the site of bleeding, it rapidly converts from a dry flexible gauze to a thick, tenacious, expanding 3D gel matrix. This stable, strong, and pliant gel structure enables rapid and stable hemostasis to be achieved utilizing multiple mechanisms of action.</p>
              <a href="clinical-information.html">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
       </React.Fragment>
    )
}


export default About;