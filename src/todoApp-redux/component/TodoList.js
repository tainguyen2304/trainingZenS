import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {
      const todoList = useSelector(state => state.todoList)
      const option = useSelector(state => state.option)
      const [todoOptionList, setTodoOptionList] = useState([])


      useEffect(() => {
            let newList;
            
            if(option === 'All') {
                  newList = todoList
            }
            else if(option === 'Active') {
                  newList = todoList.filter(({completed}) => completed === false)
            }
            else if (option === 'Complete') {
                  newList = todoList.filter(({completed}) => completed === true)
            }
            
            setTodoOptionList(newList);

      }, [todoList, option]);


      return (
      <div className='todo-list-container'>
                  {todoOptionList?.map((todo,index) => 
                        <TodoItem 
                              key={index} 
                              todo={todo}
                        />)
                  }
            </div>
      )
}
