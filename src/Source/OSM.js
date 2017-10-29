import { Component } from 'react';
import { number, string, bool, func, instanceOf } from 'prop-types';
import LayerClass from 'ol/layer/layer';
import OSMClass from 'ol/source/OSM';

class OSM extends Component {
  static displayName = 'Source'

  static propTypes = {
    cacheSize: number,
    crossOrigin: string,
    maxZoom: number,
    opaque: bool,
    reprojectionErrorThreshold: number,
    tileLoadFunction: func,
    url: string,
    wrapX: bool
  }

  static contextTypes = {
    layer: instanceOf(LayerClass)
  }

  constructor(props, context) {
    super(props);
    this.source = new OSMClass(props);
    context.layer.setSource(this.source);
  }

  render() {
    return null;
  }
}

export default OSM;
