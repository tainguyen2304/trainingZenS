import { Component } from 'react'

export default class ExistedTodoModal extends Component {

      componentDidMount() {
            setTimeout(() => {
                  this.props.hiddenModal();
            }, 1500);
      }

      render() {
            return (
                  <div className='modal-error'>
                        <h1>Todo existed.</h1>
                  </div>
            )
      }
}