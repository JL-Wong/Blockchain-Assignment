var eth = document.getElementById("ether");

var livePrice = {
    "async" : true,
    "scroosDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",

    "method" : "GET",
    "header" : {}
}

$.ajax(livePrice).done(function(response){
    eth.innerHTML = response.ethereum.usd
});