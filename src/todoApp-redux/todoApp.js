import React from 'react';
import { useSelector } from 'react-redux';
import ExistedTodoModal from './component/ExistedTodoModal';
import Footer from './component/Footer';
import Header from './component/Header';
import TodoList from './component/TodoList';
import "./todoApp.css";

const TodoApp = () => {

    const state = useSelector(state => state)
      return (
          <div className='app-container'>
              <div className='todo-container'>
                <Header/>
                <TodoList/>
                <Footer/>
                {state.showModalError && <ExistedTodoModal/> }
              </div>
          </div>
      );
}

export default TodoApp;
