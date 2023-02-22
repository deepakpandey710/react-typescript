import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';
function App() {
  const [todos,setTodos]=useState<Todo[]>([]);

  const addTodoHandler=(text:string)=>{
    const newTodo=new Todo(text);
    setTodos((prevstate)=>{
      return prevstate.concat(newTodo);
    })
  }

  const removeTodoHandler=(todoId:string)=>{
    setTodos((prevState)=>{
      return prevState.filter(todo=>todoId!==todo.id);
    })
  } 
  return (
    <div>
      <NewTodo addToTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
