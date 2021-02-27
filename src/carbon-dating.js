const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  if(typeof sampleActivity!= "string" || sampleActivity> MODERN_ACTIVITY || sampleActivity<0){
    return false;
  }
  const activ = parseFloat(sampleActivity);
  if(!activ){
    return false;
  }
  return Math.ceil(((Math.log(MODERN_ACTIVITY / activ)) / (Math.log(2)) * HALF_LIFE_PERIOD))
};
