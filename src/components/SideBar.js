import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { Button, Container, Content, Header, List, ListItem, Separator, Text } from 'native-base';

export default class SideBar extends Component {

    render() {
        return(
            <Content style = {{ backgroundColor: '#ffffff' }}>
                <Separator bordered>
                    <Text>MAIN MENU</Text>
                </Separator>
                <ListItem>
                    <TouchableOpacity><Text>Dashboard</Text></TouchableOpacity>
                </ListItem>
                <ListItem>
                    <Text>Goal</Text>
                </ListItem>
                <ListItem>
                    <Text>Progress</Text>
                </ListItem>
                <Separator bordered>
                    <Text>SETTINGS</Text>
                </Separator>
                <ListItem>
                    <Text>Monitoring</Text>
                </ListItem>
                <ListItem>
                    <Text>Motivation</Text>
                </ListItem>
                <ListItem>
                    <Text>About</Text>
                </ListItem>
            </Content>
        )
    };
}