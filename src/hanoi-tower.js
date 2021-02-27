const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  // throw new CustomError('Not implemented');
  let ob = {};
  let turns  = (Math.pow(2,disksNumber)-1);
  let seconds = Math.floor(turns/turnsSpeed * 3600); 
  ob.turns = turns;
  ob.seconds = seconds;
  return ob;
};
