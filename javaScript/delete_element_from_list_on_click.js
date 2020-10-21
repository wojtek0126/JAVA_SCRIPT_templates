//list of elements is base and target is a button. This is for propagation, when just button is selected to click,
//it will bug on last element as null

//if delete button is within list element
const deleteElemEnabled = (listOfElements, classOfDeleteButton, elementToDelete) => {
    listOfElements.addEventListener('click', function (e) {
        const elements = document.querySelector(elementToDelete);
        const target = e.target;
        if (target.className == classOfDeleteButton ) {
            const li = target.parentElement;
            listOfElements.removeChild(li);        }
        if(elements.length < 2) {
            i = 0;
        }
    })
}

//if delete button is outside, deleting last element in this case, it is example not function
deleteLastElBtn.addEventListener("click", () => {
    let listElems = document.getElementsByClassName('list-group-item');
    let lastElemOfList = listElems[listElems.length - 1];
    if (listElems.length > 0) listElems[listElems.length - 1].remove();
});