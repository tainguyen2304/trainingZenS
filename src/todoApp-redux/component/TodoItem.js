import React, { useState } from 'react'
import greenTick from "../image/green-tick.svg"
import blackTick from "../image/black-tick.svg"
import edit from "../image/edit.svg"
import deleteIcon from "../image/delete.svg"
import { useDispatch, useSelector } from 'react-redux'
import { clickUpdate, completedTodo, deleteTodo, submitTodoUpdate, toggleModal } from '../store/actions/todoActions'
// {setValueUpdate,todoUpdate, submitUpdate, handleCompleted, handleUpdate, handleDelete,todo}
export default function TodoItem({todo}) {
      const {des,update, completed} = todo;
      const todoList = useSelector(state => state.todoList);
      const [todoUpdate, setTodoUpdate] = useState(des);
      const dispatch = useDispatch();

      const handleCompleted = (e,des, completed) => {
            e.preventDefault();
            dispatch(completedTodo(des,completed));
      }

      const handleDelete = (e,des) => {
            e.preventDefault();

            dispatch(deleteTodo(des));

      }

      const submitUpdate = (e,des,completed,update) => {
            e.preventDefault();  

            const existDes = todoList.find( value => value.des === todoUpdate);

            if(todo.des !== '' && !existDes) {
                  dispatch(submitTodoUpdate(des,todoUpdate,completed,update))
            }
            else if (existDes) {
                  dispatch(toggleModal(true));
            }

            
      }

      const handleUpdate = (e,des,completed,update) => {
            e.preventDefault();
            // setTodoUpdate(des) -- resart value update khi người dùng blur. 
            dispatch(clickUpdate(des,completed,update))
            
      }
      return (
            <div className='todo-item-container' >
            <span className='todo-item-toggle' onClick={(e) => handleCompleted(e,des, completed)} >
                  <img src={completed ?  greenTick : blackTick} alt="tick"/>
            </span>

            <div className={completed ? 'todo-item-content completed' : 'todo-item-content '}>
                  {     update 
                        ? <div className='todo-form-container'>
                              <form onSubmit={(e)=> submitUpdate(e,des,completed,update)} onBlur={(e)=> handleUpdate(e,des,completed, update) }>
                                    <input type="text" 
                                          value={todoUpdate} 
                                          onChange={(e) =>  setTodoUpdate(e.target.value)} 
                                          placeholder="What need to be done?" 
                                    />
                              </form>
                              </div>
                        : des
                  }
            </div>

            <div className='todo-item-options' >
                  <span   className='icon-btn' onClick={(e) => handleUpdate(e,des,completed, update)} >
                        <img src={edit} alt="edit"/>
                  </span>
                  <span   className='icon-btn' onClick={(e) => handleDelete(e,des)}>
                        <img src={deleteIcon} alt="close"/>
                  </span>
            </div>
      </div>
      )
}
