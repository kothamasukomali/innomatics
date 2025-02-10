function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = classType === "Business" ? 200 : classType === "First" ? 500 : 0;
    let luggageCharge = luggageWeight > 20 ? Math.ceil((luggageWeight - 20) / 10) * 50 : 0;
    
    let totalFare = baseFare + classCharge + luggageCharge;
    
    if (isStudent) {
        totalFare *= 0.85; 
    } else if (isSenior) {
        totalFare *= 0.90; 
    }
    
    return totalFare.toFixed(2);
}

console.log(calculateFlightFare("Economy", 25, true, false)); 
console.log(calculateFlightFare("Business", 30, false, true)); 
console.log(calculateFlightFare("First", 15, false, false)); 
