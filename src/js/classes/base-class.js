class BaseObject{
    
    constructor (title){
        this.title = title;
    }

    get title(){
        return this._title;
    }
    set title(title){
        if (title === "" || title == null) title = "Default title";
        this._title = title;
    }
    get domElement() {
        return this._domElement;
    }
    set domElement(domElement){
        this._domElement = domElement;
    }
    
    createDomElement(){ }
    cssClassNameToTitle() {
        return this.cssClassName.substring(1).replace(/-/g, ' ');
    }
    titleToCssClassName() {
        this.cssClassName = "c" + this.title.replace(/\W/g, "-");
        return this.cssClassName
    }
    resetDomElement() {
        this._domElement = this.createDomElement(this);
    }
}

export { BaseObject };