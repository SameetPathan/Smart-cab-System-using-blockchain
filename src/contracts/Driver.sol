// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract DriverContract {

    struct DriverData {
        address DriverID;
        string DriverName;
        string birthdate;
        uint Experience;
        string PhoneNumber;
        string Address;
        string CarRegisterNumber;
        string CarName;
        string LicenseNumber;
        string CurrentLocation;
        uint status;
    }

    DriverData[] public Drivers;

    function addDriver(
        address DriverID,
        string memory DriverName,
        string memory birthdate,
        uint Experience,
        string memory PhoneNumber,
        string memory Address,
        string memory CarRegisterNumber,
        string memory CarName,
        string memory LicenseNumber,
        string memory CurrentLocation,
        uint status
    ) public {
        DriverData memory d = DriverData(
            DriverID,
            DriverName,
            birthdate,
            Experience,
            PhoneNumber,
            Address,
            CarRegisterNumber,
            CarName,
            LicenseNumber,
            CurrentLocation,
            status
        );
        Drivers.push(d);
    }

    function updateDriver(address DriverID, uint status) public {
        for (uint i = 0; i < Drivers.length; i++) {
            if (Drivers[i].DriverID == DriverID) {
                Drivers[i].status = status;
                return;
            }
        }
    }

    function getDriver(address DriverID) public view returns (
        string memory,
        string memory,
        string memory,
        uint,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        uint
    ) {
        for (uint i = 0; i < Drivers.length; i++) {
            if (Drivers[i].DriverID == DriverID) {
                return (
                    Drivers[i].DriverName,
                    Drivers[i].birthdate,
                    Drivers[i].PhoneNumber,
                    Drivers[i].Experience,
                    Drivers[i].Address,
                    Drivers[i].CarRegisterNumber,
                    Drivers[i].CarName,
                    Drivers[i].LicenseNumber,
                    Drivers[i].CurrentLocation,
                    Drivers[i].status
                );
            }
        }

        return ("Not Found","Not Found", "Not Found", 0, "Not Found", "Not Found", "Not Found", "Not Found", "Not Found", 0);
    }

    function getStatus(address DriverID) public view returns (uint) {
        for (uint i = 0; i < Drivers.length; i++) {
            if (Drivers[i].DriverID == DriverID) {
                return Drivers[i].status;
            }
        }
        return 0;
    }

    function getAllDrivers() public view returns (DriverData[] memory) {
        return Drivers;
    }

    function getNumberOfRecords() public view returns (uint) {
        return Drivers.length;
    }
}
