export const SUBMIT_TODO = 'SUBMIT_TODO'
export const SELECT_OPTION = 'SELECT_OPTION'
export const DELETE_TODO = 'DELETE_TODO'
export const HANDLE_UPDATE = 'HANDLE_UPDATE'
export const SUBMIT_UPDATE= 'SUBMIT_UPDATE'
export const COMPLETED_TODO = 'COMPLETED_TODO'
export const TOGGLE_SHOW_MODAL = 'TOGGLE_SHOW_MODAL'


export const selectOption = (option) => {
      return {
            type: SELECT_OPTION,
            payload: option
      }
}

export const submitTodo = (todo) => {
      return {
            type: SUBMIT_TODO,
            payload: todo
      }
}


export const completedTodo = (todo,completed) => {
      return {
            type: COMPLETED_TODO,
            payload: {todo, completed}
      }
}

export const toggleModal = (value) => {
      return  {
            type: TOGGLE_SHOW_MODAL,
            payload: value
      }
}

export const clickUpdate = (des,completed,update) => {
      return  {
            type: HANDLE_UPDATE,
            payload: {
                  des,
                  completed,
                  update
            }
      }
}

export const submitTodoUpdate = (des,todoUpdate,completed,update) => {
      return  {
            type: SUBMIT_UPDATE,
            payload: {
                  des,
                  todoUpdate,
                  completed,
                  update
            }
      }
}





export const deleteTodo = (value) => {
      return  {
            type: DELETE_TODO,
            payload: value
      }
}

