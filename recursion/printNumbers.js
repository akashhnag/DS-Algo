//print natural numbers

function printNumbers(n) {
  if (n > 5) {
    return
  }
  console.log(n);
  printNumbers(n + 1)
}

printNumbers(1)