module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          break;
        case '--discard-prev':
          if (res.length) {
          	res.pop();
          }
          break;
        case '--double-next':
          if (i < arr.length - 1) {
          	res.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (i) {
          	res.push(arr[i - 1]);
          }
          break;
        default:
        	res.push(arr[i]);
      }
    }
    
    return res;
  } else {
    throw Error;
  }
};