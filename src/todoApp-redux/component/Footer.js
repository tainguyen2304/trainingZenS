import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '../store/actions/todoActions';

export default function Footer() {
      const Optioned = useSelector(state => state.option)
      const dispatch = useDispatch()
      const options = useRef()
      options.current = ['All', 'Active', 'Complete'];

      const handleSelect = (e,optioned) => {
            e.preventDefault();

            dispatch(selectOption(optioned))
      }


      return (
            <div className='todo-footer-container'>
                  <div className='todo-count'>
                        3 items left
                  </div>
                  <div className='todo-menus'>
                        {options.current.map((option, index) => 
                              (<span 
                                    key={index}
                                    className={option === Optioned ? 'active' : ''}
                                    onClick={(e) => handleSelect(e,option)}
                              >
                                    {option}
                              </span>)
                        )}
                  </div>
            </div>
      )
}
