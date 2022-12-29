import '../App.css';
import {useContext, useState} from "react";
import {TodosContext} from "../context/TodosContext";

function TaskForm(props) {

    const [todoInput, setTodoInput] = useState('');
    const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosContext)

    function updateTodoInput(e) {
        setTodoInput(e.target.value)
    }

    function handleSubmit(event) {
        if(todoInput.trim().length === 0) {
            return;
        }
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
    return (
        <form action="#" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What do you need to do?"
                value={todoInput}
                onChange={updateTodoInput}
            />
        </form>
    );
}

export default TaskForm;
