//print sum of odd numbers

let a = 1;
let sum = 0;

function printSumOdd(a, n, sum) {
  if (a % 2 === 0) {
    console.log(("Invalid initial value. Should be an odd number."));
    return;
  }
  if (a > n) {
    console.log(sum);
    return;
  }
  sum += a;
  printSumOdd(a + 2, n, sum);
}

printSumOdd(a, 5, sum)