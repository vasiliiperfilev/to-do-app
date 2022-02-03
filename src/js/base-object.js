function createBaseObject(type, title, icon, createLiElementFunction){

    const titleToClassName = () => {
        return "c" + title.replace(/\W/g, "-");
    }

    return {

        get icon() {
            return icon;
        },

        get type() {
            return type;
        },

        get title() {
            return title;
        },

        set title(newTitle){
            title = newTitle;
        },

        get titleToClassName() {
            return titleToClassName();
        },

        get liElement() {
            return createLiElementFunction(this);
        }
    };
}

export { createBaseObject };