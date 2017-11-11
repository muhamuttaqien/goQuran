import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Container, Body, Drawer, Text, Header, Content, Card, CardItem, Left, Right, Button, Icon, Badge, Title, Footer, FooterTab } from 'native-base';

import SideBar from './SideBar';
import Profile from './Profile';
import DetailProfile from './DetailProfile';
import { StackNavigator } from 'react-navigation';

class Dashboard extends Component<{}> {

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    static navigationOptions = {
        header: null,
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >

            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress = {() => this.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress = {() => navigate('Profile')}>
                            <Icon name='person' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <Card>
                        <CardItem header>
                            <Body>
                                <Text>iQuran (Dev. Version)</Text>
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
            </Container>

            </Drawer>
        );
    }
};

const AppInit = StackNavigator({
    Dashboard: { screen: Dashboard },
    Profile: { screen: Profile },
    DetailProfile: { screen: DetailProfile },
});

export default class App extends Component<{}> {
    render() {
        return <AppInit />
    }
}