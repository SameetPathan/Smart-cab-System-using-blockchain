import {React,useEffect,} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { ethers } from 'ethers';

import OurService from './OurService';

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


function DoctorHome(props) {

  const getstatusdoc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const DoctorContract= new ethers.Contract(DoctorContractAddress,abiDoctorContract, signer);
        let Txn = await DoctorContract.getStatus(account);
        let flag=String(Txn);
        
        console.log(String(Txn))
        if(flag==="0"){
          props.setDocStatus(true);
        }else{
          props.setDocStatus(false);
        }
        
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getstatusdoc();
  }, [])

  return (
    <>



{props.DocStatus?<>
	<div class="alert alert-danger" role="alert">
		Your are Not Verified
		</div>

<div className="d-lg-flex align-items-lg-center">

<div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="/adddoctor" className="btn btn-primary btn-block">
				  Add Yourself and get Verified
                  </Link>
                </form>
              </div>
            </div>
          </div>
</div>
</>
:



<div className="d-lg-flex align-items-lg-center">


<div className='col-lg-3'>
            <div className='card mb-4'>
			<span class="badge badge-success">Verified</span>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="" className="btn btn-primary btn-block">
				  Add Patient
                  </Link>
                </form>
              </div>
            </div>
          </div>

	  <div className='col-lg-3'>
            <div className='card mb-4'>
			<span class="badge badge-success">Verified</span>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="" className="btn btn-primary btn-block">
				  View Patient
                  </Link>
                </form>
              </div>
            </div>
          </div>

   
</div>




}


    </>
  )
}

export default DoctorHome