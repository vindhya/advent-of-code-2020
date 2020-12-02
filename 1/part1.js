const numbers = require('./input');

let num1, num2;

// numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === 2020) {
      num1 = numbers[i];
      num2 = numbers[j];
      break;
    }
  }
}

console.log(num1, num2);
console.log(num1 * num2);
