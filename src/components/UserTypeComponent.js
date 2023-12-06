import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import OurService from './OurService';

function UserTypeComponent() {
  return (
    <>
      

      <div className='container'>
        <div className='row justify-content-center'>

  
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="/user" className="btn btn-primary btn-block">
                    Register as driver or user
                  </Link>
                </form>
              </div>
            </div>
          </div>

    
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="/admin" className="btn btn-primary btn-block">
                   Admin Login
                  </Link>
                </form>
              </div>
            </div>
          </div>

         

        </div>
      </div>
    </>
  );
}

export default UserTypeComponent;
