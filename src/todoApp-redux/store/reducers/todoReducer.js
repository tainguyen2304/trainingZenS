import { COMPLETED_TODO, DELETE_TODO, HANDLE_UPDATE, SELECT_OPTION, SUBMIT_TODO, SUBMIT_UPDATE, TOGGLE_SHOW_MODAL } from "../actions/todoActions";

const initialState = {
      todoList: [],
      option: 'All',
      showModalError: false,
}

function todoReducer(state = initialState, action) {
      const {type, payload} = action;
      let newList;
      let index;
      let newTodo;
      switch (type) {
            case SUBMIT_TODO:
                  newList = [...state.todoList,payload]
                  return {
                        ...state,
                        todoList: newList
                  }
            case COMPLETED_TODO:
                  index = state.todoList.findIndex( todo => todo.des === payload.todo);
                  newTodo = {
                        des:payload.todo,
                        completed:!payload.completed,
                        update: false,
                  };
                  newList = [...state.todoList]
                  newList.splice(index,1,newTodo);

                  return {
                        ...state,
                        todoList: newList,
                  };

            case TOGGLE_SHOW_MODAL:
                  return {
                        ...state,
                        showModalError: payload
                  }
            case DELETE_TODO:
                  index = state.todoList.findIndex( value => value.des === payload)
                  newList = [...state.todoList]
                  newList.splice(index,1);

                  return {
                        ...state,
                        todoList: newList
                  }
            case HANDLE_UPDATE:
                  index = state.todoList.findIndex( value => value.des === payload.des)
      
                  newTodo = {
                        des:payload.des,
                        completed:payload.completed,
                        update: !payload.update
                  };
                  newList = [...state.todoList].map( ({des, completed}) => ({des, completed, update: false}))
                  newList.splice(index,1,newTodo);

                  return {
                        ...state,
                        todoList:newList
                  }
            case SUBMIT_UPDATE:
                  index = state.todoList.findIndex( value => value.des === payload.des)
                  console.log(index);
                  newTodo = {
                        des: payload.todoUpdate,
                        completed: payload.completed,
                        update: !payload.update,
                  };
               
                  newList = [...state.todoList]
                  newList.splice(index,1,newTodo);

                  return {
                        ...state,
                        todoList:newList
                  }
            case SELECT_OPTION:
                  return {
                        ...state,
                        option: payload
                  }

            default:
                  return state;
      }
}

export default todoReducer;