import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class Controls extends Component {
    render(){
        return(
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 8,
    },
    playButton: {
      height: 72,
      width: 72,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 72 / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryControl: {
      height: 18,
      width: 18,
    },
    off: {
      opacity: 0.30,
    }
  })