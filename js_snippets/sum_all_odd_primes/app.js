/* ANCHOR Sum All Primes
Description:
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation
loop from 0 to num
if i is odd
  check if prime
    add it to global var

  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt



*/
function sumPrimes(num) {
  let sum = 2;
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };
  while (sum <= num) {
    for (let i = 1; i <= num; i += 2) {
      if (isPrime(i)) {
        console.log(i);
        sum += i;
      }
    }
  }
  return sum;
}

sumPrimes(10);

console.log(sumPrimes(10)); // should return a number.

console.log(sumPrimes(10)); // should return 17.

console.log(sumPrimes(977)); // should return 73156
