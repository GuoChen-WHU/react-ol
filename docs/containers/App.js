import React, { Component } from 'react';
import { Map, View, Layer, Source } from 'react-ol';
import './App.less';

class App extends Component {
  render() {
    return (
      <Map>
        <View center={[0, 0]} zoom={10} />
        <Layer.Tile>
          <Source.OSM />
        </Layer.Tile>
      </Map>
    );
  }
}

export default App;
