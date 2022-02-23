import { Component } from 'react'
import greenTick from "../image/green-tick.svg"
import blackTick from "../image/black-tick.svg"
import edit from "../image/edit.svg"
import deleteIcon from "../image/delete.svg"

export default class TodoItem extends Component {
      render() {
            const {
                  todo,
                  handleDelete,
                  handleCompleted,
                  handleUpdate,
                  submitUpdate,
                  setValueUpdate,
                  todoUpdate,
            } = this.props;
            const {des, completed, update} = todo

            return (
                  <div className='todo-item-container' >
                        <span className='todo-item-toggle' onClick={(e) => handleCompleted(e,des, completed)} >
                              <img src={completed ?  greenTick : blackTick} alt="tick"/>
                        </span>

                        <div className={completed ? 'todo-item-content completed' : 'todo-item-content '}>
                              {update 
                                    ? <div className='todo-form-container'>
                                          <form onSubmit={(e) => submitUpdate(e,des,completed,update)} onBlur={(e) => handleUpdate(e, des,completed, update) }>
                                                <input type="text" value={todoUpdate} onChange={setValueUpdate} placeholder="What need to be done?" />
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
}
