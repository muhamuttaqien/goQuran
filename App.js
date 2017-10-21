/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

import Dashboard from './src/components/Dashboard';
import Splash from './src/components/Splash';
import { StackNavigator } from 'react-navigation';

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={ createStore(reducers) }>
            <Splash />
        </Provider>
    );
  }
}