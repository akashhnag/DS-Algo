function printNumbersInReverse(n){
  if(n===0) return;
  console.log(n);
  printNumbersInReverse(n-1)
}

printNumbersInReverse(7)