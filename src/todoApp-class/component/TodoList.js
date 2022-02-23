import { Component } from 'react'
import TodoItem from './TodoItem'


export default class TodoList extends Component {
      render() {
            const {todoListOption,...props} = this.props;

            return (
                  <div className='todo-list-container'>
                        { todoListOption?.map((todo,index) => 
                              <TodoItem 
                                    key={index} 
                                    todo={todo}
                                    {...props}
                              />)
                        }
                  </div>
            )
      }
}