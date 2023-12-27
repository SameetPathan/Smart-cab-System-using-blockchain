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

function AddDriver(props) {
  const [account, setAccount] = useState(null);

  const setacc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
  };

  const clear = () => {
    document.getElementById("myForm").reset();
    const form = document.getElementById("myForm");
    form.reset();
  };
  const savedata = async () => {
    try {
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
        const PhoneNumber = document.getElementById("PhoneNumber").value;
        const Address = document.getElementById("Address").value;
        const CarRegisterNumber = document.getElementById("CarRegisterNumber").value;
        const CarName = document.getElementById("CarName").value;
        const LicenseNumber = document.getElementById("LicenseNumber").value;
        const CurrentLocation = "Pune";
		const status = 0;


        let Txn2 = await DriverContract.addDriver(
			DriverID,
			DriverName,
			Experience,
			PhoneNumber,
			Address,
			CarRegisterNumber,
			CarName,
			LicenseNumber,
			CurrentLocation,
			status
        );

        await Txn2.wait();
        clear();
        alert("Added Success , Please Wait for Verification");
      } else {
        alert("Ethereum object does not exist");
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
      <form className="needs-validation" id="myForm" noValidate>
        <div className="form-row">
          <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="DriverID">Driver ID</label>
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
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="number"
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
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <button onClick={savedata} className="btn btn-success mt-3">
          Save
        </button>
      </form>
    </div>
    </div>
  </>
  
  );
}

export default AddDriver;
