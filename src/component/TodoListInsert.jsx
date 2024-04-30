import styled from "styled-components";
import { useState } from "react";


function TodoListInsert() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        if(todo === "") {
            return
        }
        setTodos((currentArray) => [todo, ...currentArray])
        setTodo("")
    }

    const handleInputChange = (e) => {
        setTodo(e.target.value); // 입력값을 상태에 반영
    }


    return (
        <div>
            <div>
                <p className="list-title">To Do List</p>
            </div>
            <form onSubmit={onSubmit}>
                <InsertInput 
                    type="text" 
                    placeholder="입력" 
                    value={todo}
                    onChange={handleInputChange} />
                <InsertBtn className="insert-btn" type="button">+</InsertBtn>
            </form>
        </div>
    );
}


const InsertInput = styled.input`
    width: calc(100% - 50px);
    height: 50px;
    border: none;
    outline: none;
    padding: 0 20px;
    font-size: 1.5em;
    background-color: #aaa;
    position: absolute;
    left: 0;
`;

const InsertBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #112345;
    color: #FFF;
    font-size: 2em;
    cursor: pointer;
    position: absolute;
    right: 0;
`;




export default TodoListInsert;