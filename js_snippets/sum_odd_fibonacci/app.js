function sumFibs(num) {
  let previousValue = 0;
  let currentValue = 1;
  let result = 1;
  while (currentValue <= num) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    if (currentValue % 2 && currentValue <= num) {
      result += currentValue;
    }
  }
  return result;
}

console.log(sumFibs(75025));
