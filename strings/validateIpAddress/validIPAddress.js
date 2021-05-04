/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    //iterate through the string
    //keep two pointers
    //when you see the period delimiter
    //examine the octet
    let a = 0
    let b = 0

    for(i = 0; i < IP.length; i++) {
        let c = IP[i]
        if (c == ".") {
            //set two pointers
            b = i - 1



            let octet = IP.substr(a, b) 
            let number = parseInt(octet)

            if ( isNaN(number)) { return "Neither" }

            if (number > 255 && number < 0) {
                return "Neither"
            }


        }
    }
    return "IPv4"
};

var validIPAddressNaive = function(IP) {
    let octets = IP.split(".")
    if (octets > 4) { return "Neither" }
    //iterate through all octets 
    //cast it to integer
    //then compare it to a range
    
    for (let i = 0; i < octets.length; i++) {
        let octet = octets[i]
        let number = parseInt(octet)
        if (number > 255 && number < 0) {
            return "Neither"
        }
    }

    return "IPv4"
};

exports.validIPAddress = validIPAddress