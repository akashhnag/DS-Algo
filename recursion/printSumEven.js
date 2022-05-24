let a=4;
let sum=0;

function printSumEven(a,n,sum){
  if(a%2!==0){
    console.log(("Invalid initial value. Should be an even number."));
    return;
  }
  if(a>n){
    console.log(sum);
    return;
  }
  sum+=a;
  printSumEven(a+2,n,sum);
}

printSumEven(a,5,sum)