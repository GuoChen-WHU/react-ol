import { Component } from 'react';
import { number, bool, arrayOf, instanceOf } from 'prop-types';
import MapClass from 'ol/map';
import TileClass from 'ol/layer/tile';
import { findAllByType, invariant } from '../utils';

class Tile extends Component {
  static displayName = 'Layer'

  static propTypes = {
    opacity: number,
    preload: number,
    visible: bool,
    extent: arrayOf(number),
    minResolution: number,
    maxResolution: number,
    useInterimTilesOnError: bool,
    zIndex: number
  }

  static contextTypes = {
    map: instanceOf(MapClass)
  }

  static childContextTypes = {
    layer: instanceOf(TileClass)
  }

  getChildContext() {
    return {
      layer: this.layer
    };
  }

  constructor(props, context) {
    super(props);

    const { children, ...options } = props;
    const source = findAllByType(children, 'Source');
    invariant(source.length === 1, 'Layer component requires a source component as child');

    this.layer = new TileClass(options);
    context.map.addLayer(this.layer);
  }

  componentDidMount() {

  }

  render() {
    return this.props.children;
  }
}

export default Tile;
