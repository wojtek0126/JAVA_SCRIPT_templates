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
class RandomNumbersInfo extends Component {
    render() {
        const {min, max, count} = this.props;


        return (
            <>
            <h1>{min}</h1>
            <h1>{max}</h1>
            <h1>{count}</h1>
            </>
    )
    }
}

class RandomNumbersList extends Component {
    render() {
        const {min, max, count} = this.props;
        return (
            <RandomNumbers min={min} max={max} count={count} />
    )
    }
}

class App extends Component {
    render() {
        const {min, max, count} = this.props;
        return (
            <>
            <RandomNumbersList min={min} max={max} count={count}/>
        <RandomNumbersInfo min={min} max={max} count={count}/>
        </>
    )
    }
}

ReactDOM.render(
<App min={3} max={6} count={9}/>,
document.getElementById("app")
);