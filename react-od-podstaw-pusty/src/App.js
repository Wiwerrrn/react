import React, {useState} from 'react';
import './App.css';
import  TodoList from './components/TodoList/TodoList';

import './styles/button.css';
import './styles/input.css';
import './styles/todo.css';
import './styles/todoList.css';


function App() {
  const [number, setNumber] = useState(0);
  console.log(number);
return (
    <div className="App">
    <TodoList />
       <div>{number}</div>
      <button
        onClick={() => setNumber(number +1)}
      >
      +
      </button>
      <button
        onClick={() => setNumber(number -1)}
      >
      -
      </button> 
    </div>
  );
}

export default App;
