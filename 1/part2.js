const numbers = require('./input');
// const numbers = [1721, 979, 366, 299, 675, 1456];

// numbers.sort((a, b) => a - b);

let num1, num2, num3;

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    for (let k = i + 2; k < numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 2020) {
        num1 = numbers[i];
        num2 = numbers[j];
        num3 = numbers[k];
        break;
      }
    }
  }
}

console.log(num1, num2, num3);
console.log(num1 * num2 * num3);
