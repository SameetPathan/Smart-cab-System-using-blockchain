import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import UserTypeComponent from './components/UserTypeComponent';
import ForceLogin from './components/ForceLogin';
import AdminPanel from './components/AdminPanel';
import AddDriver from './components/AddDriver';
import { ethers } from "ethers";
import DriverHome from './components/DriverHome';
import Rider from './components/Rider';

const DriverContractAddress = "0x22b8424720F0EE1A55dEB24176Da80640138064d";
const abiDriverContract = [
  {
    inputs: [
      {
        internalType: "address",
        name: "DriverID",
        type: "address",
      },
      {
        internalType: "string",
        name: "DriverName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "Experience",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "PhoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "Address",
        type: "string",
      },
      {
        internalType: "string",
        name: "CarRegisterNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "CarName",
        type: "string",
      },
      {
        internalType: "string",
        name: "LicenseNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "CurrentLocation",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "addDriver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "DriverID",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "updateDriver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Drivers",
    outputs: [
      {
        internalType: "address",
        name: "DriverID",
        type: "address",
      },
      {
        internalType: "string",
        name: "DriverName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "Experience",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "PhoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "Address",
        type: "string",
      },
      {
        internalType: "string",
        name: "CarRegisterNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "CarName",
        type: "string",
      },
      {
        internalType: "string",
        name: "LicenseNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "CurrentLocation",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllDrivers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "DriverID",
            type: "address",
          },
          {
            internalType: "string",
            name: "DriverName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "Experience",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "PhoneNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "Address",
            type: "string",
          },
          {
            internalType: "string",
            name: "CarRegisterNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "CarName",
            type: "string",
          },
          {
            internalType: "string",
            name: "LicenseNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "CurrentLocation",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
        ],
        internalType: "struct DriverContract.DriverData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "DriverID",
        type: "address",
      },
    ],
    name: "getDriver",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "DriverID",
        type: "address",
      },
    ],
    name: "getStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
 
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentBalance, setCurrentBalanace] = useState(null);
  const [DriverStatus, setDriverStatus] = useState(false);

  async function getAllDriver() {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_accounts" });
      

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const DriverContract = new ethers.Contract(
          DriverContractAddress,
          abiDriverContract,
          signer
        );
        let status = await DriverContract.getStatus(accounts[0]);
        console.log("### Status",parseInt(status))
        if(status==1){
          setDriverStatus(false);
        }else{
          setDriverStatus(true);
        }
        
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllDriver();
  }, []);

  return <>

    <div className="App" style={{ backgroundImage: `url('bg4.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        
        

          {currentAccount?
            <Router>
            <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
            
            <div className='container-fluid mt-4'>
           
              <Routes> 
             <Route exact path='/addride' element={<AddDriver currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddDriver> }></Route>

                <Route exact path='/' element={<UserTypeComponent currentAccount={currentAccount}></UserTypeComponent>}></Route>
           
            <Route exact path='/driver' element={<DriverHome currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></DriverHome> }></Route>

<Route exact path='/rider' element={<Rider></Rider>}></Route>
                <Route exact path='/admin' element={<AdminPanel></AdminPanel>}></Route>
         
              </Routes>
            </div>
          
              
             
    
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
               
              </Router>
            
        }

        
        </div>
        <FooterComponent></FooterComponent>
  
  </>;
}

export default App;






