import TodosRemaining from "./TodosRemaining";

function TaskList(props) {
     return <div>
         <ul className="todo-list">
             {props.todos.map((todo) => {
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
                 <button className="button filter-button filter-button-active">
                     All
                 </button>
                 <button className="button filter-button">Active</button>
                 <button className="button filter-button">Completed</button>
             </div>
             <div>
                 <button  onClick={props.deleteAllCompleted} className="button">Clear completed</button>
             </div>
         </div>
     </div>
}

export default TaskList;
