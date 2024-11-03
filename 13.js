// Using for loop
// let num = 10;
// let sum = 1;
// for (let i = num; i >= 1; i--) {
//   sum *= i;
// }

function fact(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i;
    }
    return sum;
  }
}

console.log(fact(5));
