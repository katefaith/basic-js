module.exports = function getSeason(date) {
  if (typeof date == "undefined") {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
  }

  let month = date.getMonth();
  if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else if (month >= 8 && month <= 10) {
    season = 'fall';
  } else {
    season = 'winter';
  } 

  return season;
};
