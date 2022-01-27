function createStructurer(container, containType) {
    const add = (object) => {
        if (object.title in container) return false;
        container[object.title] = object;
        return true;
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