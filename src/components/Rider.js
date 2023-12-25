import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useState } from "react";

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

var arraylist2 = [];
var whole2 = [];

function Rider() {
  const [w2, setw2] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  const [startLocation, setStartLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [fareAmount, setFareAmount] = useState(0);
  const [rideTime, setRideTime] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");


  const handleConfirm = () => {
    const bookingData = {
      "startLocation":startLocation,
      "endLocation":destinationLocation,
      "fare":fareAmount,
      "time":rideTime,
      "customerName":userName,
      "phoneNumber":userPhoneNumber,
    };
    console.log("###Booking: ",bookingData)

    setStartLocation("");
    setDestinationLocation("");
    setFareAmount(0);
    setRideTime("");
    setUserName("");
    setUserPhoneNumber("");
   
  };


  const handleLocationChange = (e) => {
    setCurrentLocation(e.target.value);
  };

  const filteredRecords = w2.filter(
    (record) =>
      String(record[8]).toLowerCase().includes(currentLocation.toLowerCase())
  );

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
       Rides Near you..
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your current location to filter cab"
          value={currentLocation}
          onChange={handleLocationChange}
        />
      </div>

      <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
        {w2.length === 0 ? (
          <div>Loading...</div>
        ) : (
            <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Driver Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Car Number</th>
                <th scope="col">Car Name</th>
                <th scope="col">Driver Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record, index) => (
                <tr key={index}>
                  <td>{String(record[1])}</td>
                  <td>{String(record[3])}</td>
                  <td>{String(record[5])}</td>
                  <td>{String(record[6])}</td>
                  <td>{String(record[8])}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


      
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Ride</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
              </div>
              <div className="modal-body">
                {/* Form inputs for start and destination locations, fare amount, time, user name, and phone number */}
                <div className="form-group">
                  <label htmlFor="startLocation">Start Location:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="startLocation"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                  />
                   <label htmlFor="destinationLocation">Destination Location:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="destinationLocation"
                    value={destinationLocation}
                    onChange={(e) => setDestinationLocation(e.target.value)}
                  />
                </div>
                <label htmlFor="userName">Your Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="userPhoneNumber">Your Phone Number:</label>
                <input
                    type="text"
                    className="form-control"
                    id="userPhoneNumber"
                    value={userPhoneNumber}
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                />
              
              </div>
              <div className="modal-footer">
             
                <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>


      

    </>
  );
}

export default Rider;

