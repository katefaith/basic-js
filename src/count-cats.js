module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  matrix.forEach(element => {
    element.forEach(elem => {
      if (elem === "^^") {
        numberOfCats++;
      }
    });
  });
  return numberOfCats;
};