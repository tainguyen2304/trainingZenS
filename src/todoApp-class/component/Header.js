import  { Component } from 'react'

export default class Header extends Component {
      render() {
            const {onChange,handleSubmit,value} = this.props;
            return (
                  <div className='todo-form-container'>
                  <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={onChange} placeholder="What need to be done?" />
                  </form>
                </div>
            )
      }
}