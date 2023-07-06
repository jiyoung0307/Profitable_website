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

$(document).ready(function() {
    var stocksPrice = stocks["아마존"]["price"] * stocks["아마존"]["amount"] + 
    stocks
    
    console.log(stocksPrice);

});