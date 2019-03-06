import React, { Component } from 'react'
import {connect} from "react-redux"
import axios from "axios"
import {getPic} from "../../ducks/reducer"
import "./Dashboard.css"
export class Dashboard extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  updatePic = () => {
    const {profile} = this.props
    const {user} = this.props
    axios.put(`/api/updatePic/`, {profile,id: user.id}).then(res => {
      // console.log(res);
      this.setState({ pref: res.data, addOrEdit: false })
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Dashboard
        {this.props.profile_pic ? (
          <>
          <img src ={this.props.profile_pic} />
          </>
        ) :(
          <img src = "http://cdn.24.co.za/files/Cms/General/d/5548/0bac98d887364389ab3c691a2d3dca2d.jpg" />
        
        )}
        <h1>{`Hello ${this.props.username}, welcome`}</h1>
        <input type="text" />
        <button onClick={ this.updatePic}>cHANGE PIC</button>
       

      </div>
    )
  }
}
const mapStateToProps = state => {
  const {username,user,password} = state 
  return {username,user,password}
}
export default connect(mapStateToProps,{getPic})(Dashboard)
