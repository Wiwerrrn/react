import React, {useState} from 'react';
import Todo from './Todo';

function TodoList() {
    const [todoListState, setTodoListState] = useState({todos:[], inputValue: ''})
    
    const handleInputChange = (event) => {
        const {value} = event.target;
        setTodoListState({
            ...todoListState,
            inputValue:value
        })

    }

    const handleButtonClick = () => {
        const {todos} = todoListState;
        setTodoListState({
            todos: [...todos, inputValue],
            inputValue: ''
        })

    }

    const {todos, inputValue} = todoListState;

    return(
        <div>
            <div>Todo List</div>
            <input
                name="todo input"
                placeholder="co bedziemy robić?"
                value={inputValue}
                onChange={handleInputChange}
             />
            <button 
                onClick={handleButtonClick}
            > 
                Dodaj
            </button>
            {todos.map((todo)=> (
                <Todo 
                    key={todo}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;