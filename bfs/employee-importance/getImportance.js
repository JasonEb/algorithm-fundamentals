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

    let employee = employees.find( el => el[0] == id)
    let importance = employee[1]

    queue = queue.concat(employee[2])

    while(queue.length > 0) {
        id = queue.shift()

        employee = employees.find(el => el[0] == id)
        
        importance += employee[1]

        queue = queue.concat(employee[2])
    }

    
    return importance
};

exports.GetImportance = GetImportance