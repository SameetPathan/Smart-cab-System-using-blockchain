import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useState } from 'react';


const DoctorContractAddress="0xF0299d3E26012AAaEEd5E380cEe47d58fE771b1A";
const abiDoctorContract=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Doctorid",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "HospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DoctorName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Speciality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CertificateNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "HospitalID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Doctorid",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Doctorid",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "HospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DoctorName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Speciality",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CertificateNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "HospitalID",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct DoctorContract.DoctorData[]",
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
				"name": "Doctorid",
				"type": "address"
			}
		],
		"name": "getDoctor",
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
				"name": "Doctorid",
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
	}
];

function AddDoctor(props) {

  const [account, setAccount] = useState(null);

  const setacc=async()=>{

    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setAccount(accounts[0]);
    //account = accounts[0];
 
  }
     

  const clear=()=>{
    document.getElementById("myForm").reset();
	const form = document.getElementById('myForm');
	form.reset();
}

    const savedata = async () => {

      

        try {
          const { ethereum } = window;
    
          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const DoctorContract= new ethers.Contract(DoctorContractAddress, abiDoctorContract, signer);
  
  
            //datacapture
            const Doctorid=document.getElementById("docid").value;
          
            const HospitalName=document.getElementById("hname").value;

            const DoctorName=document.getElementById("dname").value;
        
            const Address1=document.getElementById("address1").value;
            const Address2=document.getElementById("address2").value;
            const City=document.getElementById("city").value;
            const State=document.getElementById("state").value;
            const Zipcode=document.getElementById("zipcode").value;

            const Speciality=document.getElementById("speciality").value;

            const PhoneNumber=document.getElementById("phonenumber").value;

            const CertificateNumber=document.getElementById("certificatenumber").value;

            const HospitalId=document.getElementById("hospitalid").value;

            //start          
            console.log("Initialize");
            
            const Address=Address1+" "+Address2+" "+City+" "+State+" "+Zipcode; 
       
            //console.log(Fullname)
            //console.log(idu)
            let Txn2 = await DoctorContract.addDoctor(Doctorid,HospitalName,DoctorName,Address,Speciality,PhoneNumber,CertificateNumber,HospitalId,0);
    
            
            console.log("Mining... please wait");
            await Txn2.wait();
    
            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
            
            //balance capture
    
          //
          clear();
          alert("Added Success , Please Wait for Verification")
          //
           

          } else {
            alert("Ethereum object does not exist");
        
          }
    
        } catch (err) {
          alert(err);
        
    
        }
      }


      useEffect(() => {
        setacc();
      });
  

  return (
    <>
 
  <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3 mb-4">
    <form className="needs-validation" id="myForm" noValidate>
      


      <div className="form-row">
        <div className="col-lg-4 col-md-6 mb-3">
          <label htmlFor="validationCustom01">Driver ID</label>
          <input
            type="text"
            className="form-control"
            value={account}
            id="docid"
            disabled
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom01">Driver name</label>
          <input
            type="text"
            className="form-control"
            id="dname"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom02">Experience</label>
          <input
            type="text"
            className="form-control"
            id="speciality"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom02">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phonenumber"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
      </div>

      <div className="form-row">
        <div className="col-lg-4 form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Flat, Wing, House Name"
          />
        </div>
        <div className="col-lg-4 form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Street, Area"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom03">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>

        <div className="col-lg-2 col-md-3 mb-3">
          <label htmlFor="validationCustom04">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            required
          />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        <div className="col-lg-2 col-md-3 mb-3">
          <label htmlFor="validationCustom05">Zip</label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
      </div>

   

      <div className="form-row">
        <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom02">Car Register Number</label>
          <input
            type="text"
            className="form-control"
            id="hospitalid"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom01">Car Name</label>
          <input
            type="text"
            className="form-control"
            id="hname"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

		<div className="col-lg-2 col-md-6 mb-3">
          <label htmlFor="validationCustom01">License Number</label>
          <input
            type="text"
            className="form-control"
			id="certificatenumber"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

      </div>

     
    </form>
    <button onClick={savedata} className="btn btn-success mb-5">
      Save
    </button>

  </div>
</>

  )
}

export default AddDoctor

