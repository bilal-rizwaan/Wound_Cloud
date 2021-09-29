import React from "react";
import Img4 from '../src/images/wound-img-advantage.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const WoundClot=()=>{
 return(
    <section className="wound-advantage-sec">
    <div className="container">
      <div className="row">
        <div className=" col-12 col-md-8 col-sm-8 col-lg-8">
          <div className="wound-list">
            <h3>WoundClot Advantages</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 1500s, </p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-sm-6 col-lg-6">
              <div className="wound-list-text">
                <h4>Nonallergenic</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
             <div className="col-md-6 col-sm-6 col-lg-6 col-12">
              <div className="wound-list-text">
                <h4>Intuitive</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. . </p>
              </div>
            </div>
          </div>
           <div className="row">
           <div className="col-md-6 col-sm-6 col-lg-6 col-12">
              <div className="wound-list-text">
                <h4>Fast & Effective</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-12">
              <div className="wound-list-text">
                <h4>Efficient & Valuable</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. . </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4 col-12">
          <div className="wound-advantage-img">
            <img src={Img4} className="img-fluid" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}
export default WoundClot;