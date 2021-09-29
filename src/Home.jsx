import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import About from './About';
import WoundClot from './WoundClot';
import OurCompany from './OurCompany';
import Event from './Event';
import Contact from './Contact';
import PhoneLine from './PhoneLine';
const Home=()=>{
 return(
    <React.Fragment>
     <Banner></Banner>
     <About></About>
     <WoundClot></WoundClot>
     <OurCompany></OurCompany>
     <Event></Event>
     <Contact></Contact>
     <PhoneLine></PhoneLine>
    </React.Fragment>


 )
};

export default Home;