const lineReader = require('../utils/lineReader');

const tree = '#';
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

lineReader('3/input.txt').then(treeLines => {
  let treeProduct = 1;

  slopes.forEach(slope => {
    let treeBumps = 0;
    let treeIndex = 0;

    for (let i = 0; i < treeLines.length; i = i + slope[1]) {
      if (treeIndex >= treeLines[i].length)
        treeIndex = treeIndex % treeLines[i].length;

      if (treeLines[i].charAt(treeIndex) === tree) treeBumps++;

      treeIndex += slope[0];
    }

    treeProduct = treeProduct * treeBumps;
    console.log('bumped into a tree', treeBumps, 'times');
  });

  console.log('product of the tree bumps:', treeProduct);
});
