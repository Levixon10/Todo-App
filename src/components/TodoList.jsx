import React from 'react'
import Todocard from './Todocard'

const Todolist = (props) => {
    const {todos ,selectedTab}=props
    const filterTodoList= selectedTab=='All' ? 
    todos :
    selectedTab=='Completed' ? todos.filter(val =>val.complete) : todos.filter(val =>!val.complete)
  return (
    <>
    {filterTodoList.map((todo,todoindex)=>{
    return(
        <Todocard {...props} key={todoindex} todoindex={todos.findIndex(val => val.input == todo.input)}
        todo={todo}/>
    )
})}


    </>
  )
}

export default Todolist