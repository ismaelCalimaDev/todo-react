import '../reset.css';
import '../App.css';
import {useState} from "react";
import EmptyTasks from "./EmptyTasks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import NameForm from "./NameForm";
import useSaveLocalStorage from "../hooks/useSaveLocalStorage";
import {TodosContext} from "../context/TodosContext";

function App() {

    const [todos, setTodos] = useSaveLocalStorage('todos', [])


    const [idForTodo, setIdForTodo] = useState(todos.length !== 0? todos[todos.length -1].id + 1 : 1)

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
                <h2>What is your name?</h2>
                <NameForm/>
                <h2>Todo App</h2>
                <TodosContext.Provider value={{todos, setTodos, idForTodo, setIdForTodo}}>
                    <TaskForm/>
                </TodosContext.Provider>
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
