// Add User Input 

// Test Input 

// Add Warning/Validations 

const TAX_RATE = 0.25;
const PHONE_PRICE = 99.99

var accessory = 9.99;

var spending_limit = 200;

var bankBalance = 600;

var saleTotal = 0;

// buy phone  

function buyPhone(salePrice) {
  return bankBalance - salePrice;
}

function calculatePrice(phonePrice) {
  return saleTotal + phonePrice;
}

function buyAccessory(accessPrice) {
  return saleTotal + accessPrice;
}

function updateBankBalance(transaction) {
  return bankBalance - transaction;
}

function startSale(phonePrice, access) {
   console.log('starting balance', bankBalance)
   
   while (bankBalance >= phonePrice) { // keep buying
     saleTotal = calculatePrice(phonePrice);
     console.log('Total :', saleTotal.toFixed(2));
     bankBalance = buyPhone(saleTotal); 
     console.log('bank balance', bankBalance.toFixed(2));
     
     if(saleTotal < spending_limit) {
       bankBalance = bankBalance - buyAccessory(access);
     } else {
       console.log('after access', bankBalance.toFixed(2));
     }
   } 
 
}

startSale(PHONE_PRICE, accessory);

