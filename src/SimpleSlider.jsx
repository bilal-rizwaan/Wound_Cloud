
import React from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Img4 from '../src/images/event-1.jpg';
import Img5 from '../src/images/event-2.jpg';
import Img6 from '../src/images/event-3.jpg';
import Img7 from '../src/images/event-4.jpg';


export default function SimpleSlider() {
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
          <div>
          <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img4} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img5} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img6} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img7} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
       </div>
       <div>
       <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img4} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img5} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img6} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img7} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
       </div>
       <div>
       <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img4} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img5} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img6} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img7} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
       </div>
       <div>
       <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img4} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img5} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img6} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6 col-sm-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6">
                          <div class="event-img tc-image-effect-shine">
                          <img src={Img7} className="img-fluid" alt="img" />
                             <span>12 Feb</span>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 col-12 col-lg-6 margin">
                          <div class="event-text">
                            <h4>Event title goes here</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
       </div>
       
       
       </Slider>
        
      );
    }


   