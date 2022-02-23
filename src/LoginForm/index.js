import React from 'react';
import './index.css';


class Welcome extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.hiddenModarn();
    },1500)
  }


  render() {
    return (
      <div className='welcome-container'>
        <h1>Welcome</h1>
      </div>
    );
  }
}

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logined: false,
    };
  }

  

  ChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  HandleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  HandleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({
        username: '',
        password:'',
        popup: true,
        logined:true
      })
    }

  }

  TogglePopup = () => {
    this.setState({
      email: '',
      password: '',
      logined: false,
    })
  }



render() {
    return (
      <div className='app-container'>
        <div className='login-form-container'>
              <h1 >Login</h1>
              <form onSubmit={this.HandleSubmit}>
                <input
                  type='email'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.ChangeEmail}
                />
                <input
                  type='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.HandleChangePassword}
                />
                <button
                  type='submit'
                  value='Login'
                >
                  Login
                </button>
              </form>
        </div>
        {this.state.logined && <Welcome hiddenModarn={this.TogglePopup} />}
      </div>
    );
  }
}

export default LoginForm;
