import React from 'react';
import Img5 from 


const ProductLine=()=>{
 return(
    <section className="product-lines">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-12">
          <div className="product-lines-text">
            <h3>Product Lines</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div className="row">
            <div className="col-md-5 col-sm-5 col-lg-5 col-12">
              <div className="product-box">
                <img src="images/pro-1.jpg" className="img-responsive" alt="img"/>
                <div className="product-box-body">
                  <h4>WoundClot® Health Care</h4>
                  <p>WoundClot® Hemostatic Gauze is an FDA cleared, next generation hemostatic. </p>
                  <div className="clearfix"></div>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
             <div className="col-md-3 col-sm-3 col-lg-3 col-12">
              <div className="product-box">
                <img src="images/pro-2.jpg" className="img-responsive" alt="img"/>
                <div className="product-box-body">
                  <h4>WoundClot® Surgical</h4>
                  <p>WoundClot Surgical is indicated for the effective control of mild. </p>
                  <div className="clearfix"></div>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
             <div className="col-md-3 col-sm-3 col-lg-12 col-12">
              <div className="product-box">
                <img src="images/pro-3.jpg" className="img-responsive" alt="img"/>
                <div className="product-box-body">
                  <h4>Woundclot-Trauma</h4>
                  <p>WoundClot Trauma is a next-generation hemostatic gauze, effective in the temporary management of mild. </p>
                  <div className="clearfix"></div>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}
export default ProductLine;