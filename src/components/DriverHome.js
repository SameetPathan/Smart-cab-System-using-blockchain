import React, { useState,useEffect } from 'react';
import { getDatabase, ref, set ,get,remove} from "firebase/database";
import { register } from '../firebaseConfig';
import { ethers } from "ethers";
import '../footer.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


const DriverHome = (props) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [driverId, setDriverId] = useState('Driver_1'); 
  const [customerDetails, setCustomerDetails] = useState([
   
  ]);
  
  
const RideContractAddress = "0x83E722B79002a1392Ab7BEf7846A79665a3277B3";
const abiRideContract = [
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
				"name": "CustomerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Money",
				"type": "uint256"
			}
		],
		"name": "addRide",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfRides",
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
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getRide",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Rides",
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
				"name": "CustomerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Money",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


  const [account, setAccount] = useState(null);

  const setacc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
  };

  const savedata = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const RideContract = new ethers.Contract(
          RideContractAddress,
          abiRideContract,
          signer
        );

        let Txn2 = await RideContract.addRide(
          account,
          "Driver",
          "Rider",
          100,
		
        );
       
        await Txn2.wait();
        alert("Payment initianted Success");
        endRide('online')
      } else {
        alert("Ethereum object does not exist");
      }
    } catch (err) {
      alert(err);
    }
  };


  const fetchPosts = async () => {
    const db = getDatabase();
    const userRef = ref(db, "rides");
    const userSnapshot = await get(userRef);
    const fetchedPosts = userSnapshot.val();
    if (fetchedPosts) {
      const postsArray = Object.keys(fetchedPosts).map((key) => ({
        id: key,
        ...fetchedPosts[key],
      }));
      setCustomerDetails(postsArray);
    }

};

  useEffect(() => {
    fetchPosts();
  }, []);

  const acceptRequest = (index) => {
    const updatedCustomerDetails = customerDetails.map((customer, i) => {
      if (i === index) {
        return { ...customer, accepted: true, rejected: false, acceptedBy: driverId };
      }
      return customer;
    });
    register(updatedCustomerDetails[index])
    setCustomerDetails(updatedCustomerDetails);
    setSelectedCustomer(updatedCustomerDetails[index]);
    console.log(customerDetails)
  };

  const endRide = (paymentMode) => {
    if (selectedCustomer) {
      const updatedCustomerDetails = customerDetails.map((customer) => {
        if (customer === selectedCustomer) {
          let data ={ ...customer, rideEnded: true, paymentMode }
           register(data)
          return { ...customer, rideEnded: true, paymentMode };
        }

        return customer;
      });
     
      setCustomerDetails(updatedCustomerDetails);
      setSelectedCustomer(null);
    }
     console.log(customerDetails)
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );

            if (!response.ok) {
              throw new Error('Location not found');
            }

            const data = await response.json();
            const locationName = data.display_name;

            setCurrentLocation(locationName);
            setError(null);
          } catch (error) {
            console.error('Error fetching location:', error.message);
            setError('Location not available');
            setCurrentLocation('');
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
          setError('Location not available');
          setCurrentLocation('');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const openNavigation = () => {
    if (selectedCustomer) {
      const customerLocation = `${selectedCustomer.startLocation}`;
      const navigationUrl = `https://www.google.com/maps/dir/${currentLocation}/${encodeURIComponent(customerLocation)}`;
      window.open(navigationUrl, '_blank');
    }
  };

  const openNavigation2 = () => {
    if (selectedCustomer) {
      const customerLocation = `${selectedCustomer.endLocation}`;
      const navigationUrl = `https://www.google.com/maps/dir/${selectedCustomer.startLocation}/${encodeURIComponent(customerLocation)}`;
      window.open(navigationUrl, '_blank');
    }
  };

  useEffect(() => {
    setacc();
  });

  return (
    <>
    <div style={{ marginBottom: "160px" }}>
      <div className="container shadow p-3 bg-white rounded mt-3 mb-4">
        <Link to="/addride" className="btn btn-primary btn-block mt-4 mb-4">
          Add More Ride
        </Link>
        <label htmlFor="currentLocation">
          Current Location
          <strong className='text-info'>(Always keep your location updated)</strong>
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="currentLocation"
            placeholder="Enter current location"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />
          <div className="input-group-append">
            <button onClick={getLocation} className="btn btn-primary" type="button">
              Get Current Location
            </button>
          </div>
        </div>
        <div className="mt-2">
          <button onClick={openNavigation} className="btn btn-primary" disabled={!selectedCustomer}>
            Navigate to Customer
          </button>
          <button onClick={openNavigation2} className="btn btn-success ml-2" disabled={!selectedCustomer}>
            Start Ride
          </button>
        </div>
      </div>
  <div className='container'>
      <table className="table table-responsive">
        <thead className="thead-dark">
          <tr>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Start Location</th>
            <th>Destination Location</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-white bg-dark'>
          {customerDetails.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerName}</td>
              <td>{customer.phoneNumber.slice(0, -3)}</td>
              <td>{customer.startLocation}</td>
              <td>{customer.endLocation}</td>
              <td>{customer.fare}</td>
              <td>
                {customer.acceptedBy === driverId ? (
                  <>
                    {customer.paymentMode ? (
                      <p>Ride Ended</p>
                    ) : (
                      <>
                        <button onClick={() => endRide('cash')} className="btn btn-primary mr-2">
                          End Ride - Cash
                        </button>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal12">
                        End Ride - Online
                        </button>
                        
                        <button onClick={() =>{savedata()}} className="btn btn-primary m-1">
                          End Ride - Blockchain Payment
                        </button>
                      </>
                    )}
                  </>
                ) : customer.acceptedBy ? (
                  <p>Ride Accepted by Another Driver</p>
                ) : customer.paymentMode ? (
                  <p>Ride Ended</p>
                ) : (
                  <button onClick={() => acceptRequest(index)} className="btn btn-success">
                    Accept
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>


    <div class="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">QR Code Payment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img height={400} width={400} src="qrcode.jpeg" alt="QR Code" />
      </div>
      <div class="modal-footer">
        <button onClick={() => endRide('online')} className="btn btn-primary" data-dismiss="modal">
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>

  </>
  
  );
};

export default DriverHome;
