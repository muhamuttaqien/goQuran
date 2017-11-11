import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Body, Card, CardItem, Content, Text } from 'native-base';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    render() {

        return(
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                Detail Profile Page.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    };
}
