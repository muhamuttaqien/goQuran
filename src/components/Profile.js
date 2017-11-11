import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Button, Content, Text } from 'native-base';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render() {

        const { navigate } = this.props.navigation;

        return(
            <Content>
                <Button transparent onPress = {() => navigate('DetailProfile')}>
                    <Text>Detail</Text>
                </Button>
            </Content>
        )
    };
}
