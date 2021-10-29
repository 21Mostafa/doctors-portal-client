import React from 'react';
import child from "../../../images/child.png"

const Child = () => {
    return (
        <section   className="services-container mt-5">
           <div className="d-flex justify-content-center">
           <div className="row w-75 row mt-5 pt-5    text-center">
            <div className="col-md-5 ">
            <img  style={{height:"550px"}} className="center" src={child} alt="" />
            
            </div>


            <div style={{textAlign: 'left', width: "500px"}} className="col-md-7  ">
                    <h2 >Exceptional Dental <br /> Care, on Your Terms</h2>
                    <br />
                    <p className="text-secondary"  >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam quo animi similique aspernatur est omnis officia. Ad, maiores culpa? Eaque error ipsam quaerat neque et. Perferendis eveniet nam eligendi iusto iure voluptates aperiam culpa modi, quam, ab totam! Labore architecto optio aut assumenda eius modi, quasi et perspiciatis asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quidem quae accusantium hic fuga optio dolores accusamus perspiciatis neque nostrum!</p>
                    
                    <button  className="btn btn-primary  mt-5">Learn More</button>
            </div>
        </div>
        
           </div>
          <br /><br /><br />
        </section>
    );
};

export default Child;