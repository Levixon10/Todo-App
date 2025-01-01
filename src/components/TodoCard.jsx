import React from 'react'

const Todocard = (props) => {
    const {todo, deleteTodo ,todoindex, completeTodo}=props
    
  return (
    <div className='card todo-item'>
        <p>{todo.input}</p>
        <div className='todo-buttons'>
            <button onClick={()=>{
                completeTodo(todoindex)
            }} disabled={todo.complete} >
                <h6>Done</h6>
            </button>
            <button onClick={()=>{
                deleteTodo(todoindex)
            }}>
                <h6>Delete</h6>
            </button>
        </div>
    </div>
  )
}

export default Todocard