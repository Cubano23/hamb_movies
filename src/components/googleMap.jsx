import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.695760,
      lng: 1.855180
    },
    zoom: 13
  };
  render() {
    return (      
      <div style={{ height: '450px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCj1WXac3GB4wVd3RKyDm1xyauSLAnoAKg"  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >          
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;