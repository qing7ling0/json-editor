import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  constructor(props) {
    super(props);

    injectTapEventPlugin();
  }

  render() {
    return (
      <div className="root">
          <MainContainer />
      </div>
      
    );
  }
}

export default App;
