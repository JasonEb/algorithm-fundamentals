const Map = require('./map')

describe('Map', ()=> {
    let map = new Map()

    expect(map).toBeTruthy()

    it('sets keys', () => {
        expect(map.set("a", "1")).toEqual(true)
        expect(map.set("b", "2")).toEqual(true)
        expect(map.set("ab", "3")).toEqual(true)

        //ToDo: check for uniqueness
    })

    it('finds keys', () => {
        expect(map.findKey("a")).toEqual(["a", "1"])
        expect(map.findKey("b")).toEqual(["b","2"])
        expect(map.findKey("ab")).toEqual(["ab","3"])
        expect(map.findKey("abc")).toEqual(null)
        //ToDo: check for uniqueness
    })

    it('gets keys', () => {
        expect(map.get("a")).toEqual("1")
        expect(map.get("b")).toEqual("2")
        expect(map.get("ab")).toEqual("3")
    })

    it('deletes keys', () => {
        expect(map.deleteKey("a")).toEqual(true)
        expect(map.get("a")).toEqual(null)
    })
})