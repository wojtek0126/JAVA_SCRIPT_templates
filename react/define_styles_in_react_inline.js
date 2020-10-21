import React, {Component} from "react";
import ReactDOM from "react-dom";

const print = (element) => {
    console.log(element);
}

const Square = () => {
    const size = "700px";
    const color = "blue";
    const divStyle = {
        width: size,
        height: size,
        background: color
    }
    return (
        <div style={divStyle}></div>
)
}

ReactDOM.render(
<Square/>,
    document.getElementById("app")
);
