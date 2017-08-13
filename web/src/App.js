import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './containers/MainContainer';


class App extends Component {
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
