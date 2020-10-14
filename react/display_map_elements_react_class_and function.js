const print = (element) => {
    console.log(element);
}

const items = [
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
]



import React, {Component} from "react";
import ReactDOM from "react-dom";

//dla funkcji:
const Menu = props => {
    return props.items.map( (item, index) => {
        return (
            <ul key={index}>
            <li><a href={item.url}>{item.text}</a></li>

        </ul>
    )
    })
}

//dla klasy
// class Menu extends Component {
//   render() {
//     return this.props.items.map( (item, index) => {
//       return (
//           <ul key={index}>
//             <li><a href={item.url}>{item.text}</a></li>
//           </ul>
//       )
//     })
//   }
// }





ReactDOM.render(
// <>
<Menu items={items}/>,
// </>,
document.getElementById("app")
);