import './App.css';
import TodoList from './component/TodoList';
import './assets/css/base.css';
import TodoListInsert from './component/TodoListInsert';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh', background: '#80808038' }}>
        <TodoListPage>
          <TodoListInsert></TodoListInsert>
          <TodoList></TodoList>
        </TodoListPage>
      </div>
    </div>
  );
}

const TodoListPage = styled.div`
  width: 500px;
  height: 600px;
  box-shadow: 1px 1px 1px #aaaaaa55;
  background-color: #FFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  overflow: hidden;
`;

export default App;

// import { useState } from 'react';

// function App(){
//     const [toDo,setTodo] = useState("");
//     const [toDos,setTodos] = useState([]);
//     const onSubmit = (e) => {
//         e.preventDefault();
//         if(toDo === ""){
//             return
//         }
//         setTodos((currentArray) =>[toDo, ...currentArray])
//         setTodo("")
//     } 
//     const onChange = (e) => {
//         setTodo(e.target.value)
//     }
// 	return (
//     <div>
//         <h1>투두리스트를 만들어보자~</h1>
//         <form onSubmit={onSubmit}>
//             <input type="text" placeholder="입력하세요"  onChange={onChange} value={toDo}/>
//             <button>등록하기</button>
//         </form>
//         <ul>
//         {toDos.map((item,index)=><li key={index}>{item}</li>)}
//         </ul>
//     </div>
//     )
// }

// export default App;
