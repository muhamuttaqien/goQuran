import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Splash extends Component {
    render() {

        const { viewStyle, titleStyle, subtitleStyle } = styles;

        return (
            <View style={ viewStyle }>
                <View>
                    <Text style={ titleStyle }> GoQuran </Text>
                </View>
                <View>
                    <Text style={ subtitleStyle }> Created by muhamuttaqien.com </Text>
                </View>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#5067FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitleStyle: {
        color: 'white',
        fontWeight: '200'
    }
}