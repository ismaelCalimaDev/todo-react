import TodosRemaining from "./TodosRemaining";
import { useState } from "react";

function TaskList(props) {
    const [filter, setFilter] = useState('all')

    function changeFilter(filter) {
        setFilter(filter)
    }
     return <div>
         <ul className="todo-list">
             {props.filteredTodos(filter).map((todo) => {
                 return (
                     <li key={todo.id} className="todo-item-container">
                         <div className="todo-item">
                             <input type="checkbox" onChange={() => props.handleCheckBox(todo.id)} checked={todo.isComplete}/>
                             {!todo.isEditing?
                                 ( <span onDoubleClick={() =>props.markAsEdit(todo.id)} className={`todo-item-label ${todo.isComplete?'line-through': ''}`}>{todo.title}</span>
                                 ): <input type="text" className="todo-item-input" defaultValue={todo.title}
                                           onKeyDown={(event)=> {
                                               if(event.key === 'Enter') {
                                                   props.updateTodo(event, todo.id)
                                               }
                                           }
                                           }
                                           onBlur={(event)=> props.updateTodo(event, todo.id)}
                                           autoFocus
                                 />
                             }
                         </div>
                         <button onClick={() => props.deleteTodo(todo.id)} className="x-button">
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
                 <button onClick={props.markAllChecked} className="button">Check All</button>
             </div>
            <TodosRemaining todos={props.todos}/>
         </div>

         <div className="other-buttons-container">
             <div>
                 <button onClick={() =>changeFilter('all')} className={`button filter-button ${filter === 'all'? 'filter-button-active': ''}`}>
                     All
                 </button>
                 <button onClick={() =>changeFilter('active')} className={`button filter-button ${filter === 'active'? 'filter-button-active': ''}`}>Active</button>
                 <button onClick={() =>changeFilter('completed')} className={`button filter-button ${filter === 'completed'? 'filter-button-active': ''}`}>Completed</button>
             </div>
             <div>
                 <button  onClick={props.deleteAllCompleted} className="button">Clear completed</button>
             </div>
         </div>
     </div>
}

export default TaskList;
