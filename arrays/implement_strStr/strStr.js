/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle.length == 0) { return 0 }
    if (haystack.length == 0) { return -1 }
    let edx = haystack.length - needle.length
    let result = -1
    for(let i = 0; i < haystack.length; i++) {
        tmp = haystack.substr(i, needle.length)
        if (tmp == needle) { return i}
    }
    
    return -1
};

exports.strStr = strStr