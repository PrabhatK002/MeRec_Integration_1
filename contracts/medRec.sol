//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.22 <0.9.0;

contract medRec {
    uint256 public pindex = 0;
    uint256 public dindex = 0;
    uint256 public phindex = 0;
    uint256 public lindex = 0;
    uint256 public iindex = 0;
    //uint256 public rindex = 0;

    struct Records {
        string dname;
        string reason;
        string visitedDate;
        string ipfs;
    }

    struct doctor {
        uint256 id;
        string name;
        string contact;
        string hname;
        string faculty;
        address addr;
        uint256 licenseno;
        bool isApproved;
    }

    struct patient {
        uint256 id;
        string name;
        string phone;
        string gender;
        string dob;
        string bloodgroup;
        Records[] records;
        address addr;
    }

    struct pharmacy {
        uint256 id;
        string name;
        string contact;
        string location;
        address addr;
        uint256 licenseno;
        bool isApproved;
    }

    struct laboratory {
        uint256 id;
        string name;
        string contact;
        string location;
        address addr;
        uint256 licenseno;
        bool isApproved;
    }

    struct insuranceCompany {
        uint256 id;
        string name;
        string contact;
        string location;
        address addr;
        uint256 licenseno;
        bool isApproved;
    }

    /*struct researcher {
        uint256 id;
        string name;
        string contact;
        string affiliation;
        address addr;
        uint256 licenseno;
        bool isApproved;
    }*/

    address[] private patientList;
    address[] public doctorList;
    address[] public pharmacyList;
    address[] public laboratoryList;
    address[] public insuranceCompanyList;
    //address[] public researcherList;

    uint256[] public registeredDoctorList;
    uint256[] public registeredPharmacyList;
    uint256[] public registeredLaboratoryList;
    uint256[] public registeredInsuranceCompanyList;
    //uint256[] public registeredResearcherList;

    address public owner;

    mapping(address => patient) patients;
    mapping(address => doctor) doctors;
    mapping(address => pharmacy) pharmacies;
    mapping(address => laboratory) laboratories;
    mapping(address => insuranceCompany) insuranceCompanies;
    //mapping(address => researcher) researchers;
    mapping(address => bool) isPatient;
    mapping(address => bool) isDoctor;
    mapping(address => bool) isPharmacy;
    mapping(address => bool) isLaboratory;
    mapping(address => bool) isInsuranceCompany;
    //mapping(address => bool) isResearcher;
    mapping(address => mapping(address => bool)) Authorized;
    mapping(string => mapping(uint256 => bool)) Registered;

    constructor() public {
        owner = msg.sender;
    }




    //identify the user
    function user(address addr) public view returns (int success) {
        if (isDoctor[addr] == true) {
            return 0;
        } else if (isPatient[addr] == true) {
            return 1;
        } else if (isLaboratory[addr] == true) {
            return 2;
        } else if (isPharmacy[addr] == true) {
            return 3;
        } else if (isInsuranceCompany[addr] == true) {
            return 4;
        } else if (addr == owner) {
            return 5;
        } else {
            return 6;
        }
    }

    function isAuthorized(
        address pat,
        address client
    ) public view returns (bool success) {
        return Authorized[pat][client];
    }

    //Register the doctor by certain authority
    function registerDoctor(string memory docname, uint256 license) public {
        require(msg.sender == owner);
        Registered[docname][license] = true;
        registeredDoctorList.push(license);
    }

    //register the laboratory
    function registerLaboratory(string memory labname, uint256 labid) public {
        require(msg.sender == owner);
        Registered[labname][labid] = true;
        registeredLaboratoryList.push(labid);
    }

    //register the insurance company
    function registerInsuranceCompany(
        string memory insname,
        uint256 insid
    ) public {
        require(
            msg.sender == owner);
        Registered[insname][insid] = true;
        registeredInsuranceCompanyList.push(insid);
    }

    //register the pharmacy
    function registerPharmacy(string memory pharmname, uint256 pharmid) public {
        require(msg.sender == owner);
        Registered[pharmname][pharmid] = true;
        registeredPharmacyList.push(pharmid);
    }

    //register the researchers
    /*function registerResearcher(string memory resname, uint256 resid) public {
        require(
            msg.sender == owner,
            "U"
        );
        Registered[resname][resid] = true;
        registeredResearcherList.push(resid);
    }*/

    //Check whether the doctor is registered or not
    function isRegistered(address addr) public view returns (bool success) {
        //doctor memory doc = doctors[addr];
        return Registered[doctors[addr].name][doctors[addr].licenseno];
    }

    //check whether the pharmacy is registered or not
    function isRegisteredPharmacy(
        address addr
    ) public view returns (bool success) {
        //pharmacy memory pharm = pharmacies[addr];
        return Registered[pharmacies[addr].name][pharmacies[addr].id];
    }

    //check whether the laboratory is registered or not
    function isRegisteredLaboratory(
        address addr
    ) public view returns (bool success) {
        //laboratory memory lab = laboratories[addr];
        return Registered[laboratories[addr].name][laboratories[addr].id];
    }

    //check whether insurance company is registered or not
    function isRegisteredInsuranceCompany(
        address addr
    ) public view returns (bool success) {
        //insuranceCompany memory insCom = insuranceCompanies[addr];
        return Registered[insuranceCompanies[addr].name][insuranceCompanies[addr].id];
    }

    //check whether researcher is registered or not
    /*function isRegisteredResearcher(
        address addr
    ) public view returns (bool success) {
        //researcher memory resch = researchers[addr];
        return Registered[researchers[addr].name][researchers[addr].id];
    }*/

    //add the patient to the blockchain
    function addPatient(
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _bloodgroup
    ) public {
        require(!isPatient[msg.sender], "E");
        
        patientList.push(msg.sender);
        pindex = pindex + 1;
        isPatient[msg.sender] = true;
        patients[msg.sender].id = pindex;
        patients[msg.sender].name = _name;
        patients[msg.sender].phone = _phone;
        patients[msg.sender].gender = _gender;
        patients[msg.sender].dob = _dob;
        patients[msg.sender].bloodgroup = _bloodgroup;
        patients[msg.sender].addr = msg.sender;
    }

    //get the details of the patients using eth-address
    function getPatientDetails(
        address _addr
    )
        public
        view
        returns (
            string memory _name,
            string memory _phone,
            string memory _gender,
            string memory _dob,
            string memory _bloodgroup
        )
    {
        require(isPatient[_addr], "E");
        //patient memory pat = patients[_addr];
        return (patients[_addr].name, patients[_addr].phone, patients[_addr].gender, patients[_addr].dob, patients[_addr].bloodgroup);
    }

    //add doctor
    function addDoctor(
        string memory _name,
        string memory _hname,
        string memory _faculty,
        string memory _contact,
        uint256 license
    ) public {
        require(!isDoctor[msg.sender], "R");
        require(
            msg.sender != owner,
            "U"
        );
        
        address _addr = msg.sender;
        doctorList.push(_addr);

        dindex = dindex + 1;
        isDoctor[_addr] = true;
        doctors[_addr].name = _name;
        doctors[_addr].contact = _contact;
        doctors[_addr].hname = _hname;
        doctors[_addr].faculty = _faculty;
        doctors[_addr].addr = _addr;
        doctors[_addr].licenseno = license;
        doctors[_addr].isApproved = false;

        if (Registered[_name][license] == true) {
            doctors[_addr].isApproved = true;
        }
    }

    //get doctors detail using eth-address
    function getDoctorByAddress(
        address _address
    )
        public
        view
        returns (
            uint256 id,
            string memory name,
            string memory contact,
            string memory hname,
            string memory faculty,
            address addr,
            bool isApproved,
            uint256 licenseno
        )
    {
        // require(doctors[_address].isApproved,"Doctor is not Approved or doesn't exist");
        doctor memory doc = doctors[_address];
        return (
            doc.id,
            doc.name,
            doc.contact,
            doc.hname,
            doc.faculty,
            doc.addr,
            doc.isApproved,
            doc.licenseno
        );
    }

    //add pharmacy
    function addPharmacy(
        string memory _name,
        string memory _location,
        string memory _contact,
        uint256 license
    ) public {
        require(!isPharmacy[msg.sender], "R");
        require(
            msg.sender != owner,
            "U"
        );
        require(bytes(_name).length > 0);
        require(bytes(_contact).length > 0);
        require(license > 0);
        address _addr = msg.sender;
        pharmacyList.push(_addr);

        pindex = pindex + 1;
        isPharmacy[_addr] = true;
        pharmacies[_addr].name = _name;
        pharmacies[_addr].contact = _contact;
        pharmacies[_addr].location = _location;
        pharmacies[_addr].addr = _addr;
        pharmacies[_addr].isApproved = false;

        if (Registered[_name][license] == true) {
            pharmacies[_addr].isApproved = true;
        }
    }

    //get pharmacy details using eth address
    function getPharmacyByAddress(
        address _address
    )
        public
        view
        returns (
            uint256 id,
            string memory name,
            string memory contact,
            address addr,
            bool isApproved,
            string memory location,
            uint256 licenseno
        )
    {
        //pharmacy memory pharm = pharmacies[_address];
        return (
            pharmacies[_address].id,
            pharmacies[_address].name,
            pharmacies[_address].contact,
            pharmacies[_address].addr,
            pharmacies[_address].isApproved,
            pharmacies[_address].location,
            pharmacies[_address].licenseno
        );
    }

    //add insurance company
    function addInsuranceCompany(
        string memory _name,
        string memory _location,
        string memory _contact,
        uint256 license
    ) public {
        require(!isInsuranceCompany[msg.sender], "R");
        require(msg.sender != owner,"U");
        require(bytes(_name).length > 0);
        require(bytes(_contact).length > 0);
        require(license > 0);
        address _addr = msg.sender;
        pharmacyList.push(_addr);

        iindex = iindex + 1;
        isInsuranceCompany[_addr] = true;
        insuranceCompanies[_addr].name = _name;
        insuranceCompanies[_addr].contact = _contact;
        insuranceCompanies[_addr].location = _location;
        insuranceCompanies[_addr].addr = _addr;
        insuranceCompanies[_addr].isApproved = false;

        if (Registered[_name][license] == true) {
            insuranceCompanies[_addr].isApproved = true;
        }
    }

    //get insurance company details using eth address
    function getInsuranceCompanyByAddress(
        address _address
    )
        public
        view
        returns (
            uint256 id,
            string memory name,
            string memory contact,
            string memory location,
            address addr,
            uint256 licenseno,
            bool isApproved
        )
    {
        insuranceCompany memory insCom = insuranceCompanies[_address];
        return (
            insCom.id,
            insCom.name,
            insCom.contact,
            insCom.location,
            insCom.addr,
            insCom.licenseno,
            insCom.isApproved
        );
    }

    //add laboratory
    function addLaboratory(
        string memory _name,
        string memory _location,
        string memory _contact,
        uint256 license
    ) public {
        require(!isLaboratory[msg.sender], "R");
        require(
            msg.sender != owner, "U");
        require(bytes(_name).length > 0);
        require(bytes(_contact).length > 0);
        require(license > 0);
        address _addr = msg.sender;
        laboratoryList.push(_addr);

        lindex = lindex + 1;
        isLaboratory[_addr] = true;
        laboratories[_addr].name = _name;
        laboratories[_addr].contact = _contact;
        laboratories[_addr].location = _location;
        laboratories[_addr].addr = _addr;
        laboratories[_addr].isApproved = false;

        if (Registered[_name][license] == true) {
            laboratories[_addr].isApproved = true;
        }
    }

    //get laboratory details using eth address
    function getLaboratoryByAddress(
        address _address
    )
        public
        view
        returns (
            uint256 id,
            string memory name,
            string memory contact,
            string memory location,
            address addr,
            uint256 licenseno,
            bool isApproved
        )
    {
        laboratory memory lab = laboratories[_address];
        return (
            lab.id,
            lab.name,
            lab.contact,
            lab.location,
            lab.addr,
            lab.licenseno,
            lab.isApproved
        );
    }

    //add researchers
    /*function addResearcher(
        string memory _name,
        string memory _affiliation,
        string memory _contact,
        uint256 license
    ) public {
        require(!isResearcher[msg.sender], "R");
        require(
            msg.sender != owner,
            "UA"
        );
        require(bytes(_name).length > 0);
        require(bytes(_contact).length > 0);
        require(license > 0);
        address _addr = msg.sender;
        pharmacyList.push(_addr);

        rindex = rindex + 1;
        isResearcher[_addr] = true;
        researchers[_addr].name = _name;
        researchers[_addr].contact = _contact;
        researchers[_addr].affiliation = _affiliation;
        researchers[_addr].addr = _addr;
        researchers[_addr].isApproved = false;

        if (Registered[_name][license] == true) {
            researchers[_addr].isApproved = true;
        }
    }

    //get researcher details using eth address
    function getResearcherByAddress(
        address _address
    )
        public
        view
        returns (
            uint256 id,
            string memory name,
            string memory contact,
            string memory affiliation,
            address addr,
            uint256 licenseno,
            bool isApproved
        )
    {
        researcher memory resch = researchers[_address];
        return (
            resch.id,
            resch.name,
            resch.contact,
            resch.affiliation,
            resch.addr,
            resch.licenseno,
            resch.isApproved
        );
    }*/

    //get the length of records of particular address
    function getrecordlist(address _addr) public view returns (uint256) {
        return (patients[_addr].records.length);
    }

    //get list of registered doctor's name
    function getRegisteredDoctorsList(
        uint256 id
    ) public view returns (uint256 license) {
        return registeredDoctorList[id];
    }

    //get list of registered laboratories name
    function getRegisteredLaboratoriesList(
        uint256 id
    ) public view returns (uint256 license) {
        return registeredLaboratoryList[id];
    }

    //get list of registered insurance companies name
    function getRegisteredInsuranceCompaniesList(
        uint256 id
    ) public view returns (uint256 license) {
        return registeredInsuranceCompanyList[id];
    }

    //get list of registered pharmacy name
    function getRegisteredPharmaciesList(
        uint256 id
    ) public view returns (uint256 license) {
        return registeredPharmacyList[id];
    }

    //get list of registered researchers name
   /*function getRegisteredResearchersList(
        uint256 id
    ) public view returns (uint256 license) {
        return registeredResearcherList[id];
    }*/

    //Add records of the patient
    function addRecord(
        string memory _dname,
        string memory _reason,
        string memory _visitedDate,
        string memory _ipfs,
        address addr
    ) public {
        require(isPatient[addr], "E");

        if (Authorized[addr][msg.sender] || msg.sender == addr) {
            patients[addr].records.push(
                Records(_dname, _reason, _visitedDate, _ipfs)
            );
        } else revert("E");
    }

    //get patients record
    function getPatientRecords(
        address _addr,
        uint256 _id
    )
        public
        view
        returns (
            string memory dname,
            string memory reason,
            string memory visitedDate,
            string memory ipfs
        )
    {
        require(isPatient[_addr], "E");
        if (Authorized[_addr][msg.sender] || msg.sender == _addr) {
            return (
                patients[_addr].records[_id].dname,
                patients[_addr].records[_id].reason,
                patients[_addr].records[_id].visitedDate,
                patients[_addr].records[_id].ipfs
            );
        } else revert("E");
    }

    //Give access to certain address
    function grantAccess(address _addr) public returns (bool success) {
        require(msg.sender != _addr, "U");
        require(isDoctor[_addr], "E");
        require(!Authorized[msg.sender][_addr], "A");
        Authorized[msg.sender][_addr] = true;
        return true;
    }

    //Revoke access of patient records from certain address
    function revoke_access(address _addr) public returns (bool success) {
        require(msg.sender != _addr, "U");
        require(Authorized[msg.sender][_addr], "U");
        Authorized[msg.sender][_addr] = false;
        return true;
    }

    function doctorLogin() public {
        if (
            Registered[doctors[msg.sender].name][
                doctors[msg.sender].licenseno
            ] == true
        ) {
            doctors[msg.sender].isApproved = true;
        }
    }

    function laboratoryLogin() public {
        if (
            Registered[laboratories[msg.sender].name][
                laboratories[msg.sender].licenseno
            ] == true
        ) {
            laboratories[msg.sender].isApproved = true;
        }
    }

    function insuranceCompanyLogin() public {
        if (
            Registered[insuranceCompanies[msg.sender].name][
                insuranceCompanies[msg.sender].licenseno
            ] == true
        ) {
            insuranceCompanies[msg.sender].isApproved = true;
        }
    }

    function pharmacyLogin() public {
        if (
            Registered[pharmacies[msg.sender].name][
                pharmacies[msg.sender].licenseno
            ] == true
        ) {
            pharmacies[msg.sender].isApproved = true;
        }
    }

    /*function researcherLogin() public {
        if (
            Registered[researchers[msg.sender].name][
                researchers[msg.sender].licenseno
            ] == true
        ) {
            researchers[msg.sender].isApproved = true;
        }
    }*/
}
