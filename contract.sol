// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentResume {

    struct Resume {
        string name;
        string branch;
        uint cgpa;
        string[] projectTitles;
        string[] positionsOfResponsibility;
    }

    mapping(uint => Resume) public resumes;
    uint[] public enrollments;

    function addOrUpdateResume(uint _enrollment, string memory _name, string memory _branch, uint _cgpa, string[] memory _projectTitles, string[] memory _positionsOfResponsibility) public {
        Resume storage resume = resumes[_enrollment];
        resume.name = _name;
        resume.branch = _branch;
        resume.cgpa = _cgpa;
        resume.projectTitles = _projectTitles;
        resume.positionsOfResponsibility = _positionsOfResponsibility;

        if (!isEnrollmentRegistered(_enrollment)) {
            enrollments.push(_enrollment);
        }
    }

    function getResume(uint _enrollment) public view returns (Resume memory) {
        return resumes[_enrollment];
    }

    function isEnrollmentRegistered(uint _enrollment) private view returns (bool) {
        for (uint i = 0; i < enrollments.length; i++) {
            if (enrollments[i] == _enrollment) {
                return true;
            }
        }
        return false;
    }
    mapping(string => uint[]) public companyShortlists;

    function shortlistCandidates(string memory companyName, uint minCgpa, string[] memory eligibleBranches) public {
        uint[] storage shortlist = companyShortlists[companyName];
        for (uint i = 0; i < enrollments.length; i++) {
            uint enrollment = enrollments[i];
            Resume memory student = resumes[enrollment];
            if (student.cgpa >= minCgpa && isBranchEligible(student.branch, eligibleBranches)) {
                shortlist.push(enrollment);
            }
        }
        companyShortlists[companyName] = shortlist;
    }

    function isBranchEligible(string memory branch, string[] memory eligibleBranches) private pure returns (bool) {
        for (uint i = 0; i < eligibleBranches.length; i++) {
            if (keccak256(bytes(branch)) == keccak256(bytes(eligibleBranches[i]))) {
                return true;
            }
        }
        return false;
    }
}
