var ethers = require('ethers');
//let provider = ethers.getDefaultProvider();
let etherscanProvider = new ethers.providers.EtherscanProvider();
let newPrice = 0;
let oldPrice = 0

function getPrice() { 
    etherscanProvider.getEtherPrice().then(function(price) {
        console.log("Ether price in USD: " + price);
        oldPrice = price;
    });
       await etherscanProvider.getEtherPrice().then(function(price) {
        newPrice = price;
            console.log("The % change in ETH over the past 60s: " + (newPrice - oldPrice) / oldPrice*100 + "%");
        });
}
getPrice()
setInterval(getPrice, 60000)





