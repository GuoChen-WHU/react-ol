import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import Map from 'ol/Map';

class MapComponent extends Component {
  static propTypes = {
    pixelRatio: number,
    loadTilesWhileAnimating: bool,
    loadTilesWhileInteracting: bool,
    moveTolerance: number,
  }

  static defaultProps = {
    loadTilesWhileAnimating: false,
    loadTilesWhileInteracting: false,
    moveTolerance: 1
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {

  }

  render() {
    return <div id="map"></div>
  }
}

export default MapComponent;