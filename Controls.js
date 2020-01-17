import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

export default class Controls extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.smallButtons} onPress={this.props.onPressShuffle}>
                  { this.props.shuffleOn ?
                    <Icon name='shuffle' type='material-icons' size={30} color='green' /> :
                    <Icon name='shuffle' type='material-icons' size={30} color='white' />
                  }
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onBack}>
                  <Icon name='skip-previous' type='material-icons' size={40} color='white'/>
                </TouchableOpacity>
                { !this.props.paused ?
                  <TouchableOpacity style={styles.playButton} onPress={this.props.onPressPause}>
                    <Icon name='pause-circle-filled' type='material-icons' size={90} color='white'/>
                  </TouchableOpacity> :
                  <TouchableOpacity style={styles.playButton} onPress={this.props.onPressPlay}>
                    <Icon name='play-circle-filled' type='material-icons' size={90} color='white'/>
                  </TouchableOpacity>
                }
                <TouchableOpacity onPress={this.props.onForward}>
                  <Icon name='skip-next' type='material-icons' size={40} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smallButtons} onPress={this.props.onPressRepeat}>
                { this.props.repeatOn ?
                    <Icon name='repeat' type='material-icons' size={30} color='green' /> :
                    <Icon name='repeat' type='material-icons' size={30} color='white' />
                  }
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
    },
    smallButtons: {
      paddingLeft: 20,
      paddingRight: 20
    }
  })