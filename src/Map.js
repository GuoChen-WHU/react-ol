import React, { Component } from 'react';
import { number, bool, string, instanceOf } from 'prop-types';
import MapClass from 'ol/Map';
import { findAllByType, invariant } from './utils';

class Map extends Component {
  static propTypes = {
    id: string, // used to distinguish serveral maps in a page
    pixelRatio: number,
    loadTilesWhileAnimating: bool,
    loadTilesWhileInteracting: bool,
    moveTolerance: number
  }

  static defaultProps = {
    id: 'map'
  }

  static childContextTypes = {
    map: instanceOf(MapClass)
  }
  
  getChildContext() {
    return {
      map: this.map
    };
  }
  
  constructor(props) {
    super(props);

    // eslint-disable-next-line no-unused-vars
    const { id, children, ...options } = props;
    const views = findAllByType(children, 'View');
    invariant(views.length === 1, 'Map component requires one and only one View component as a child');

    this.map = new MapClass(options);
  }

  componentDidMount() {
    const { id } = this.props;
    this.map.setTarget(id);
  }

  componentDidUpdate() {

  }

  render() {
    const { id, children } = this.props;

    return <div id={id}>
      {children}
    </div>;
  }
}

export default Map;