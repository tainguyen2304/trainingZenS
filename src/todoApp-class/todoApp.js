import React from 'react';
import "./todoApp.css"
import Header from './component/Header'
import Footer from './component/Footer'
import ExistedTodoModal from './component/ExistedTodoModal'
import TodoList from './component/TodoList'

export default class TodoApp extends React.Component {

      constructor(props) {
            super(props);
            const initialState = JSON.parse(localStorage.getItem("initialState"))
            this.state= initialState || {
                  todoList: [],
                  todoListOption: [],
                  todo:{
                        des:'',
                        completed: false,
                        update:false
                  },
                  update: false,
                  todoUpdate:'',
                  showModal: false,
                  option: 'All'
            }
      }

      componentDidUpdate(prevProps, prevState) {
            if(prevState.option !== this.state.option || prevState.todoList !== this.state.todoList )
            {
                  let newList;
                  
                  if(this.state.option === 'All') {
                        newList = this.state.todoList
                  }
                  else if(this.state.option === 'Active') {
                        newList = [...this.state.todoList].filter(({completed}) => completed === false)
                  }
                  else if (this.state.option === 'Complete') {
                        newList = [...this.state.todoList].filter(({completed}) => completed === true)
                  }
                  
                  this.setState({
                        ...this.state,
                        todoListOption:newList
                  })
            }
            localStorage.setItem('initialState',JSON.stringify(this.state));
      }

      handleChange = (e) => {
            this.setState({
                  ...this.state,
                  todo:{
                        ...this.state.todo,
                        des:e.target.value
                  }
            })
      }
      handleSubmit  = (e) => {
            e.preventDefault();
            
            const existDes = this.state.todoList.find( todo => todo.des === this.state.todo.des)

            if(this.state.todo.des !== '' && !existDes) {
              const newTodoList = [...this.state.todoList, this.state.todo];

              this.setState({
                    ...this.state,
                    todoList:newTodoList,
                    todo: {
                          ...this.state.todo,
                          des:''
                    }
              })
            }
            else if (existDes) {
                  this.setState({
                        ...this.state,
                        hiddenModal:true,
                  })
            }
      }
      handleCompleted = (e,des,completed) => {
            e.preventDefault();

            const index = this.state.todoList.findIndex( todo => todo.des === des)
            const newTodo = {
                des,
                completed:!completed,
                update: false,
            }
            this.state.todoList.splice(index,1,newTodo);
            const newList = [...this.state.todoList]
            this.setState({
                  ...this.state,
                  todoList:newList
            })     
      
      }
      handleDelete = (e,des) => {
            e.preventDefault();
            const index = this.state.todoList.findIndex( todo =>todo.des === des)
            this.state.todoList.splice(index,1);
            this.setState({
                  ...this.state,
                  todoList:this.state.todoList
            })    
      }
      handleUpdate = (e, des, completed, update) => {
            e.preventDefault();

            const index = this.state.todoList.findIndex( todo => todo.des === des);

            const newTodo = {
                  des,
                  completed,
                  update: !update
            };

            const newList = this.state.todoList.map( ({des, completed}) => ({des, completed, update: false}))
            newList.splice(index,1,newTodo);
            
            this.setState({
                  ...this.state,
                  todoUpdate:des,
                  todoList:newList,
            });   
      }
      submitUpdate = (e,des,completed, update) => {
            e.preventDefault();
            const index = this.state.todoList.findIndex( todo => todo.des === des)
            const updateTodo = {
                  des: this.state.todoUpdate,
                  completed,
                  update: !update,
            };

            this.state.todoList.splice(index,1,updateTodo);

            this.setState({
                  ...this.state,
                  todoList:this.state.todoList
            });   

      }
      handleSelect = (e,option) => {
            e.preventDefault();
            this.setState({
                  ...this.state,
                  option
            })
            
      }
      hiddenModal = () => {
            this.setState({
                  ...this.state,
                  hiddenModal:false
            })
      }
      setValueUpdate = (e) => {
            this.setState({
                  ...this.state,
                  todoUpdate:e.target.value
            })
      }

      render() {
            return (
                  <div className='app-container'>
                        <div className='todo-container'>
                              <Header 
                                    onChange = {this.handleChange} 
                                    value = {this.state.todo.des} 
                                    handleSubmit = {this.handleSubmit}
                              />
                              <TodoList 
                                    todoListOption={this.state.todoListOption}
                                    handleCompleted={this.handleCompleted}
                                    handleDelete={this.handleDelete}
                                    handleUpdate={this.handleUpdate}
                                    submitUpdate={this.submitUpdate}
                                    setValueUpdate={this.setValueUpdate}
                                    todoUpdate={this.state.todoUpdate}
                                    
                              />
                              <Footer 
                                    option={this.state.option}
                                    handleSelect={this.handleSelect}
                              />
                              {this.state.hiddenModal && <ExistedTodoModal hiddenModal={this.hiddenModal} />}
                        </div>
                  </div>
            )
      }
}




