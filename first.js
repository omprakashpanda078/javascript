let price = [250,645,300,900,50];

// formula discount = price/10 finalPrice = discount - offer
for(let i=0; i<price.length; i++){  
    let currPrice = price[i];
    let discount = currPrice/10;
    let finalPrice = currPrice - discount;
    // updating finalPrice at each respective index
    price[i]=finalPrice;
}
console.log(price);