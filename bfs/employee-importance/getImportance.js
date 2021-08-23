/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    let queue = []

    let node = employees.find( el => el[0] == id)
    let importance = node[1]

    queue = queue.concat(node[2])

    while(queue.length > 0) {
        id = queue.shift()

        node = employees.find(el => el[0] == id)
        
        importance += node[1]

        queue = queue.concat(node[2])
    }

    
    return importance
};

exports.GetImportance = GetImportance