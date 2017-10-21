/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

import { Container, Header, Content, Card, CardItem, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class App extends Component<{}> {
  render() {
    return (
        //<Provider store={ createStore(reducers) }></Provider>
        <Container>
            <Header style={{ backgroundColor: '#5067FF' }}>
                <Left>
                    <Button transparent>
                        <Icon name='home' />
                    </Button>
                </Left>
                <Body>
                    <Title>Dashboard</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>

            <Content>
                <Card>
                    <CardItem header>
                        <Text>GoQuran (Dev. Version)</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                This is an app for al-Qur'an using react-native, react-redux, vector-icons and native base UI template.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}