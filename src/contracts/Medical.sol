// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract MedicalContract{

struct MedicalData{
    
	  	address Medicalid;
        string MedicalName;
        string Address;
        string PhoneNumber;
        string CertificateNumber;
		uint status;
}

MedicalData []Medical;


function addMedical(
		address Medicalid,
        string memory MedicalName,
        string memory Address,
        string memory PhoneNumber,
        string memory CertificateNumber,
		uint status
       
) public{
	MedicalData memory e
		=MedicalData(
			Medicalid,
		 	MedicalName,
         	Address,
        	PhoneNumber,
        	CertificateNumber,
			status
      );
	Medical.push(e);
}

function updateMedicall(address Medicalid,uint status) public{
uint i;
for(i=0;i<Medical.length;i++)
{
MedicalData memory e =Medical[i];
	if(e.Medicalid==Medicalid)
	{
			e.MedicalName=e.MedicalName;
         	e.Address=e.Address;
        	e.PhoneNumber=e.PhoneNumber;
        	e.CertificateNumber=e.CertificateNumber;
			e.status=status;
			Medical[i]=e;
			return;
		}
	}
}

function getMedical(
	address Medicalid
) public view returns(
	string memory,
	string memory,
	string memory,
	string memory,
	uint
	
){
	uint i;
	for(i=0;i<Medical.length;i++)
	{
		MedicalData memory e
			=Medical[i];
		
		if(e.Medicalid==Medicalid)
		{
				return(
				
		 	e.MedicalName,
         	e.Address,
        	e.PhoneNumber,
        	e.CertificateNumber,
			e.status);
		}
	}

	return( "Not Found",
			"Not Found",
			"Not Found",
      		"Not Found",
			  0);
    }

	function getStatus(address Medicalid) public view returns(uint){
	uint i;
	for(i=0;i<Medical.length;i++)
	{
		MedicalData memory e
			=Medical[i];
		if(e.Medicalid==Medicalid)
		{
			return(e.status);
		}
	}
	return(0);
    }

	function getAllMedical() public view returns (MedicalData[] memory) {
    return Medical;
	}

		function getNumberOfRecords() public view returns (uint) {
    	return Medical.length;
	}



}
