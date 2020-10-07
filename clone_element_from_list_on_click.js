const cloneElementEnabled = (listOfElements, classOfCloneButton) => {
    listOfElements.addEventListener('click', function (e) {
        const target = e.target;
        if (target.className == classOfCloneButton ) {
            const clone = target.parentElement.cloneNode(true);
            listOfElements.appendChild(clone);
        }
    })
}