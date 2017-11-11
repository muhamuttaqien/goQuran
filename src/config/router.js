import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import DetailProfile from '../components/DetailProfile';

const AppInit = StackNavigator({
    Dashboard: { screen: Dashboard },
    Profile: { screen: Profile },
    DetailProfile: { screen: DetailProfile },
});

export default class Router extends Component<{}> {
    render() {
        return <AppInit />
    }
}