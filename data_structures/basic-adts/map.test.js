const Map = require('./map')

describe('Map', ()=> {
    let map = new Map()

    expect(map).toBeTruthy()

    it('sets keys', () => {
        expect(map.set("a", "1")).toEqual(True)
        expect(map.set("b", "2")).toEqual(True)
        expect(map.set("ab", "3")).toEqual(True)
    })

    it('gets keys', () => {
        expect(map.get("a")).toEqual("1")
        expect(map.get("b")).toEqual("2")
        expect(map.get("ab")).toEqual("3")
    })

    it('deletes keys', () => {
        expect(map.delete("a")).toEqual(True)
        expect(map.get("a")).toEqual(null)
    })
})