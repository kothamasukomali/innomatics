let units=parseInt(prompt("e ter units"));
let timeOfDay=parseInt(prompt("enter timeOfDay"));
let rate=0;
function calculateElectricityBill(units, timeOfDay){
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }
    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.10; 
    }
    
    return (units * rate).toFixed(2);
}
document.write(calculateElectricityBill(units, timeOfDay));