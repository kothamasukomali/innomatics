let orderAmount = parseInt(prompt("Enter order amount"));

function calculateFinalAmount(orderAmount) {
    if (orderAmount > 1000) {
        return `$${(0.2 * orderAmount).toFixed(2)}`;
    } else if (orderAmount > 500) {
        return `$${(0.1 * orderAmount).toFixed(2)}`; 
    } else if (orderAmount > 50) {
        return 'Free shipping';
    } else {
        return `$${(orderAmount + 10).toFixed(2)}`; 
    }
}

document.write(calculateFinalAmount(orderAmount));
