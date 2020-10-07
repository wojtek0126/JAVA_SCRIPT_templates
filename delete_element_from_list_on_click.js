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

