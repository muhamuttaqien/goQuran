import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import DetailProfile from '../components/DetailProfile';

const DetailProfileTabs = TabNavigator({
    DetailProfile: { screen: DetailProfile },
    Dashboard: { screen: Dashboard },
});

const AppInit = StackNavigator({
    Dashboard: { screen: Dashboard },
    Profile: { screen: Profile },
    DetailProfile: { screen: DetailProfileTabs },
});

export default class Router extends Component<{}> {
    render() {
        return <AppInit />
    }
}