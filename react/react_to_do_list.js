import React, {Component} from "react";
import ReactDOM from "react-dom";
const items = [
    {
        text: 'Task 1',
        isDone: false
    },
    {
        text: 'Task 2',
        isDone: false
    },
    {
        text: 'Task 3',
        isDone: true
    }
];

const TodoHeader = props => {
    return (
        <h1>Moje zadania ({props.counter})</h1>
)
};

const TodoForm = () => {
    return (
        <form>
        <input type="text" />
        <button type="submit">Dodaj</button>
        </form>
)
}

const TodoItem = props => {    let color = '';
    let btnText = '';    if (props.isDone) {
        color = 'green';
        btnText = 'Cofnij';
    } else {
        color = 'grey';
        btnText = 'Zakończ';
    }    return (
        <li style={{
        backgroundColor: color
    }}>
    {props.text}
<button>
    {btnText}
    </button>
    </li>
)
}

const TodoItems = props => {
    return (
        <ul>
        {props.items.map((item, index) => {
                return (
                    <TodoItem key={index} text={item.text} isDone={item.isDone}/>
            )
            })}
        </ul>
)
}const TodoList = props => {    const tasksNotCompleted = props.items.filter(item => item.isDone === false);    return (
    <>
    <TodoHeader counter={tasksNotCompleted.length} />
<TodoItems items={props.items} />
<TodoForm />
</>
)


}ReactDOM.render(
<TodoList items={items} />,
document.getElementById("app")
);



    .