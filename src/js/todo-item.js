function createTodoItem(title = "Default title", description = "", date = "", priority = 0) {

    return { 
        
        get title() {
            return title;
        },

        get description() {
            return description;
        },

        get date() {
            return date;
        },

        get priority() {
            return priority;
        },

        get allData() {
            return { title, description, date, priority };
        },

        set title(newTitle) {
            title = newTitle;
        },

        set description(newDescription) {
            description = newDescription;
        },

        set date(newDate) {
            date = newDate;
        },
        
        set priority(newPriority) {
            priority = newPriority;
        }

    }

}

export { createTodoItem }