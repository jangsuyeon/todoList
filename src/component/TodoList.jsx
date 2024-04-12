import TodoListItem from "./TodoListItem";

function TodoList(props) {

    // state = {
  //   input: "",
  //   todos: [
  //     {
  //       id: 0,
  //       text: 'react study test',
  //       IsChecked: false
  //     }
  //   ]
  // }

    const todoItem = props.todoItem;

    return (
        <ul>
            {todoItem.map((item, index) => (
                <TodoListItem></TodoListItem>
            ))}
        </ul>
    );
}

export default TodoList;
