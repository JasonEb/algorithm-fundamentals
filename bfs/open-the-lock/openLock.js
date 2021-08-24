/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    let dends = new Set(deadends)
    let queue = [["0000", 0]]
    let seen = new Set(["0000"])
    while(queue.length > 0) {
        let [code, turns] = queue.shift()
        if (code === target ){
              return turns
        }

        if (dends.has(code)){ continue }

        turns++
        for(let i = 0; i < code.length; i++){
            for(let j = -1; j <= 1; j += 2){
                let num = parseInt(code[i])
                let new_num = "" + (((num + j) + 10) % 10)
                let nei = code.slice(0, i) + new_num + code.slice(i + 1, 4)
                if( !seen.has(nei)) {
                    seen.add(nei)
                    queue.push([nei, turns])
                }
            }

        }


    }
    return -1
};

exports.openLock = openLock