function createDomFunctions(){
    function createDomElement(name, classes){
        const element = document.createElement(name)
        element.classList.add(...classes)
        return element
    }

    function createDiv(classes){
        const div = createDomElement("div", classes)
        return div
    }

    function createImg(classes, src, height, width){
        const img = createDomElement("img", classes)
        img.height = height
        img.width = width
        img.src = src
        return img
    }

    function createInput(classes, name, type){
        const input = createDomElement("input", classes)
        input.type = type
        input.name = name
        return input
    }

    function createBtn(classes, textContent){
        const btn = createDomElement("button", classes)
        const span = document.createElement("span")
        span.textContent = textContent
        btn.appendChild(span)
        return btn
    }

    function collectInput(form){
        const parameters = {}
        const inputs = form.querySelectorAll("input")
        inputs.forEach(input => {
            if (input.type == "text") input.value = input.value.replace(/[^a-z\d]/, ' ')
            parameters[input.name] = input.value
        })

        return parameters
    }

    function cleanInput(form){
        const inputs = form.querySelectorAll("input")
        inputs.forEach(input => {
            input.value = ""
        })
    }


    function showElement(element){
        element.classList.remove("hidden")
        element.classList.add("active")
    }

    function hideElement(element){
        element.classList.remove("active")
        element.classList.add("hidden")
    }

    function replaceElement(elemToShow, elemToHide) {
        showElement(elemToShow)
        hideElement(elemToHide)
    }

    return {
        createDiv,
        createBtn,
        createImg,
        createInput,
        collectInput,
        replaceElement,
        hideElement,
        cleanInput,
    }
}

export { createDomFunctions }