import React from 'react';
import teeth from "../../../images/teeth.png";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import ServiceDetails from './../ServiceDetails/ServiceDetails';
 
 
const ServiceData=[
    {
        name:"Fluoride Treatment",
        img:fluoride 
    },
    {
        name:"Cavity Filling",
        img: cavity 
    },
    {
        name:"Teeth Whitening",
        img: teeth 
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
  
           <div className="text-center">
           <h5 style={{color: '#1CC7C1'}} >OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div> 
             
            

            <div   className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                ServiceData.map(service =>
                        <ServiceDetails service={service} >  </ServiceDetails>
                        
                )
            } 
            </div>
            </div>
                
        </section>
    );
};

export default Services;