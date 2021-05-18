/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1) { return x }

    let l = 1, r = x
    let m = 0
    let floor = 1

    while (l <= r) {
        m = l + (r - l) / 2
        m = Math.floor(m)

        if( m*m == x) {
            return m
        } else if (m*m < x) {
            l = m + 1
            floor = m
        } else {
            r = m - 1
        }
    }

    return floor
};

exports.mySqrt = mySqrt

var OptimalmySqrt = function (x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (middle * middle > x) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return right;
};