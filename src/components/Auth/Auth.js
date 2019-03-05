import React,{ Component } from "react";
import { connect } from "react-redux";
import { updatePassword,updateUsername, register,login } from "../../ducks/reducer";
import axios from "axios";

// import "./Auth.css"

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  addUser = e => {
    const { username, password } = this.props;
 
      this.props.register(username, password);
      this.props.history.push('/dashboard');

    e.preventDefault();
  }

  getUser = () => {
    const { username, password } = this.props;
   
      const { login } = this.props;
      this.props.login(username, password);
      this.props.history.push('/dashboard');

  }

  render() {
    console.log(this.props);
    const { username, password } = this.props;
    return (
      <div className="auth-cont">
      <form>
          <h1>Helo</h1>
       
            <label>Username:</label>
            <input type="text" name="field1" placeholder="Username"
          value={username}
          onChange={e => this.props.updateUsername(e.target.value)}
           />
     
        
            <label>Password:</label>
            <input type="text" name="field1" placeholder="Password"
          value={password}
          onChange={e => this.props.updatePassword(e.target.value)}
           />
  
      
            <button type="submit" onClick={this.getUser}>Login</button>
            <button type="submit" onClick={this.addUser}>Register</button>
            </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
 const {username,password,user} = state
 return {username,password,user}
};

export default connect(mapStateToProps, {updatePassword,updateUsername,register,login})(Auth);