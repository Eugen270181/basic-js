const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //let rezult=0;
  //for(i=0;i<matrix.length;i++) rezult+=matrix[i].some(even => even==="^^");
  //return rezult;
  return matrix
  .join(',')
  .split(',')
  .filter(item => item === "^^").length;
}

module.exports = {
  countCats
};
