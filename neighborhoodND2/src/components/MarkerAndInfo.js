/* global google */
import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";

const MarkerInfo = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{lat: 23.2599,
      lng: 77.4126}}
  >
    {props.markers && props.markers.filter(marker=> marker.isVisible).map((marker,indx,animate)=>{
     const venueInfo = props.venues.find(venue=> venue.id ===marker.id);
     return(
    <Marker key={indx} position={{  lat: marker.lat, lng: marker.lng }} onClick={()=>props.MarkerClick(marker)}
      animation={animate.length === 1 ? google.maps.Animation.BOUNCE:google.maps.Animation.DROP}
    >
        {marker.isOpen && venueInfo.bestPhoto &&(
        <InfoWindow>
          <React.Fragment>
          <img src={`${venueInfo.bestPhoto.prefix}55x60${venueInfo.bestPhoto.suffix}`} alt="Venue Photos"/>
          <p>{venueInfo.name}</p>
          </React.Fragment>
        </InfoWindow>)}
        
    </Marker>)})}
  </GoogleMap>
)) 

export default MarkerInfo;
