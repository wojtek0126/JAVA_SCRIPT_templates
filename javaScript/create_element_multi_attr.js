const newElement = (tag, attributes) => {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

const newEl = newElement('div', {class: 'element'});