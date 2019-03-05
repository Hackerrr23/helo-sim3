import React, { Component } from 'react'
import {connect} from "react-redux"
import {getPic} from "../../ducks/reducer"
import "./Dashboard.css"
export class Dashboard extends Component {
  render() {
    console.log(this.state,this.props)
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
        
      </div>
    )
  }
}
const mapStateToProps = state => {
  const {username,user} = state 
  return {username,user}
}
export default connect(mapStateToProps,{getPic})(Dashboard)
