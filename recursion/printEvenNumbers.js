function printEvenNumbers(n){
  if(n%2!==0){
    console.log("Wrong input");
    return;
  }
  if(n>10) return;
  console.log(n);
  printEvenNumbers(n+2)
}

printEvenNumbers(1)