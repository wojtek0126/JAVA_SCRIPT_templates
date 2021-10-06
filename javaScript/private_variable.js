// private variable, can't access directly

const secretVariable = () => {
    const private = 'secret';
    return function() {
        return private;
    }
}