let age = parseInt(prompt("Enter age"));
let experience = parseInt(prompt("Enter experience"));
let qualification = prompt("Enter qualification");

function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return "Eligible";
    } else {
        return "Not eligible";
    }
}

document.write(isEligibleForJob(age, experience, qualification));