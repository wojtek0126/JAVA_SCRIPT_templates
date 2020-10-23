import React, {Component} from "react";
import ReactDOM from "react-dom";

const print = (element) => {
    console.log(element);
}

class RandomNumbers extends Component {
    render() {
        const array = [];
        const {min, max, count} = this.props;
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        for (let c = 1;c <= count;c++) {
            const result = random(min, max);
            print(result);
            array.push(result);
        }
        print(array);
        return array.map(element => <span>{element} </span> );
    }
}
//
import React, {Component} from "react";
import ReactDOM from "react-dom";

const ParentComponent = (props) => {
    return(
        <ChildComponent>
        {props.children}
        </ChildComponent>
)
}

const ChildComponent = (props) => {
    return (
        <GrandChildComponent>
        {props.children}
        </GrandChildComponent>
)
}

const GrandChildComponent = (props) => {
    return props.children;
}

const App = () => {
    return (
        <ParentComponent>
        <h1>To działa!</h1>
    </ParentComponent>
)
}


ReactDOM.render(
<App/>,
    document.getElementById("app")
);