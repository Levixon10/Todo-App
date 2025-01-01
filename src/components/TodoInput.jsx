import React from 'react'
import { useState } from 'react'

const Todoinput = (props) => {
  const {handleNewTodo}=props
  const [inputValue, setInputValue]=useState('')
  console.log(inputValue)
  return (
    <div className='input-container'>
      <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder='Add task!' />
       <button onClick={()=>{
        if(!inputValue) {return}
        handleNewTodo(inputValue)
        setInputValue('')
       }}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default Todoinput