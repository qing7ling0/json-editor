import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
        <MuiThemeProvider>
          <MainContainer />
        </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;
