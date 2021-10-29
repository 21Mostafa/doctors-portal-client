import Button from '@restart/ui/esm/Button';
import React from 'react';
import "./Navbar.css"
 
const Navbar = () => {
    return (
      <div  >
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ms-2   mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5  " href="#">Dental Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white  spacings" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white  spacings" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white spacings " href="#">Contract Us</a>
        </li>
           
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    );
};

export default Navbar;