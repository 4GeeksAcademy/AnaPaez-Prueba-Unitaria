const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    valueInDollar = oneEuroIs.USD;
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    valueInYen = oneEuroIs.JPY
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };