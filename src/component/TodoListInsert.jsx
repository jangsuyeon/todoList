import styled from "styled-components";


function TodoListInsert() {


    return (
        <form>
            <input type="text" />
            <insertBtn className="insert-btn" type="button">+</insertBtn>
        </form>
    );
}

const insertBtn = styled.button `
    width: 30px;
    height: 30px;
    background-color: #112345;
`;


export default TodoListInsert;