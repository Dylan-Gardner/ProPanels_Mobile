import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';


function pad(n, width, z=0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  
  const minutesAndSeconds = (position) => ([
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2),
  ]);

  export default class Header extends Component {
    render(){
        var currentPosition = 20;
        var trackLength=200;
        const elapsed = minutesAndSeconds(currentPosition);
        const remaining = minutesAndSeconds(trackLength - currentPosition);
        return(
            <View style={styles.container}>
                <Slider
                    maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                    value={currentPosition}
                    style={styles.slider}
                    thumbTintColor='#fff'
                    minimumTrackTintColor='#fff'
                    maximumTrackTintColor='rgba(255, 255, 255, 0.3)'
                    />
                <View style={styles.textCont}>
                    <Text style={styles.text}>
                        {elapsed[0] + ":" + elapsed[1]}
                    </Text>
                    <View style={{flex: 1}} />
                    <Text style={[styles.text, {width: 40}]}>
                        {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slider: {
      marginTop: 0,
    },
    container: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 16,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.72)',
      fontSize: 13,
      textAlign:'center',
    },
    textCont: {
      flexDirection: 'row',
      paddingLeft: 15,
      paddingRight: 15
    }
  });

