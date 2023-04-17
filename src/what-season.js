const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( springDate ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const seasons = {
    "12":"winter",
    "1":"winter",
    "2":"winter",
    "3":"spring",
    "4":"spring",
    "5":"spring",
    "6":"summer",
    "7":"summer",
    "8":"summer",
    "9":"autumn",
    "10":"autumn",
    "11":"autumn",
}
  if (!springDate) return "Unable to determine the time of year!";
  if (springDate instanceof Date && !isNaN(springDate.valueOf()) && (Object.entries(springDate).length===0)) {
      return seasons[springDate.getMonth()+1];
  } else {
      throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
