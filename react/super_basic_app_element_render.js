import React, {Component} from "react";
import ReactDOM from "react-dom";

const print = (element) => {
    console.log(element);
}

const App = () => {
    return (
        <div>
        <h1>Egzamin</h1>
        <button>Click</button>
        </div>

)
}


ReactDOM.render(
<App/>,
    document.getElementById("app")
);