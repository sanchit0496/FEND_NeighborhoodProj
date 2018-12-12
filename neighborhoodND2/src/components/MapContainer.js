import React, { Component } from 'react';
import MarkerInfo  from './MarkerAndInfo'


class MapContainer extends Component {
  render() {
    
    return (
      <div>
        <MarkerInfo
            {...this.props}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDvGl2gxQejfksz54wcgHsOe438sGR4Fzc"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div id="MapContainer" />}
            mapElement={<div style={{ height: `100%` }} />}

          />
      </div>
    )
  }
}
export default MapContainer;