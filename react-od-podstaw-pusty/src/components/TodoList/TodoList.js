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

        if (!inputValue) return;

        if (todos.some(todo => todo === inputValue)) {
            setTodoListState({
                ...todoListState,
                error: "To zadanie juz istnieje!",
                inputValue:""
            })
            return;
        }
        setTodoListState({
            todos: [...todos, inputValue],
            inputValue: '',
            error: ''
        })

    }

    const handleToDoRemove = (todoValue) => {
        setTodoListState({
            ...todoListState,
            todos: todos.filter(todo => todo !== todoValue)
        });
    }

    const {error, todos, inputValue} = todoListState;

    return(
        <div className="TodoList">
            <h3>Todo List</h3>
            <input
                className="Input"
                name="todo input"
                placeholder="co bedziemy robić?"
                value={inputValue}
                onChange={handleInputChange}
             />
            <button 
                className="Button"
                onClick={handleButtonClick}
            > 
                Dodaj
            </button>
            {!!error &&
            <p 
                className="Error"
            >
                {error}
            </p>
            }
            {todos.map((todo)=> (
                <Todo 
                    key={todo}
                    todo={todo}
                    handleCloseClick={handleToDoRemove}
                />
            ))}
        </div>
    )
}

export default TodoList;