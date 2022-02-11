function createBaseObject(type, title, createLiElementFunction) {
    function changeTitle(newTitle) {
        if (newTitle === "" || newTitle == null) newTitle = "Default title"
        title = newTitle
    }
    changeTitle(title)
    return {
        type,
        className: "",
        changeTitle,
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
        set title(newTitle) {
            title = newTitle
            if (newTitle === "" || newTitle == null) title = "Default title"
        }
    }
}

export { createBaseObject }