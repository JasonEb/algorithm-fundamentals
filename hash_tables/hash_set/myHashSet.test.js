const { MyHashSet } = require('./myHashSet')

test('example 1', () => {
    let myHashSet = new MyHashSet()
    myHashSet.add(1)
    expect(myHashSet.set).toEqual([1])      // set = [1]
    // myHashSet.add(2);      // set = [1, 2]
    // myHashSet.contains(1); // return True
    // myHashSet.contains(3); // return False, (not found)
    // myHashSet.add(2);      // set = [1, 2]
    // myHashSet.contains(2); // return True
    // myHashSet.remove(2);   // set = [1]
    // myHashSet.contains(2); // return False, (already removed)
})