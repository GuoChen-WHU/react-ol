import { Component } from 'react';
import { number, bool, string, oneOfType, arrayOf, instanceOf } from 'prop-types';
import MapClass from 'ol/Map';
import ViewClass from 'ol/View';

class View extends Component {
  static propTypes = {
    center: arrayOf(number),
    constrainRotation: oneOfType([bool, number]),
    enableRotation: bool,
    extent: arrayOf(number),
    maxResolution: number,
    minResolution: number,
    maxZoom: number,
    minZoom: number,
    projection: string,
    resolution: number,
    resolutions: arrayOf(number),
    rotation: number,
    zoom: number,
    zoomFactor: number
  }

  static contextTypes = {
    map: instanceOf(MapClass)
  }

  constructor(props, context) {
    super(props);
    this.view = new ViewClass(props);
    context.map.setView(this.view);
  }

  componentDidMount() {
    
  }
  componentDidUpdate() {

  }

  render() {
    return null;
  }
}

export default View;