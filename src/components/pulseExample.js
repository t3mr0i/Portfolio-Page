import React from 'react';
import Pulse from 'react-reveal/Pulse';

class PulseExample extends React.Component {
  render() {
    return (
      <div>
        <Pulse>
          <h1>{pulser.prop}</h1>
        </Pulse>
      </div>
    );
  }
}

export default PulseExample;