const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);

  if (typeof sampleActivity != 'string' || isNaN(sample) || sample <= 0 || sample > MODERN_ACTIVITY) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log( MODERN_ACTIVITY / sample ) / k);
};
