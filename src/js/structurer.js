function createStructurer(container, containType) {
    const add = (object) => {
        (object.title in container) || (container[object.title] = object)
    }

    const remove = (object) => {
        delete container[object.title];
    }

    const getObjectByTitle = (name) => {
        if (name in container) return container[name];
        return false;
    }

    return {
        add,
        remove,
        getObjectByTitle,

        get container() {
            return container;
        },

        get containType() {
            return containType;
        }
    };
}

export { createStructurer };