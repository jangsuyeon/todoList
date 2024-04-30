import styled from "styled-components";
import { useState } from "react";
import Delete from "../assets/img/delete.png"
import Modify from "../assets/img/modify.svg"


function TodoListItem(props) {

  const [itemActive, setItemActive] = useState(false);
  const [IsChecked, setIsChecked] = useState(false);

  const toggleActive = () => {
    setIsChecked(prevState => !prevState);
    setItemActive(prevState => !prevState);
  };

  return (
    <Item id="listItem" className={"itemList " + (itemActive ? "active" : "")}>
      <div className="todoLeft">
        <label class="checkbox_label">
          <input type="checkbox" onClick={toggleActive} />
          <span class="checkbox_icon"></span>
          <span class="todolist">
          {/* {props.todos[0].text} */}
            내용
          </span>
        </label>
      </div>
      <div className="todoRight">
        <ItemButton type="button">
          <img className="itemBtn-img" src={Modify} alt="수정" />
        </ItemButton>
        <ItemButton type="button">
          <img className="itemBtn-img" src={Delete} alt="삭제" />
        </ItemButton>
      </div>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const ItemButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
`;

export default TodoListItem;