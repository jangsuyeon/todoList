import styled from "styled-components";
import { useState } from "react";


function TodoListItem(props, state) {


  const [itemActive, setItemActive] = useState(false);
  const [IsChecked, setIsChecked] = useState(false);

  const toggleActive = () => {
    setIsChecked(prevState => !prevState);
    setItemActive(prevState => !prevState);
  };

  

  // const value = props.value;


  return (
    <Item id="listItem" className={"itemList " + (itemActive ? "active" : "")}>
      <div className="todoLeft">
        <label class="checkbox_label">
          <input type="checkbox" onClick={toggleActive} />
          <span class="checkbox_icon"></span>
          <span class="todolist">{props.todos[0].text}</span>
        </label>
      </div>
      <div className="todoRight">
        <ItemButton type="button">삭제</ItemButton>
        <ItemButton type="button">수정</ItemButton>
      </div>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

const ItemButton = styled.button`
  padding: 10px;
`;

export default TodoListItem;