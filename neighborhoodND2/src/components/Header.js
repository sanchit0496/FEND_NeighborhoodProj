import React, { Component } from 'react'

import SideList from './SideList';

export default class Header extends Component {
  
  render() {
    return (
        <div className="heading">
      <SideList {...this.props} handleListItem ={this.props.handleListItem}/>
</div>  

    )
  }
}
