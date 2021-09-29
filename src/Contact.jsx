import React from 'react';
import Img7 from '../src/images/contact-icon-1.png';
import Img8 from '../src/images/contact-icon-2.png';
import Img9 from '../src/images/contact-icon-3.png';
import Img10 from '../src/images/contact-icon-4.png';
import Img11 from '../src/images/contact-img.png';


const Contact =()=>{
    return(
    <React.Fragment>
      <section className="contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-sm-6 col-xs-12 col-lg-6">
            <div className="contact-text">
              <h3>Contact Us</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 1500s, </p>
              <form>
                <div className="row">
                  <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                    <div className="contact-list">
                      <input type="text" name="" placeholder="Full Name "/>
                       <img src={Img7} className="img-responsive" alt="img"/>
                    </div>
                  </div>
                </div>
                 <div className="row">
                  <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                    <div className="contact-list">
                      <input type="email" name="" placeholder="Email "/>
                      <img src={Img8} className="img-responsive" alt="img"/>
                    </div>
                  </div>
                </div>
                 <div className="row">
                  <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                    <div className="contact-list">
                      <input type="email" name="" placeholder="Phone no"/>
                      <img src={Img9} className="img-responsive" alt="img"/>
                    </div>
                  </div>
                </div>
                 <div className="row">
                  <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                    <div className="contact-list">
                      <textarea placeholder="Message"></textarea>
                      <img src={Img10} className="img-responsive" alt="img"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                    <div className="contact-list">
                      <button className="tc-image-effect-shine hvr-shrink">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
           <div className=" col-12 col-md-6 col-sm-6 col-xs-12 col-lg-6">
             <div className="contact-img wow fadeInRight">
             <img src={Img11} className="img-responsive" alt="img"/>
             </div>
           </div>
        </div>
      </div>
    </section>
    </React.Fragment>
    )
};




export default Contact;