//list of elements is base and target is a button. This is for propagation, when just button is selected to click,
//it will bug on last element as null

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

