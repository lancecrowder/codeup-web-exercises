// var anyNumber  = prompt("Pick a Number, any Number!");
//
// function showMultiplicationTable(anyNumber){
//     parseFloat(anyNumber);
//     for (var i = 1; i <= 10; i++){
//         console.log((anyNumber) +" * "+(i)+" = "+ (anyNumber*i))
//     }
// }
//
// showMultiplicationTable(anyNumber);


function isOdd(randomNumber) {
    if (randomNumber % 2 === 0) {
        return " is even";
    } else {
        return " is odd";
    }
}

for (i=1; i<=10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    console.log(randomNumber + isOdd(randomNumber));
}