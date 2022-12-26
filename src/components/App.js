import '../reset.css';
import '../App.css';
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish React Series',
            isComplete: false,
            isEditing: false,
        },
        {
            id: 2,
            title: 'Go Grocery',
            isComplete: true,
            isEditing: false,
        },
        {
            id: 3,
            title: 'Take over world',
            isComplete: false,
            isEditing: false,
        },
    ]);

    const [todoInput, setTodoInput] = useState('');

    const [idForTodo, setIdForTodo] = useState(todos[todos.length -1].id + 1)

    function addTodo() {
        if(todoInput.trim().length !== 0) {
            setTodos([
                ...todos,
                {
                    id: idForTodo,
                    title: todoInput,
                    isComplete: false,
                },
            ]);

            setIdForTodo(value => value + 1)
            setTodoInput('')
        }
    }

    function updateTodoInput(e) {
        setTodoInput(e.target.value)
    }

    function deleteTodo(id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    function handleCheckBox(id) {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function markAsEdit(id) {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isEditing = true
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function updateTodo(event, id) {
        if(event.target.value.trim().length === 0){
            return;
        }
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.title = event.target.value
                todo.isEditing = false
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div className="todo-app-container">
            <div className="todo-app">
                <h2>Todo App</h2>
                <form action="#" onSubmit={addTodo}>
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="What do you need to do?"
                        value={todoInput}
                        onChange={updateTodoInput}
                    />
                </form>

                <ul className="todo-list">
                    {todos.map((todo) => {
                        return (
                                <li key={todo.id} className="todo-item-container">
                                    <div className="todo-item">
                                        <input type="checkbox" onChange={() => handleCheckBox(todo.id)} checked={todo.isComplete}/>
                                        {!todo.isEditing?
                                            ( <span onDoubleClick={() =>markAsEdit(todo.id)} className={`todo-item-label ${todo.isComplete?'line-through': ''}`}>{todo.title}</span>
                                            ): <input type="text" className="todo-item-input" defaultValue={todo.title}
                                                      onKeyDown={(event)=> {
                                                            if(event.key === 'Enter') {
                                                                updateTodo(event, todo.id)
                                                            }
                                                        }
                                                      }
                                                      onBlur={(event)=> updateTodo(event, todo.id)}
                                                      autoFocus
                                            />
                                        }
                                    </div>
                                    <button onClick={() => deleteTodo(todo.id)} className="x-button">
                                        <svg
                                            className="x-button-icon w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                        )
                    } )}
                </ul>

                <div className="check-all-container">
                    <div>
                        <div className="button">Check All</div>
                    </div>

                    <span>3 items remaining</span>
                </div>

                <div className="other-buttons-container">
                    <div>
                        <button className="button filter-button filter-button-active">
                            All
                        </button>
                        <button className="button filter-button">Active</button>
                        <button className="button filter-button">Completed</button>
                    </div>
                    <div>
                        <button className="button">Clear completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
