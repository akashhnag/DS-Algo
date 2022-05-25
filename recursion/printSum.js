//print sum of n natural numbers

let a = 1;
let sum = 0;
function printSum(a, n, sum) {
  if (a > n) {
    console.log(sum);
    return;
  }
  sum += a;
  printSum(a + 1, n, sum)

}

printSum(a, 5, sum)