function createListObject(type, title, icon){

    const noSpaceTitle = () => {
        return title.replace(/\s/g, '-')
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

        noSpaceTitle
    };
}

export { createListObject };