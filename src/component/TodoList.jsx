import { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {

    const [todos, setTodos] = useState([]);

    const todoItem = props.todoItem;

    return (
        <ul style={{ marginTop: "50px" }}>
            {todos.map((item, index) => 
                <TodoListItem key={index}>{item}</TodoListItem>
            )}
        </ul>
    );
}

export default TodoList;
