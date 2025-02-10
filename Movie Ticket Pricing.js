age=prompt("Enter age");
showTime=parseInt("Enter show time");
function calculateTicketPrice(age, showTime) {
    const standardPrice = 12;
    let discount = 0;
    
    if (showTime < 17) {  
        discount = 0.20;
    }
    
    if (age > 60) { 
        discount = Math.max(discount, 0.30);
    } else if (age < 12) { 
        discount = Math.max(discount, 0.40);
    }
    
    const finalPrice = standardPrice * (1 - discount);
    return finalPrice.toFixed(2);
}
document.write(calculateTicketPrice(age,showTime));