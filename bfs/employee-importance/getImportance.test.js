const { GetImportance } = require("./getImportance")

test("example 1", () => {
    let employees = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], id = 1
    let output = 11

    expect(GetImportance(employees, id)).toEqual(output)
})

test("example 2", () => {
    let employees = [[1, 2, [5]], [5, -3, []]], id = 5
    let output = -3

    expect(GetImportance(employees, id)).toEqual(output)
})