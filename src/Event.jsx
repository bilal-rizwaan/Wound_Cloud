import React from 'react';
import SimpleSlider from './SimpleSlider';


const Event =()=>{
 return(

  <React.Fragment>
   <section className="Eventsec">
    <div className="container">
     <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <div className="upcomingtext">
       <h3>Upcoming Events</h3>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
     <SimpleSlider></SimpleSlider>
     </div>
    </div>
   </section>
  </React.Fragment>
 )
}



export default Event;