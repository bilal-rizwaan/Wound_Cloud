import React from 'react';


const PhoneLine =()=>{
return(
<React.fragment>
 <section className="phone-line-sec">
   <div className="container">
    <div className="phone-boder-line">
     <div className="row">
       <div className=" col-12 col-md-7 col-sm-7 col-xs-12 col-lg-7">
         <div className="phone-line-text">
           <h5>Lorem ipsum dolor sit amet. Call us anytime!</h5>
         </div>
       </div>
        <div className="col-12 col-md-5 col-sm-5 col-xs-12 col-lg-5">
          <div className="phone-no">
            <a href="tel:+ 1234-456-7890">+ 1 234-456-7890</a>
          </div>
        </div>
     </div>
   </div>
   </div>
 </section>
    </React.fragment>
    )
};



export default PhoneLine;