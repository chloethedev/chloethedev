var ethers = require('ethers');
//let provider = ethers.getDefaultProvider();
let etherscanProvider = new ethers.providers.EtherscanProvider();
let price = 0;
let newPrice = 0;

function getPrice() { 
    etherscanProvider.getEtherPrice().then(function(price) {
        console.log("Ether price in USD: " + price);
        newPrice = price;
        console.log("The % change in ETH over the past 60s: " + (price - newPrice)/ price);
    });
}
getPrice()

setInterval(getPrice, 10000)



