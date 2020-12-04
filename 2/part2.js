const lineReader = require('../utils/lineReader');

lineReader('2/input.txt').then(array => {
  let passNum = 0;
  
  array.forEach(item => {
    const sections = item.split(' ');
    const positions = sections[0].split('-').map(item => parseInt(item));
    const passwordLetter = sections[1].charAt(0);
    const password = sections[2];
    let occurences = 0;

    if (password.charAt(positions[0] - 1) === passwordLetter) occurences++;
    if (password.charAt(positions[1] - 1) === passwordLetter) occurences++;

    if (occurences === 1) passNum++;
  });

  console.log('valid passwords:', passNum);
});
