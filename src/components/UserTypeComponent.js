import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import '../footer.css';
import OurService from './OurService';

function UserTypeComponent(props) {
  return (
    <>
    <div className='container-fluid' >
      <div className='container' style={{ marginBottom: "450px", paddingTop: '100px' }}>
        <div className='row justify-content-center'>
          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className="card-body text-center">
                <h5 className="card-title">Driver Login</h5>
                <p className="card-text">Sign in if you're a driver</p>
                <Link to="/driver" className="btn btn-primary btn-block">
                  Login as Driver
                </Link>
              </div>
            </div>
          </div>
    
          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className="card-body text-center">
                <h5 className="card-title">Take Your Ride</h5>
                <p className="card-text">Ready to go? Click below</p>
                <Link to="/rider" className="btn btn-primary btn-block">
                  Take Your Ride
                </Link>
              </div>
            </div>
          </div>
    {props.currentAccount ==="0x9c6bcf6483444b19d5a4b9611f13cac9f1c48864" || props.currentAccount === "0xD32899C66Be4a14128D613C7756c8e2deD1d35F7" || props.currentAccount === "0x53611EeBcea0Cb73b74142eAa3b48d03bf2BCCDd" ?
          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className="card-body text-center">
                <h5 className="card-title">Admin Login</h5>
                <p className="card-text">For admin access</p>
                <Link to="/admin" className="btn btn-primary btn-block">
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
          :null
    }

        </div>
      </div>
    </div>
  </>
  
  
  );
}

export default UserTypeComponent;
