import React from 'react'

const Header = (props) => {
    const {todos}=props
    const todoslength=todos.length
    const isPlural=todoslength!=1
    const taskortasks=(isPlural) ? 'tasks' : 'task'
  return (
    <header>
        <h1 className='text-gradient'>You have {todoslength} open {taskortasks}</h1>
        </header>
  )
}

export default Header