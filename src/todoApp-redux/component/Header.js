import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitTodo, toggleModal } from '../store/actions/todoActions'

export default function Header() {
      const todoList = useSelector(state => state.todoList)
      const [todo, setTodo] =  useState(
            { 
              des:'', 
              completed:false, 
              update:false
            }
      )
      const dispatch = useDispatch()

      const handleSubmit = (e) => {
            e.preventDefault();
            
            const existDes = todoList.find( value => value.des === todo.des)
            if(todo.des !== '' && !existDes) {
                  dispatch(submitTodo(todo))  
                  setTodo({...todo, des: ''})    
            }
            else if (existDes) {
                  dispatch(toggleModal(true));
            }
            
      }

      return (
            <div className='todo-form-container'>
                  <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        value={todo.des} 
                        onChange={(e) =>  setTodo({...todo, des: e.target.value})} 
                        placeholder="What need to be done?" />
                  </form>
            </div>
      )
}
