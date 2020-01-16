import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

export default class TrackDetails extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.detailsWrapper}>
        <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.artist}>{this.props.artist}</Text>
                </View>
                <TouchableOpacity>
                    <Icon type='font-awesome' style={styles.button} name='heart-o' size={22} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 24,
      flexDirection: 'row',
      paddingLeft: 45,
      alignItems: 'center',
      paddingRight: 45,
    },
    detailsWrapper: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'left',
    },
    artist: {
      color: 'rgba(255, 255, 255, 0.72)',
      marginTop: 5,
      fontSize: 16,

    },
    button: {
      opacity: 0.72,
    }
  });