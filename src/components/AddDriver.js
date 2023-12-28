import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const DriverContractAddress = "0x92C771E595d20167E53eB217006C59e6656F1e23";
const abiDriverContract = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Drivers",
		"outputs": [
			{
				"internalType": "address",
				"name": "DriverID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "DriverName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "birthdate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Experience",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CarRegisterNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CarName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "LicenseNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CurrentLocation",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "DriverID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "DriverName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "birthdate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Experience",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CarRegisterNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CarName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "LicenseNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CurrentLocation",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addDriver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDrivers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "DriverID",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "DriverName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "birthdate",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Experience",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CarRegisterNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CarName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "LicenseNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CurrentLocation",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct DriverContract.DriverData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "DriverID",
				"type": "address"
			}
		],
		"name": "getDriver",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "DriverID",
				"type": "address"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "DriverID",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateDriver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

function AddDriver(props) {
  const [account, setAccount] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");


  const setacc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
  };

  function validateForm() {
	const DriverName = document.getElementById('DriverName').value;
	const Experience = document.getElementById('Experience').value;
	const Address = document.getElementById('Address').value;
	const CarRegisterNumber = document.getElementById('CarRegisterNumber').value;
	const CarName = document.getElementById('CarName').value;
	const LicenseNumber = document.getElementById('LicenseNumber').value;
  
	// Validation criteria
	const isPhoneNumberValid = /^\d{10}$/.test(userPhoneNumber);
	const isLicenseNumberValid = /^\d{16}$/.test(LicenseNumber);
  
	// Check if all conditions are met
	if (
	  DriverName &&
	  Experience &&
	  isPhoneNumberValid &&
	  Address &&
	  CarRegisterNumber &&
	  CarName &&
	  isLicenseNumberValid
	) {
	  return true; // All fields meet the criteria
	} else {
	  return false; // Validation failed for one or more fields
	}
  }

 
  const savedata = async () => {
    try {

		const isFormValid = validateForm();

  if (isFormValid) {

      if (typeof window.ethereum !== 'undefined') {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const DriverContract = new ethers.Contract(
          DriverContractAddress,
          abiDriverContract,
          signer
        );

        const DriverID = document.getElementById("DriverID").value;
        const DriverName = document.getElementById("DriverName").value;
        const Experience = document.getElementById("Experience").value;
        //const PhoneNumber = document.getElementById("PhoneNumber").value;
        const Address = document.getElementById("Address").value;
        const CarRegisterNumber = document.getElementById("CarRegisterNumber").value;
        const CarName = document.getElementById("CarName").value;
        const LicenseNumber = document.getElementById("LicenseNumber").value;
        const CurrentLocation = document.getElementById("Address").value;
		const Birthdate = document.getElementById("birthdate").value;
		    const status = 0;


        let Txn2 = await DriverContract.addDriver(
			DriverID,
			DriverName,
			Birthdate,
			parseInt(Experience),
			userPhoneNumber,
			Address,
			CarRegisterNumber,
			CarName,
			LicenseNumber,
			CurrentLocation,
			status
        );

      //   let Txn2 = await DriverContract.addDriver(
      //   DriverID,
      //    "samet",
      //   1,
      //     "8798786776587",
      //     "Pune",
      //     "MH1044",
      //    "Creta",
      //    "LI563ffef",
      //    "Pune",
      //     0
      // )

        await Txn2.wait();
      
        alert("Added Success , Please Wait for Verification");
      } else {
        alert("Ethereum object does not exist");
      }
    }
}else{
	alert("Please check if all field are correct")
}
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    setacc();
  });

  return (
    <>
    <div style={{marginBottom:"150px"}}>
    <div className="container">
      <Link to="/driver" className="btn btn-primary btn-block mb-4">
        Return to Dashboard
      </Link>
    </div>
  
    <div className="container shadow p-4 mb-5 bg-white rounded">
      <form id="myForm">
        <div className="form-row">
          <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="DriverID">Agency ID</label>
            <input
              type="text"
              className="form-control"
              value={account}
              id="DriverID"
              disabled
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
  
          <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="DriverName">Driver Name</label>
            <input type="text" className="form-control" id="DriverName" required />
            <div className="valid-feedback">Looks good!</div>
          </div>

		  <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="birthdate">Birth Date</label>
            <input type="date" className="form-control" id="birthdate" required />
            <div className="valid-feedback">Looks good!</div>
          </div>
  
          <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="Experience">Experience</label>
            <input
              type="number"
              className="form-control"
              id="Experience"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
  
          <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="userPhoneNumber">Phone Number:</label>
                <input
                    type="text"
                    className="form-control"
                    id="userPhoneNumber"
                    value={userPhoneNumber}
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                />
            <small className="text-danger ml-1">10 digits</small>
            <input
              type="text"
              style={{ display: 'none' }}
              className="form-control"
              id="PhoneNumber"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
  
        <div className="form-row">
          <div className="col-lg-6 mb-3">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              className="form-control"
              id="Address"
              placeholder="Flat, Wing, House Name"
            />
          </div>
        </div>
  
        <div className="form-row">
          <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="CarRegisterNumber">Car Register Number</label>
            <input
              type="text"
              className="form-control"
              id="CarRegisterNumber"
              required
            />
			 <small className="text-danger ml-1">10 Char</small>
            <div className="valid-feedback">Looks good!</div>
          </div>
  
          <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="CarName">Car Name</label>
            <input type="text" className="form-control" id="CarName" required />
            <div className="valid-feedback">Looks good!</div>
          </div>
  
          <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="LicenseNumber">License Number</label>
            <input
              type="text"
              className="form-control"
              id="LicenseNumber"
              required
            />
			<small className="text-danger ml-1">Info - 16 Char</small>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <button onClick={() =>{savedata()}} className="btn btn-success mt-3">
          Save
        </button>
      </form>
    </div>
    </div>
  </>
  
  );
}

export default AddDriver;
