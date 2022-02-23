import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../store/actions/todoActions';

export default function ExistedTodoModal() {
      const dispatch = useDispatch();

      useEffect(() => {
            const clear = setTimeout(() => {
                  dispatch(toggleModal(false))
            },500)

            return () => {
                 clearTimeout(clear);
            };
      }, [dispatch]);

      return (
            <div className='modal-error'>
                  <h1>Todo existed.</h1>
            </div>
      )
}
