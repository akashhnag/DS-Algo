// print first and last digit of a number
const n = 1324;
console.log("last digit: ", n % 10);

function firstAndLast(n, r) {
    if (n === 0) {
        console.log("first digit: ", r);
        return;
    }
    firstAndLast(parseInt(n / 10), n % 10)
}

firstAndLast(n)