function createStructurer(containType) {
    const container = {}
    function add(object){
        if (object.title in container) return false
        container[object.title] = object
        return true
    }
    function remove(object){
        delete this.container[object.title]
    }
    return {
        add,
        remove,
        get container() {
            return container
        },
        get containType() {
            return containType
        }
    }
}

export { createStructurer }