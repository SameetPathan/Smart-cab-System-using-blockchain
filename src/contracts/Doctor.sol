// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract DoctorContract{

struct DoctorData{
    
		address Doctorid;
        string HospitalName;
        string DoctorName;
        string Address;
        string Speciality;
        string PhoneNumber;
        string CertificateNumber;
		string HospitalID;
		uint status;

		
}

DoctorData []Doctor;


function addDoctor(
		address Doctorid,
        string memory HospitalName,
        string memory DoctorName,
        string memory Address,
        string memory Speciality,
        string memory PhoneNumber,
        string memory CertificateNumber,
		string memory HospitalID,
		uint status
		
       
) public{
	DoctorData memory e
		=DoctorData(
		Doctorid,
       	HospitalName,
        DoctorName,
        Address,
        Speciality,
        PhoneNumber,
        CertificateNumber,
		HospitalID,
		status

      );
	Doctor.push(e);
}

function updateDoctor(address Doctorid,uint status) public{
uint i;
for(i=0;i<Doctor.length;i++)
{
DoctorData memory e =Doctor[i];
	if(e.Doctorid==Doctorid)
	{
			e.HospitalName=e.HospitalName;
			e.DoctorName=e.DoctorName;
    		e.Address=e.Address;
    		e.Speciality=e.Speciality;
   			e.PhoneNumber=e.PhoneNumber;
    		e.CertificateNumber=e.CertificateNumber;
			e.HospitalID=e.HospitalID;
			e.status=status;
			Doctor[i]=e;
			return;
		}
	}
}

function getDoctor(
	address Doctorid
) public view returns(
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	uint
	
){
	uint i;
	for(i=0;i<Doctor.length;i++)
	{
		DoctorData memory e
			=Doctor[i];
		
		if(e.Doctorid==Doctorid)
		{
				return(
				e.HospitalName,
				e.DoctorName,
        		e.Address,
        		e.Speciality,
       			e.PhoneNumber,
        		e.CertificateNumber,
				e.HospitalID,
				e.status
				
				);
		}
	}

	return( "Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
            "Not Found",
			0
			);
    }


function getStatus(address Doctorid) public view returns(uint){
	uint i;
	for(i=0;i<Doctor.length;i++)
	{
		DoctorData memory e
			=Doctor[i];
		if(e.Doctorid==Doctorid)
		{
			return(e.status);
		}
	}
	return(0);
    }

	function getAllDoctor() public view returns (DoctorData[] memory) {
    return Doctor;
	}

		function getNumberOfRecords() public view returns (uint) {
    	return Doctor.length;
	}

}
