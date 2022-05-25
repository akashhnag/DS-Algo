//print alphabets from a to z

function printAlphabets(n) {
  if (n > 90) return
  console.log(String.fromCharCode(n));
  printAlphabets(n + 1)
}

printAlphabets(65)