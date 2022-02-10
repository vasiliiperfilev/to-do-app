function createBaseObject(type, title, createLiElementFunction) {
    if (title === "") title = "Default title"
    return {
        type,
        className: "",
        classNameToTitle: function () {
            return this.className.substring(1).replace(/-/g, ' ')
        },
        titleToClassName: function () {
            this.className = "c" + this.title.replace(/\W/g, "-")
            return this.className
        },
        get liElement() {
            return createLiElementFunction(this)
        },
        get title(){
            return title
        },
        set title(title) {
            this.title = title
            if (title === "") this.title = "Default title"
        }
    }
}

export { createBaseObject }