/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    //initialize map
    let heightsMap = []
    for(let i = 0; i < 101; i++){
        heightsMap[i] = 0
    }

    //populate map
    heights.forEach( (height) => {
        heightsMap[height]++  
    })

    let count = 0
    let hdx = 1

    heights.forEach( (height) => {
        while(heightsMap[hdx] == 0){
            hdx++
        }

        if (hdx != height) {
            count++
        }

        heightsMap[hdx]--
    })

    return count
}

exports.heightChecker = heightChecker