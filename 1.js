function calculateRentalCost(days) {
    let costPerDay = 40;
   let rentalCost;
  
   if (days <3){
      rentalCost = days * costPerDay;
   } else if (days < 7) {
      rentalCost = days * costPerDay - 20;
   } else {
      rentalCost  = days * costPerDay - 50;
   }

   console.log(rentalCost);
   return rentalCost;
  }

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);