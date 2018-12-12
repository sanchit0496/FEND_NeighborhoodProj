import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
                <li onClick={()=> this.props.handleListItem(this.props)}>{this.props.name} </li>
    )
  }
}
