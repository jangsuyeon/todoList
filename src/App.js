import './App.css';
import TodoList from './component/TodoList';
import './assets/css/base.css';
import TodoListInsert from './component/TodoListInsert';

function App() {
  return (
    <div className="App">
      <TodoListInsert></TodoListInsert>
      {/* <TodoList></TodoList> */}
    </div>
  );
}

export default App;
