/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let adx = a.length - 1
    let bdx = b.length - 1
    let result = ''
    let carry = 0
    while(adx >= 0 || bdx >= 0) {
        let aNum = parseInt(a[adx]) || 0
        let bNum = parseInt(b[bdx]) || 0
        let value = aNum + bNum + carry
        carry = 0
        if (value == 0 || value == 1) {
            result += value
        } else if (value > 1) {
            carry = 1
            result += value % 2 
        }

        adx--
        bdx--
    }

    if (carry == 1) {
        result += "1"
    }

    return result.split('').reverse().join('')
};

exports.addBinary = addBinary