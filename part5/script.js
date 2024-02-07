var stocks = {
    "삼성전자": {
        price: 20000,
        amount: 2
    },
    "아마존": {
        price: 30000,
        amount: 3
    },
    "애플": {
        price: 40000,
        amount: 4
    },
};

var stocksPrice = 0;

$(document).ready(function() {
    // var stocksPrice = stocks["삼성전자"]["price"] * stocks["삼성전자"]["amount"] + 
    // stocks["아마존"]["price"] * stocks["아마존"]["amount"] + 
    // stocks["애플"]["price"] * stocks["애플"]["amount"];

    for(var event in stocks) {
        var stock = stocks[event];

        stocksPrice = stocksPrice + stock["price"] * stock["amount"];
    }
    
    console.log(stocksPrice);

});