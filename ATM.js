let amount = parseInt(prompt("Enter amount"));
let enteredPin = parseInt(prompt("Enter Pin"));
let balance = 10000;
let Pin = 78900;

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    } 
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    } 
    if (amount > balance) {
        return "Insufficient Funds";
    } 
    return ` Remaining Balance: ${balance - amount}`;
}

document.write(atmWithdrawal(balance, amount, Pin, enteredPin));
