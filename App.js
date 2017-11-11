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
import AppInit from './src/config/router';

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={ createStore(reducers) }>
            <AppInit />
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