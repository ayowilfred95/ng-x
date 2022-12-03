// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;



contract PatientHealthRecord {
    // Patient and doctors are assigned ID numbers using a counter.
    uint256 public counterPatientID = 1;
    uint256 public counterDoctorID = 1;

    
    //  patient age will unlikely exceed 255, so uint8 is used instead of uint256.
    // prescriptions array could be replaced with a mapping, though it would be more difficult to iterate components in the front end.
    struct Patient {
        uint256 patientID;
        string patientName;
        string patientGender;
        uint8 patientAge;
        string[] conditions;
        Medication[] prescriptions;
        Dependency[] dependencies;
    }
    Dependency[] private dependencies;

    struct Dependency {
        uint256 dependencyId;
        string dependencyName;
        string dependencyAddress;
        string dependencyRelationship;
        uint256 contactNumber;
    }

    // Patient Array
    Patient[] private patients;

    struct Doctor {
        uint256 doctorID;
        string doctorName;
        string specialty;
        string workplace;
    }

    Doctor[] private doctors;

    struct Medication {
        uint256 medicationId;
        string medicationName;
        string dosage;
        uint256 price;
    }

    Medication[] private medications;

    //create mappings to verify patients and doctors once they have registered with the registration() functions.  Patient data should always remain private.
    mapping(address => bool) private verifiedPatient;
    mapping(address => bool) public verifiedDoctor;

    //connect the address of the patients and doctors to their structures.  MUST be private for patients (no external calling to view the patient data).
    mapping(address => Patient) private addressToPatientRecord;
    mapping(address => Doctor) public addressToDoctor;

    //connect ID's to addresses.  Function callers may only have access to ID numbers and not to any addresses. These mapping aid with function execution.
    mapping(uint256 => address) private patientIdToAddress;
    mapping(uint256 => address) private doctorIdToAddress;

    //list of patient approved doctors using a nested mapping approach (similar to ERC20 approval).  Patient data is always private.
    mapping(address => mapping(address => bool)) private approvedDoctors;

    //medication registry and lookup through medication ID.  Every ID will be unique -- second mapping helps prevent duplicate medicine ID registrations
    mapping(uint256 => Medication) public idToMedication;
    mapping(uint256 => bool) public medicationIdToBool;

     // dependency registry and lookup through dependency ID
    mapping(uint256 => Dependency) public idToDependency;
    mapping(uint256 => bool) public dependencyIdToBool;


    modifier onlyPatient() {
        require(verifiedPatient[msg.sender] == true, "Not a patient!");
        _;
    }

    modifier onlyDoctor() {
        require(verifiedDoctor[msg.sender] == true, "Not a doctor!");
        _;
    }

    modifier approvedDoctor(uint256 patientID) {
        require(
            approvedDoctors[msg.sender][patientIdToAddress[patientID]],
            "Doctor does not have approval to treat this patient!"
        );
        _;
    }

    modifier validNumber(uint256 _number) {
        require(_number > 0, "Value must be greater than 0!");
        _;
    }

    // Patients register with 3 of 6 inputs of the Patient structure.  Only doctors can add the prescription and conditions components.
    //  patient name, gender (0 or 1), age.  ID number is automatically generated by the patient counter.
    function registerNewPatient(
        string calldata _name,
        string calldata _gender,
        uint8 _age
    ) external validNumber(_age) {
        require(
            verifiedPatient[msg.sender] == false,
            "Patient has already registered!"
        );
        Patient storage newPatient = addressToPatientRecord[msg.sender];
        newPatient.patientID = counterPatientID;
        newPatient.patientName = _name;
        newPatient.patientGender = _gender;
        newPatient.patientAge = _age;

        patientIdToAddress[counterPatientID] = msg.sender; //
        patients.push(newPatient);
        verifiedPatient[msg.sender] = true;
        counterPatientID++;
    }

    //  Allows  registered patients to update their age.  This is the only parameter in the Patient structure that patients can change.
    //  _age is uint8 because age will never exceed 2^8-1
    function updateMyAge(uint8 _age) external validNumber(_age) onlyPatient {
        addressToPatientRecord[msg.sender].patientAge = _age;
    }

    // patients need to approve registered doctors before those doctors can prescribe medication, add new conditions, and view patient medical records.
    // patients enter the doctor ID number.
    function approveDoctor(uint256 _doctorID)
        external
        validNumber(_doctorID)
        onlyPatient
    {
        require(
            verifiedDoctor[doctorIdToAddress[_doctorID]] == true,
            "This doctor is not registered!"
        );
        approvedDoctors[doctorIdToAddress[_doctorID]][msg.sender] = true;
    }

    // Allow registered patients to view their records.  Only registered patients can call this function.
    function viewMyRecords()
        external
        view
        onlyPatient
        returns (Patient memory)
    {
        return addressToPatientRecord[msg.sender];
    }

    // Registered patients can view the full list of registered doctors.  List contains doctor ID and doctor name.  Pateitn can
    // obtain more information about the doctor (specialty, location) by calling getDoctorDetails() function.
    function viewListOfDoctors()
        public
        view
        onlyPatient
        returns (Doctor[] memory)
    {
        return doctors;
    }

    // Patients can obtain a readout of the Doctor structure by inputting an integer corresponding to the Doctor ID number.
    function getDoctorDetails(uint256 _doctorId)
        external
        view
        validNumber(_doctorId)
        onlyPatient
        returns (Doctor memory)
    {
        address doctor_address = doctorIdToAddress[_doctorId];
        return addressToDoctor[doctor_address];
    }

    // New doctors register to the network by inputting their name, specialty, and work location.
    // caller address is checked against the list of registered doctors by checking the verifiedDoctor mapping.
    // A new doctor structure is then created and added to list of doctors with a unique ID nubmer.
    // Doctor name, specialty, and workplace.  Doctor ID  value is automatically assigned with the counter variable.
    function registerNewDoctor(
        string calldata _name,
        string calldata _specialty,
        string calldata _workplace
    ) external {
        require(!verifiedDoctor[msg.sender], "Doctor has already registered!");
        verifiedDoctor[msg.sender] = true;
        Doctor storage newDoctor = addressToDoctor[msg.sender];
        newDoctor.doctorID = counterDoctorID;
        newDoctor.doctorName = _name;
        newDoctor.specialty = _specialty;
        newDoctor.workplace = _workplace;

        doctors.push(newDoctor);
        doctorIdToAddress[counterDoctorID] = msg.sender;
        counterDoctorID++;
    }

    // Approved doctors can add a diagnosis to the patient's list of conditions.
    function addCondition(string calldata _newCondition, uint256 patientID)
        external
        onlyDoctor
        approvedDoctor(patientID)
        validNumber(patientID)
    {
        address patientAddr = patientIdToAddress[patientID];
        addressToPatientRecord[patientAddr].conditions.push(_newCondition);
    }

    // Doctors can register new medications to the database.
    // Doctors need to call on the "addPrescription()" function to add a medication to a patient's prescriptions array.
    function addMedication(
        uint256 _medicationID,
        string calldata _medicationName,
        string calldata _dosage,
        uint256 _price
    ) external onlyDoctor validNumber(_medicationID) validNumber(_price) {
        require(
            medicationIdToBool[_medicationID] == false,
            "Medication already registered!"
        );
        medicationIdToBool[_medicationID] = true;
        Medication memory medicine = Medication(
            _medicationID,
            _medicationName,
            _dosage,
            _price
        );

        idToMedication[_medicationID] = medicine;
        medications.push(medicine);
    }

    // Allow doctors to view a list of currently registered medications
    // return an array of Medication structures
    function viewListofMedications()
        public
        view
        onlyDoctor
        returns (Medication[] memory)
    {
        return medications;
    }

    // Patient approved doctors can add medications to Patient structures
    //  patient ID number and medication ID number
    function addPrescription(uint256 _patientID, uint256 _medicineID)
        external
        onlyDoctor
        approvedDoctor(_patientID)
        validNumber(_patientID)
        validNumber(_medicineID)
    {
        require(
            medicationIdToBool[_medicineID] == true,
            "Medication not registered!"
        );
        Patient storage patient = addressToPatientRecord[
            patientIdToAddress[_patientID]
        ];
        Medication storage medicine = idToMedication[_medicineID];
        patient.prescriptions.push(medicine);
    }

    // Approved doctors can call on this function to vie their patient's medical record
    // function takes in the patient ID number as an input.
    // patient ID number if first mapped to the patient's address, which is then mapped to the Patient structure.
    // return full patient structure including ID number, name, gender (0 or 1), age, list of conditions, and list of prescriptions.
    function viewPatientRecords(uint256 _patientID)
        external
        view
        onlyDoctor
        approvedDoctor(_patientID)
        validNumber(_patientID)
        returns (Patient memory)
    {
        return addressToPatientRecord[patientIdToAddress[_patientID]];
    }

    // function to add dependencies to patient portal
     function addDependency(
        uint256 _dependencyID,
        string calldata _dependencyName,
        string calldata _dependencyRelationship,
        string calldata _dependencyAddress,
        uint256 _contactNumber
    ) external onlyPatient validNumber(_dependencyID) validNumber(_contactNumber) {
        require(
            dependencyIdToBool[_dependencyID] == false,
            "Dependency  already registered!"
        );
        dependencyIdToBool[_dependencyID] = true;
        Dependency memory family = Dependency(
            _dependencyID,
            _dependencyName,
            _dependencyRelationship,
             _dependencyAddress,
             _contactNumber
        );

        idToDependency[_dependencyID] = family;
        dependencies.push(family);
    }

     // Function to view details about dependencies

      function viewListofDependencies()
        public
        view
        onlyPatient
        returns (Dependency[] memory)
    {
        return dependencies;
    }
}
