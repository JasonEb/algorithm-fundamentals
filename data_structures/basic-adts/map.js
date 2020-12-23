class Map {
    constructor() {
        this.list = []
    }

    deleteKey(key) {
        let newList = []
        this.list.forEach( (el) => {
            if (el[0] != key) {
                newList.push(el)
            }
        })
        this.list = newList
        return true
    }
    
    findKey(key) {
        let result = null
        this.list.forEach ( (el) => {
            if (el[0] == key) {
                result = el
                return
            }
        })
        return result 
    }

    get(key) {
        let result = this.findKey(key)
        if (result != null) { return result[1] }
        else { return null }
    }

    set(key, value) {
        this.list.push([key, value])
        //Make sure to check for uniqueness
        return true
    }
}

module.exports = Map