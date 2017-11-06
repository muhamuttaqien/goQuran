import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class Splash extends Component {
    render() {

        const { viewStyle, titleStyle, subtitleStyle } = styles;

        return (
            <Image
                source={ require('../assets/images/quran-background.png') }
                style = { styles.imageStyle }>
                <View style = { styles.viewStyle }>
                    <View>
                        <Text style={ titleStyle }> iQuran </Text>
                    </View>
                    <View>
                        <Text style={ subtitleStyle }> Created by muhamuttaqien.com </Text>
                    </View>
                </View>
            </Image>
        )
    }
}

const styles = {
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    viewStyle: {
        backgroundColor: 'rgba(104,185,207,0.90)', // #68B9CF
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    subtitleStyle: {
        color: 'white',
        fontWeight: 'normal'
    }
}
