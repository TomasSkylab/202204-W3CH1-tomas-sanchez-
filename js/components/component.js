
class Component {
    element;

    constructor(parentElement, className, tag){
        this.element = document.createElement(tag);
        this.element.className = className;
        parentElement.append(this.element);
    }
}


export default Component;
