const DoctorContractAddress="0xA08169A7267f47422e9aFd5deD66B2774342e252";
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
	}
];

const MedicalContractAddress="0xde64DF73E3e4064585494D61F6FfCe39435d41d8";
const abiMedicalContract=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Medicalid",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "MedicalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
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
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addMedical",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMedical",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Medicalid",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "MedicalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
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
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct MedicalContract.MedicalData[]",
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
				"name": "Medicalid",
				"type": "address"
			}
		],
		"name": "getMedical",
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
				"name": "Medicalid",
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
				"name": "Medicalid",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateMedicall",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const PatientContractAddress="0x89D128e174E05e2bEf51eFA05D2A2D2c787d83E0";
const abiPatientContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "FullName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Diagnoses",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Medicines",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Health_Survey_Lab_Test",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "AnyPastHistroy",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Doctorid",
				"type": "address"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPatient",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "patientid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "FullName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Diagnoses",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Medicines",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Health_Survey_Lab_Test",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AnyPastHistroy",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Doctorid",
						"type": "address"
					}
				],
				"internalType": "struct PatientContract.PatientData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
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
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			}
		],
		"name": "getPatient",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const PharmaContractAddress="0xdE663Ba02E03D5886968eb07d659E81Ef52Fd282";
const abiPharmaContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "UpdateMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "CompanyID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "CompanyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ExpireDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ManufactureDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Contents",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ApprovalFrom",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPharma",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "MedicineBatchId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "CompanyID",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "CompanyName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ExpireDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ManufactureDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Contents",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ApprovalFrom",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct PharmaContract.PharmaData[]",
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
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			}
		],
		"name": "getMedicine",
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
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
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