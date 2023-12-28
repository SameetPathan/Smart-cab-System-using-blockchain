import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useState } from "react";

const DriverContractAddress = "0x5A96eA97518353ADCE1aa3C461c93E02d967BF4F";
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

var arraylist2 = [];
var whole2 = [];

function AdminPanel() {
  const [w2, setw2] = useState([]);

  const Update = async (status, id) => {
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

        if (status == 1) {
          status = 0;
        } else {
          status = 1;
        }
        let Txn2 = await DriverContract.updateDriver(id, status);
        await Txn2.wait();
        alert("Sucess");
      } else {
        alert("Error Occured");
      }
    } catch (err) {
      alert("Error Occured");
    }
  };

  async function getAllDriver() {
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
        arraylist2 = await DriverContract.getAllDrivers();
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
    getAllDriver();
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
                <th scope="col">Experience</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Car Number</th>
                <th scope="col">Car Name</th>
                <th scope="col">License Number</th>
                <th scope="col">Current City</th>
                <th scope="col">Status</th>
                <th scope="col">Update Status</th>
              </tr>
            </thead>
            <tbody>
              {w2.map((record, index) => (
                <tr key={index}>
                  <td>{String(record[0])}</td>
                  <td>{String(record[1])}</td>
                  <td>{String(record[2])}</td>
                  <td>{String(record[3])}</td>
                  <td>{String(record[4])}</td>
                  <td>{String(record[5])}</td>
                  <td>{String(record[6])}</td>
                  <td>{String(record[7])}</td>
                  <td>{String(record[8])}</td>
                  <td id="s">{changeable(String(record[9]))}</td>
                  <td className="d-flex align-items-center">
  <a
    href="https://parivahan.gov.in/rcdlstatus/?pur_cd=101"
    className="btn btn-primary mr-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    Verify DL
  </a>
  <button
    className="btn btn-success"
    onClick={() => Update(record[9], record[0])}
  >
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
