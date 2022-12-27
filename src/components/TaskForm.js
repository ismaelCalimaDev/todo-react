import '../App.css';
import {useState} from "react";

function TaskForm(props) {

    const [todoInput, setTodoInput] = useState('');

    function updateTodoInput(e) {
        setTodoInput(e.target.value)
    }

    function handelSubmit(event) {
        if(todoInput.trim().length === 0) {
            return;
        }
        props.addTodo(todoInput)
        setTodoInput('')
    }
    return (
        <form action="#" onSubmit={handelSubmit}>
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
