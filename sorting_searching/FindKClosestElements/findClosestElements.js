/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let idx = bsearch(arr, x)
    let a = idx - 1, b = a + 1
    
    while( b - a - 1 < k) {

        if (a <= -1) { b += 1; continue }

        // let condition1 = Math.abs(arr[a] - x) < Math.abs(arr[b] - x)
        // let condition2 = Math.abs(arr[a] - x) < Math.abs(arr[b] - x) && arr[a] < arr[b]
        let condition1 = b == arr.length
        let condition2 = Math.abs(arr[a] - x) <= Math.abs(arr[b] - x)
        let aCloserThanB = condition1 || condition2
        if(aCloserThanB) {
            a -= 1
        } else {
            b += 1
        }
    }

    let result = []
    for(let i = a + 1; i < b; i++){ result.push(arr[i])}
    return result
};

const bsearch = (arr, x) => {
    let l = 0, r = arr.length 
    let m = -1

    while(l < r) {
        m = Math.trunc(l + (r - l)/2)

        if (arr[m] >= x) {
            r = m
        } else {
            l = m + 1
        }
    }

    return l 
}

exports.findClosestElements = findClosestElements