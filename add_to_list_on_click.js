// create new list element with clone and delete button


const newElement = (tag, attributes) => {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

const elementNumber = document.querySelector('.nr');
// albo
let i = 1;  // lub let i = (elementNumber.innerText) jeżeli chcemy zwiększać numer z HTMLa

const addElementEnabled = () => {
    addButton.addEventListener('click', function () {
        const btn = addButton;
        btn.style.background = 'gold';
        setTimeout(function () {
            btn.style.background = '#3689DB'; //styling button to change color for a second on click
        }, 100);
        const newEl = newElement('div', {class: 'element'});
        const newElText = newElement('h3', {class: 'element-title'});
        const newElNumber = newElement('span', {class: 'nr'});
        const newElCloneBtn = newElement('button', {class: 'clone'});
        const newElTrashBtn = newElement('button', {class: 'delete'});
        newElText.innerText = 'Element numer';  //tekst w elemencie
        newElNumber.innerText =` ${i+1}`;  // numer w porządkuw elemencie
        list.appendChild(newEl);  // list to lista
        newEl.appendChild(newElText);
        newElText.appendChild(newElNumber);
        newEl.appendChild(newElCloneBtn);
        newEl.appendChild(newElTrashBtn);
        i++;
    })
}