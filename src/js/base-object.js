function createBaseObject(type, title, icon, createLiElementFunction) {
    let className = ""

    function titleToClassName() {
        this.className = "c" + this.title.replace(/\W/g, "-")
        return this.className
    }

    function classNameToTitle() {
        return this.className.substring(1).replace(/-/g, ' ')
    }
    return {

        get icon() {
            return icon
        },

        get type() {
            return type
        },

        get title() {
            return title
        },

        set title(newTitle) {
            title = newTitle
        },

        get liElement() {
            return createLiElementFunction(this)
        },

        classNameToTitle,
        titleToClassName,
    }
}

export {
    createBaseObject
}