import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useState } from "react";


const DoctorContractAddress = "0xF0299d3E26012AAaEEd5E380cEe47d58fE771b1A";
const abiDoctorContract = [
  {
    inputs: [
      {
        internalType: "address",
        name: "Doctorid",
        type: "address",
      },
      {
        internalType: "string",
        name: "HospitalName",
        type: "string",
      },
      {
        internalType: "string",
        name: "DoctorName",
        type: "string",
      },
      {
        internalType: "string",
        name: "Address",
        type: "string",
      },
      {
        internalType: "string",
        name: "Speciality",
        type: "string",
      },
      {
        internalType: "string",
        name: "PhoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "CertificateNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "HospitalID",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "addDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllDoctor",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "Doctorid",
            type: "address",
          },
          {
            internalType: "string",
            name: "HospitalName",
            type: "string",
          },
          {
            internalType: "string",
            name: "DoctorName",
            type: "string",
          },
          {
            internalType: "string",
            name: "Address",
            type: "string",
          },
          {
            internalType: "string",
            name: "Speciality",
            type: "string",
          },
          {
            internalType: "string",
            name: "PhoneNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "CertificateNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "HospitalID",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
        ],
        internalType: "struct DoctorContract.DoctorData[]",
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
        name: "Doctorid",
        type: "address",
      },
    ],
    name: "getDoctor",
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
        name: "Doctorid",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "Doctorid",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "updateDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var arraylist2 = [];
var whole2 = [];

function AdminPanel() {
  const [w2, setw2] = useState([]);
  const [w1, setw1] = useState([]);

 
  const Update = async (status, id) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const DoctorContract = new ethers.Contract(
          DoctorContractAddress,
          abiDoctorContract,
          signer
        );

        if (status == 1) {
          status = 0;
        } else {
          status = 1;
        }

        let Txn2 = await DoctorContract.updateDoctor(id, status);
        console.log("Mining... please wait");
        await Txn2.wait();
        console.log(
          `Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`
        );
		alert("Sucess");
      } else {
        console.log("Ethereum object does not exist");
		alert("Error Occured");
      }
    } catch (err) {
      alert("Error Occured");
    }
  };

  async function getAllMedicine() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //doctor
        console.log(2);
        const DoctorContract = new ethers.Contract(
          DoctorContractAddress,
          abiDoctorContract,
          signer
        );
        arraylist2 = await DoctorContract.getAllDoctor();
        console.log(arraylist2);
        for (var i = 0; i < arraylist2.length; i++) {
          whole2[i] = arraylist2[i];
        }
        setw2(whole2);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const changeable = (status) => {
    console.log(status);
    var r = "";
    if (status == "1") {
      r = "Verified";
    } else {
      r = "Not Verified";
    }
    return r;
  };

  useEffect(() => {
    getAllMedicine();
  }, []);

  return (
    <>
  

      <div class="alert alert-secondary" role="alert">
        Register Drivers
      </div>

      <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
        {w2.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Driver ID</th>
               
                <th scope="col">Driver Name</th>
                <th scope="col">Address</th>
             
                <th scope="col">Phone Number</th>
                <th scope="col">License Number</th>
                
                <th scope="col">Status</th>
				<th scope="col">Update Status</th>
              </tr>
            </thead>
            <tbody>
              {w2.map((record, index) => (
                <tr key={index}>
                  <td>{String(record[0])}</td>
                
                  <td>{String(record[2])}</td>
                  <td>{String(record[3])}</td>
              
                  <td>{String(record[5])}</td>
                  <td>{String(record[6])}</td>
                
                  <td id="s">{changeable(String(record[8]))}</td>
				  <td>
  <button className="btn btn-success" onClick={() => Update(record[8], record[0])}>
    Update
  </button>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminPanel;
