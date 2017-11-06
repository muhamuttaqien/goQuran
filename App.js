import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

import Splash from './src/components/Splash';
import Dashboard from './src/components/Dashboard';

export default class SplashScreen extends Component<{}> {
  render() {
    return (
        <Provider store={ createStore(reducers) }>
            <Dashboard />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});