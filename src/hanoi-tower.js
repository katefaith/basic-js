module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {};
  res.turns = Math.pow(2, disksNumber) - 1;
  res.seconds = res.turns / (turnsSpeed / 3600);

  return res;
}