pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract InsuranceContract is ERC721 {
    struct Criteria {
        uint minAge;
        uint minLicenseAge;
        uint maxCarAge;
        uint maxCarValue;
        bool hasParking;
        uint minScore;
    }

    Criteria public insurerCriteria;
    uint public currentId;
    address public insurerAddress;

    mapping(uint => bool) public eligibilityMapping;

    constructor(
        uint _minAge,
        uint _minLicenseAge,
        uint _maxCarAge,
        uint _maxCarValue,
        bool _hasParking,
        uint _minScore
    ) ERC721("Car Insurance Contract", "CIC") {
        insurerCriteria = Criteria(_minAge, _minLicenseAge, _maxCarAge, _maxCarValue, _hasParking, _minScore);
        currentId = 0;
        insurerAddress = msg.sender;
    }

    function proveEligibility(
        uint _age,
        uint _licenseAge,
        uint _carAge,
        uint _carValue,
        bool _hasParking,
        uint _score
    ) public returns (uint) {
        require(_age >= insurerCriteria.minAge, "Minimum age requirement not met");
        require(_licenseAge >= insurerCriteria.minLicenseAge, "Minimum license age requirement not met");
        require(_carAge <= insurerCriteria.maxCarAge, "Maximum car age requirement exceeded");
        require(_carValue <= insurerCriteria.maxCarValue, "Maximum car value requirement exceeded");
        require(_hasParking == insurerCriteria.hasParking, "Parking requirement not met");
        require(_score > insurerCriteria.minScore, "Minimum score requirement not met");

        uint id = currentId;
        _safeMint(msg.sender, id);
        eligibilityMapping[id] = true;
        currentId++;
        return id;
    }

    function verifyEligibility(uint _id) public view returns (bool) {
        require(msg.sender == insurerAddress, "Only the insurer can verify the eligibility");
        return eligibilityMapping[_id];
    }
}
