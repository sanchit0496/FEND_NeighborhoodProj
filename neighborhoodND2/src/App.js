import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import Header from './components/Header'
import SquareAPI from './components/FourSquareApi';


class App extends Component {
  constructor (){
    super();
    this.state={
      venues:[],
      markers:[],
      center:[],
      zoom: 15,
      updateState :obj=>{
        this.setState(obj)
      }
    }
  }
  

  componentDidMount(){
    SquareAPI.search({
    near:"Bhopal,IN",
    query: "hotel",
    limit: 25  
    }).then(res=>{
      const { venues } = res.response;
      const { center }= res.response.geocode.feature.geometry;
      const markers = venues.map(venue=>{
        return{
          lat: venue.location.lat,
          lng:venue.location.lng,
          isOpen:false,
          isVisible:true,
          id:venue.id
        }
      })
      
    this.setState({
      venues, center, markers
    })
    })
  }
  


  MarkerClick=(marker)=>{
    marker.isOpen = true;
    this.setState({
      markers:Object.assign(this.state.markers,marker)
    })
    const venue = this.state.venues.find(venue=>venue.id===marker.id)
    SquareAPI.getVenuesDetail(marker.id)
    .then(res=> {
      const newVenue = Object.assign(venue,res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue)})
    })
  }

  handleListItem=(venue)=>{
    const marker = this.state.markers.find(marker=>marker.id===venue.id)
    this.MarkerClick(marker)
  }

  render() { 
    
    return (

      <div>
        <Header {...this.state} handleListItem={this.handleListItem} />
        <MapContainer {...this.state} MarkerClick={this.MarkerClick}/>
      </div>
    );
  }
}

export default App;
