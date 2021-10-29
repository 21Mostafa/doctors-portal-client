import React from 'react';
import chair from "../../../images/chair.png"

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center" >

<div class="col-md-4 offset-md-1"> 

<h1 style={{color:"#3A4256"}}>    Your New Smiles <br /> Starts Here </h1>
<p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum a dicta iure, sed reprehenderit?</p>
<button className="btn btn-primary">Get Appointment</button>
            </div>

<div class="col-md-6  "> 

            <img src={chair} alt="" className="img-fluid" />

                </div>

        </main>
    );
};

export default HeaderMain;