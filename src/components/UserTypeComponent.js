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
                  <Link to="/driver" className="btn btn-primary btn-block">
                    Login as driver
                  </Link>
                </form>
              </div>
            </div>
          </div>


          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="/rider" className="btn btn-primary btn-block">
                    Take your ride
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
