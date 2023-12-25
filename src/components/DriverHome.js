import React, { useState } from 'react';

const DriverHome = (props) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [driverId, setDriverId] = useState('Driver_1'); 
  const [customerDetails, setCustomerDetails] = useState([
    {
      customerName: 'Customer 1',
      phoneNumber: '1234567890',
      startLocation: 'Start Location 1',
      endLocation: 'End Location 1',
      fare: '$50',
      acceptedBy: null
    },
    {
      customerName: 'Customer 2',
      phoneNumber: '9876543210',
      startLocation: 'Start Location 2',
      endLocation: 'End Location 2',
      fare: '$70',
      acceptedBy: null
    },
  ]);

  const acceptRequest = (index) => {
    const updatedCustomerDetails = customerDetails.map((customer, i) => {
      if (i === index) {
        return { ...customer, accepted: true, rejected: false, acceptedBy: driverId };
      }
      return customer;
    });
    setCustomerDetails(updatedCustomerDetails);
    setSelectedCustomer(updatedCustomerDetails[index]);
    console.log(customerDetails)
  };

  const endRide = (paymentMode) => {
    if (selectedCustomer) {
      const updatedCustomerDetails = customerDetails.map((customer) => {
        if (customer === selectedCustomer) {
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

  return (
    <>
      <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3 mb-4">
        <label htmlFor="currentLocation">Current Location<strong className='text-info'>(Always keep your location updated)</strong></label>
        <input
          type="text"
          className="form-control"
          id="currentLocation"
          placeholder="Enter current location"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
        />
        <button onClick={getLocation} className="btn btn-primary mt-2">
          Get Current Location
        </button>
        <button onClick={openNavigation} className="btn btn-primary mt-2 ml-2" disabled={!selectedCustomer}>
          Navigate to Customer
        </button>
        <button onClick={openNavigation2} className="btn btn-success mt-2 ml-2" disabled={!selectedCustomer}>
          Start Ride
        </button>
      </div>

      <table className="table">
      <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Start Location</th>
            <th>Destination Location</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerName}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.startLocation}</td>
              <td>{customer.endLocation}</td>
              <td>{customer.fare}</td>
              <td>
                {customer.acceptedBy === driverId ? (
                    <>{customer.paymentMode ?
                        <p>Ride Ended</p>:
                        <p>Ride Accepted</p>
                    }
                    {!customer.paymentMode && (
                      <>
                        <button onClick={() => endRide('cash')} className="btn btn-primary mr-2">
                          End Ride - Cash
                        </button>
                        <button onClick={() => endRide('online')} className="btn btn-primary">
                          End Ride - Online
                        </button>
                      </>
                    )}
                  </>
                ) : customer.acceptedBy ? (
                  <p>Ride Accepted by Another Driver</p>
                ) : customer.paymentMode ? (
                  <p>Ride Ended</p>
                ) : (
                  <>
                    <button onClick={() => acceptRequest(index)} className="btn btn-success">
                      Accept
                    </button>
                   
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
};

export default DriverHome;
