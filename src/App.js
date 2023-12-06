import './App.css';
import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import AddDoctor from './components/AddDoctor';
import UserTypeComponent from './components/UserTypeComponent';
import DoctorHome from './components/DoctorHome';
import ForceLogin from './components/ForceLogin';
import AdminPanel from './components/AdminPanel';


 
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const [currentBalance, setCurrentBalanace] = useState(null);

  const [DocStatus, setDocStatus] = useState(true);
  const [MedStatus, setMedStatus] = useState(true);

  return <>

    <div className="App">
        
        

          {currentAccount?
            <Router>
            <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
            
            <div className='container-fluid mt-4'>
           
              <Routes> 
               
                <Route exact path='/' element={<UserTypeComponent></UserTypeComponent>}></Route>
            
                <Route exact path='/user' element={<AddDoctor currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddDoctor >}></Route>
              
                <Route exact path='/admin' element={<AdminPanel></AdminPanel>}></Route>
         
              </Routes>
            </div>
          
              
              <FooterComponent></FooterComponent>
    
          </Router>
           
          :
          <Router>
              <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
              <>
                <Routes> 
                  <Route exact path='/' element={<ForceLogin></ForceLogin>}></Route>
                  <Route exact path='*' element={<ForceLogin></ForceLogin>}></Route>
                </Routes>
              </>
                <FooterComponent></FooterComponent>
              </Router>
            
        }
        </div>
         
  
  </>;
}

export default App;






