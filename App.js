
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/redux/index';
import AppNavigator from './app/navigations/AppNavigator';
import { NativeBaseProvider } from 'native-base';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.disableYellowBox = true;
    const store = configureStore();
  return (
    <NativeBaseProvider>
      <Provider store={store}>      
        <AppNavigator/>
      </Provider>
    </NativeBaseProvider>
    );
  }
};
export default App;
