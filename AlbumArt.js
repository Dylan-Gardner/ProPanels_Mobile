import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'

export default class AlbumArt extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('./kingkrule.jpg')} />
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');
const imageSize = width - 90;

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 45,
        paddingRight: 45,
    },
    image: {
        marginTop: 20,
        marginBottom: 20,
        width: imageSize,
        height: imageSize,
    },
    text: {
        color: "#fff"
    }
})