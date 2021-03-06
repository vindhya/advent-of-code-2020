const lineReader = require('../utils/lineReader');

lineReader('2/input.txt').then(array => {
  let passNum = 0;
  
  array.forEach(item => {
    const sections = item.split(' ');
    const minMax = sections[0].split('-').map(item => parseInt(item));
    const passwordLetter = sections[1].charAt(0);
    const password = sections[2];
    let occurences = 0;

    for (let c of password) {
      if (c === passwordLetter) occurences++;
    }

    if (occurences >= minMax[0] && occurences <= minMax[1]) passNum++;
  });

  console.log('valid passwords:', passNum);
});
