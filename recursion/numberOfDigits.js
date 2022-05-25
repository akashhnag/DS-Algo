//count number of digits in a number
let c = 0
function numberOfDigits(n, c) {
  if (n <= 0) {
    console.log(c);
    return
  }
  c++;
  numberOfDigits(parseInt(n / 10), c)
}

numberOfDigits(234234, c)

