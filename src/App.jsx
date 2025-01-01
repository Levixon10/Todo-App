import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {
/*const todos=[
   { input: 'Hello! Add your first todo!', complete: true },
   { input: 'Get the groceries!', complete: false },
   { input: 'Learn how to web design', complete: false },
   { input: 'Say hi to gran gran', complete: true },
   ]*/

   const [todos,setTodos]=useState([{ input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },])

    const [selectedTab,setSelectedTab]=useState('Open')

    function handleNewTodo(newTodo){
      const newTodoList=[...todos,{input: newTodo, complete: false}]
      setTodos(newTodoList)
      savedData(newTodoList)
    }
    function deleteTodo(index){
      let newTodoList =todos.filter((val,valindex)=>{
        return valindex!==index
      })
      setTodos(newTodoList)
      savedData(newTodoList)
    }
    function completeTodo(index){
      let newTodoList=[...todos]
      let completedTodo=todos[index]
      completedTodo['complete']=true
      newTodoList[index]=completedTodo
      setTodos(newTodoList)
      savedData(newTodoList)
    }
    function savedData(currTodos) {
      localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
    }
    useEffect(() => {
      if (!localStorage || !localStorage.getItem('todo-app')) { return }
      let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
    }, [])

  return (
    <>
    <Header todos={todos}/>
    <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <TodoList todos={todos} selectedTab={selectedTab} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    <TodoInput handleNewTodo={handleNewTodo}/>
    
    </>
  )
}

export default App