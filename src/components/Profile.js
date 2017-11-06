import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Content, Text } from 'native-base';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return(
            <Content style = {{ backgroundColor: '#ffffff' }}>

            </Content>
        )
    };
}