// let factorial = 1;
// for(let i = 5; i >= 1; i--){
//     factorial = factorial * 1;
// }
// console.log(factorial);

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}

const result = factorial(5);

/* 
    5 * factoria(4)
    5 * 4 * factoria(3)
    5 * 4 * 3 factoria(2)
    5 * 4 * 3 * 2 factoria(1)
    5 * 4 * 3 * 2 * 1
*/