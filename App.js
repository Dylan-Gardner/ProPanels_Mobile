import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './Header'
import AlbumArt from './AlbumArt'
import TrackDetails from './TrackDetails'
import Controls from './Controls'
import Slider from './Slider'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  seek(time) {
    time = Math.round(time);

    this.setState({
      currentPosition: time,
      paused: false,
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Header message={"Playing from Saved Music"}/>
        <AlbumArt url={require('./kingkrule.jpg')}/>
        <TrackDetails title={"Song"} artist={"Artist"}/>
        <Slider onSeek={this.seek.bind(this)}
                trackLength={210}
                onSlidingStart={() => this.setState({paused: true})}
                currentPosition={20}/>
        <Controls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  text: {
    color: 'white'
  }
});