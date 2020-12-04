const lineReader = require('../utils/lineReader');

lineReader('2/input.txt').then(array => {
  array.forEach(item => {
    const sections = item.split(' ');
    const minMax = sections[0].split('-');
    const passwordLetter = sections[1].charAt(0);
    const password = sections[2];

    const occurences = password.indexOf(passwordLetter);
    console.log('password:', password);
    console.log('index of password letter:', occurences);
  });
});
