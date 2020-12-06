const lineReader = require('../utils/lineReader');

const tree = '#';
const maxTreeIndex = 30;

lineReader('3/input.txt').then(treeLines => {
  let treeBumps = 0;
  let treeIndex = 3;

  for (let i = 1; i < treeLines.length; i++) {
    if (treeLines[i].charAt(treeIndex) === tree) treeBumps++;

    if (treeIndex + 3 > maxTreeIndex) {
      const newTreeIndex = treeIndex + 2 - maxTreeIndex;
      treeIndex = newTreeIndex;
    } else {
      treeIndex = treeIndex + 3;
    }
  }

  console.log('bumped into a tree', treeBumps, 'times');
});
