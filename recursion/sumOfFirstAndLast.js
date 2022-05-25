//print sum of first and last using recursion
const n = 453;
let sum = n % 10;

function sumOfFirstAnadLast(n, sum, r) {
    if (n === 0) {
        console.log(r + sum);
        return;
    }
    sumOfFirstAnadLast(parseInt(n / 10), sum, n % 10)
}

sumOfFirstAnadLast(n, sum)