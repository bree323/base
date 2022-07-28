/*
 * @Date: 2022-07-27 16:35:53
 * @Description: ramda - array
 */
const R = require("ramda");

const map = (arr) => {
  const double = (x) => x * 2;
  return R.map(double, arr);
};

module.exports = {
  map,
};
