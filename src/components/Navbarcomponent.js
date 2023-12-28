import React from 'react';

import Logincomponent from './Logincomponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Navbarcomponent(props) {






  return (
    <>
  
  <div className='sticky-top'>

     

      <nav className="navbar navbar-expand-lg navbar-dark bgd">
      
        <div className="logo-holder logo-3 mr-3">
          <a>
          <h3>Smart Cab</h3>
            <p style={{fontSize:"10px"}}>blockchain Enabled</p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
          {props.currentAccount?
            <Link to="/" className='nav-link ml-5'>Home</Link>:""}
            

   
          </ul>
          {props.currentAccount ? 
<div>
            <span style={{ color: '#007BFF', fontWeight: 'bold' }}>Eth Balance: <span style={{color:"white"}}>{String(props.currentBalance)}</span></span>&nbsp;&nbsp;
              <span style={{ color: '#007BFF', fontWeight: 'bold' }}>Address: <span style={{color:"white"}}>{props.currentAccount}</span> </span>&nbsp;&nbsp;</div>
: ""
}
         
           
            <Logincomponent setCurrentAccount={props.setCurrentAccount} setCurrentBalanace={props.setCurrentBalanace} currentAccount={props.currentAccount} currentBalance={props.currentBalance} ></Logincomponent>
        </div>
      </nav>
      {props.currentAccount ? 
      <div class="alert alert-secondary" role="alert">
  Dashboard
</div>
:""}
    </div>


   


  
    </>
  );
}

export default Navbarcomponent