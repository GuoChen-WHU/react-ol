# react-ol

OpenLayers for React.

## Getting Started

```shell
npm install react-ol
```

```js
import React, { Component } from 'react';
import { Map, View, Layer, Source } from 'react-ol';
const { Tile } = Layer;
const { OSM } = Source;

class App extends Component {
  render() {
    return (
      <Map>
        <View center={[0, 0]} zoom={10} />
        <Tile>
          <OSM />
        </Tile>
      </Map>
    );
  }
}

export default App;
```

## API

## FAQ

## Contributions

Yes please! I'm actively working to reach a 1.0.0 release, and I would love your help to get there.