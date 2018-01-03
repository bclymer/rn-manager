import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import AppWithNavigationState from './src/routers/AppNavigator';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDlJfZkgV4wxy3D4fg1ZwaodNbe9udbovE',
      authDomain: 'manager-41474.firebaseapp.com',
      databaseURL: 'https://manager-41474.firebaseio.com',
      projectId: 'manager-41474',
      storageBucket: 'manager-41474.appspot.com',
      messagingSenderId: '46301841593',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
