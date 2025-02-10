function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (wantsDietPlan) {
        return "VIP ($80/month)";
    } else if (wantsTrainer) {
        return "Premium ($50/month)";
    } else {
        return "Basic ($20/month)";
    }
}
console.log(choosePlan("Basic", false, false)); 
console.log(choosePlan("Premium", true, false)); 
console.log(choosePlan("VIP", true, true)); 