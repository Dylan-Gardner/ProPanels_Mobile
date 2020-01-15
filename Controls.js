import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

export default class Controls extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                  <Icon name='skip-previous' type='material-icons' size={40} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                  <Icon name='pause-circle-filled' type='material-icons' size={90} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name='skip-next' type='material-icons' size={40} color='white'/>
                </TouchableOpacity>
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
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20
    }
  })