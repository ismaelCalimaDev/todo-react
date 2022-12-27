import '../reset.css';
import '../App.css';
import {useState} from "react";
import EmptyTasks from "./EmptyTasks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

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


    const [idForTodo, setIdForTodo] = useState(todos.length !== 0? todos[todos.length -1].id + 1 : 1)

    function addTodo(title) {
        setTodos([
            ...todos,
            {
                id: idForTodo,
                title: title,
                isComplete: false,
            },
        ]);

        setIdForTodo(value => value + 1)
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

    function markAllChecked() {
        const updatedTodos = todos.map((todo) => {
            todo.isComplete = true
            return todo;
        })
        setTodos(updatedTodos)
    }

    function deleteAllCompleted() {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.isComplete === false))
    }

    function filteredTodos(filter) {
        if(filter === 'active'){
            return todos.filter((todo) => todo.isComplete === false)
        }else if (filter === 'completed' ) {
            return todos.filter((todo) => todo.isComplete === true)
        }else {
            return todos
        }
    }

    return (
        <div className="todo-app-container">
            <div className="todo-app">
                <h2>Todo App</h2>
                <TaskForm addTodo={addTodo}/>
                {todos.length > 0 ?
                    <TaskList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        handleCheckBox={handleCheckBox}
                        markAsEdit={markAsEdit}
                        updateTodo={updateTodo}
                        markAllChecked={markAllChecked}
                        deleteAllCompleted={deleteAllCompleted}
                        filteredTodos={filteredTodos}
                    />
                    :
                    <EmptyTasks/>
                }
            </div>
        </div>
    );
}

export default App;
