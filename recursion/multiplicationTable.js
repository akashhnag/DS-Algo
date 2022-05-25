//print multiplication table of a goven number

let c = 1;
function multiplicationTable(n, c) {
  if (c > 10) {
    return;
  }
  console.log(`${n}*${c}=${n * c}`);
  multiplicationTable(n, ++c)
}

multiplicationTable(4, c)