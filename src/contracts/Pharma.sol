// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract PharmaContract{

struct PharmaData{
    
		uint256 MedicineBatchId;
        address CompanyID;
        string CompanyName;
        string Address;
        string ExpireDate;
        string ManufactureDate;
        string Contents;
		string ApprovalFrom;
		uint status;
}


address myAddress = address(0x0);

PharmaData []Pharma;


function addMedicine(

        uint256 MedicineBatchId,
        address CompanyID,
        string memory  CompanyName,
        string memory  Address,
        string memory  ExpireDate,
        string memory  ManufactureDate,
        string memory  Contents,
		string memory  ApprovalFrom,
		uint status
		
) public{
	PharmaData memory e
		=PharmaData(MedicineBatchId,
	    CompanyID,
        CompanyName,
        Address,
        ExpireDate,
        ManufactureDate,
        Contents,
		ApprovalFrom,
		status
      );
	Pharma.push(e);
}


function UpdateMedicine(uint256 MedicineBatchId,uint status) public{
uint i;
for(i=0;i<Pharma.length;i++)
{
PharmaData memory e =Pharma[i];
	if(e.MedicineBatchId==MedicineBatchId)
	{
		e.CompanyName=e.CompanyName;
        e.Address=e.Address;
        e.ExpireDate=e.ExpireDate;
        e.ManufactureDate=e.ManufactureDate;
        e.Contents=e.Contents;
		e.ApprovalFrom=e.ApprovalFrom;
		e.status=status;
		Pharma[i]=e;
			return;
		}
	}
}


function getMedicine(
	uint256 MedicineBatchId
) public view returns(
	address,
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	uint
){
	uint i;
	for(i=0;i<Pharma.length;i++)
	{
		PharmaData memory e
			=Pharma[i];
		
		if(e.MedicineBatchId==MedicineBatchId)
		{
				return(e.CompanyID,
        e.CompanyName,
        e.Address,
        e.ExpireDate,
        e.ManufactureDate,
        e.Contents,
		e.ApprovalFrom,
		e.status);
		}
	}

	return( myAddress,
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			0
            );
    }

	function getStatus(uint256 MedicineBatchId) public view returns(uint){
	uint i;
	for(i=0;i<Pharma.length;i++)
	{
		PharmaData memory e
			=Pharma[i];
		if(e.MedicineBatchId==MedicineBatchId)
		{
			return(e.status);
		}
	}
	return(0);
    }

	function getAllPharma() public view returns (PharmaData[] memory) {
    return Pharma;
	}

	function getNumberOfRecords() public view returns (uint) {
    return Pharma.length;
}

}
