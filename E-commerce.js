orderAmount=parseInt("enter orderAmount ")
couponCode=prompt("enter couponCode")
const shipping=20;
let temp=orderAmount;
let discount=0;
function applyCoupon(orderAmount, couponCode){
    if(couponCode==="DISCOUNT10" && orderAmount>500){
       discount= orderAmount*0.10;
    temp-=discount;
    }

   else if(couponCode==="FREESHIP" && orderAmount>200){
       temp+=0;
   }
   else{
    temp+=shipping;
   }
   return temp.toFixed(2);

}
document.write(applyCoupon(orderAmount, couponCode));