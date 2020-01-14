import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

export default class Header extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon style={styles.button}name="angle-down" type='font-awesome' size={24} color="white"/>
                </TouchableOpacity>
                <Text style={styles.message}> Header</Text>
                <TouchableOpacity>
                    <Icon style={styles.button}name='queue-music' type='material-icons' size={24} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        height: 110,
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },
    message: {
      flex: 1,
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.72)',
      fontWeight: 'bold',
      fontSize: 15
    },
    button: {
      opacity: 0.72
    }
  });

  /*<FontAwesome style={styles.button}name="angle-down" size={24} color="white" />
  <MaterialIcons style={styles.button} name="queue-music" size={24} color="white" />*/
