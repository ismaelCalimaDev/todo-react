

function TodosRemaining(props) {
    return <span>{props.todos.filter(todo => todo.isComplete === false).length} items remaining</span>
}
export default TodosRemaining;
