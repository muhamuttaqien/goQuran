import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Container, Body, Text, Header, Content, Card, CardItem, Left, Right, Button, Icon, Badge, Title, Footer, FooterTab } from 'native-base';

const Dashboard = (props) => {
    return (
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
                        <Body>
                            <Text>GoQuran (Dev. Version)</Text>
                        </Body>
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
            <Footer>
                <FooterTab>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

export default Dashboard;