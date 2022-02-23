import { Component } from 'react'

const options = ['All', 'Active', 'Complete'];

export default class Footer extends Component {
      render() {
            return (
                  <div className='todo-footer-container'>
                        <div className='todo-count'>
                              3 items left
                        </div>
                        <div className='todo-menus'>
                              {options.map((option, index) => (<span 
                                                      key={index}
                                                      className={option === this.props.option ? 'active' : ''}
                                                      onClick={(e) => this.props.handleSelect(e,option)}
                                                >
                                                {option}
                                          </span>)
                              )}
                        </div>
                  </div>
            )
      }
}
