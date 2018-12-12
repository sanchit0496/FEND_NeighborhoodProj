import React, { Component } from 'react'
import ListItem from './ListItem';
import Menu from '../images/white.png';
export default class SideList extends Component {
    
    state={
        width:"0px",
        query:"",
        venues:[]
    }
    onClick(){
        this.setState({
            width:'50%'
        })
    }  
    onClose(){
        this.setState({
            width:"0px"
        })
    }
    componentWillReceiveProps(){
        this.setState({
            venues: this.props.venues
        })
    }
    onChange(e){
        this.setState({
            query: e.target.value
        })
        const markers = this.props.venues.map(venue=>{
            const isMatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase())
       
            const marker = this.props.markers.find(marker=>marker.id===venue.id);
            if(isMatched){
                marker.isVisible = true;
            }
            else{
                marker.isVisible = false;
            }
            return marker
        })
        this.props.updateState({markers})
        
        this.handleFilterVenues()
    }
    
  handleFilterVenues()
  {
      if(this.state.query.trim()===""){
          const  venues = this.state.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
          return venues;
      }
      else{
          return this.props.venues; 
      }
  }
  render() {
      
    return (
        <div>
            <img src={Menu} id="menu-icon" alt="menu-icon" onClick={this.onClick.bind(this)}  role="Menu Button"></img>
                <h1>Neighborhood App - React App</h1> 
             <ol id="side-menu" style={{width:this.state.width}}>
                <li href="#" className="btn-close" id="close-button" onClick={this.onClose.bind(this)}  >&times;</li>
                <input type="text" id="queryBox" placeholder="Search Here" onChange={(e)=>this.onChange(e)} value ={this.state.query} role="Search" ></input>

               {this.state.venues&& this.state.venues.map((venue,index)=>(
                    <ListItem key={ index} {...venue} 
                    handleListItem ={this.props.handleListItem}/>
               ))}
            </ol>
      </div>
    )
  }
}


  
 