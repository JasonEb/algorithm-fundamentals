/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if ( strs.length < 1) { return "" }
    //assume a prefix of first letter we see
    let prefix = ""
    let max = ""
    let min = Number.POSITIVE_INFINITY

    //choose the smallest length
    debugger
    for(let i = 0; i < strs.length; i++) {
        min = Math.min(min, strs[i].length)
    }


    let i = 0 
    while(i < min) {
        // iterate through all strs
        // checking if the current character are equal 
        // if true, add to prefix
        // then re-evaluate largest prefix 


        let currentChar = strs[0][i]
        let common = true
        strs.forEach( (str) => {
            if (str[i] != currentChar) {
                common = false
            }
        })

        if (common) {
            prefix += currentChar
        } 
        
        if (prefix.length > max.length) {
            max = prefix 
        }

        if (!common) {
            return max
        }

        i++
    }

    return max
};

exports.longestCommonPrefix = longestCommonPrefix