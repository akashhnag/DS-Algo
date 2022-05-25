//print odd numbers

function printOddNumbers(n) {
  if (n % 2 === 0) {
    console.log("Wrong input");
    return;
  }
  if (n > 10) return;
  console.log(n);
  printOddNumbers(n + 2)
}

printOddNumbers(2)