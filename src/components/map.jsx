import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class googleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.695760,
      lng: 1.855180
    },
    zoom: 11
  };

  render() {
    return (
      
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCj1WXac3GB4wVd3RKyDm1xyauSLAnoAKg"  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.695760}
            lng={1.855180}
           
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default googleMap;