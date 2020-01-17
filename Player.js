import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './Header'
import AlbumArt from './AlbumArt'
import TrackDetails from './TrackDetails'
import Controls from './Controls'
import Slider from './Slider'

export default class Player extends Component {
  constructor(props){
    super(props);
    this.state = {
      paused: true,
      totalLength: 100,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
      liked: false
    };
  }

  seek(time) {
    time = Math.round(time);

    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    /*if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      //this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      //this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }*/
    console.log('onBack Called');
  }

  onForward() {
    /*if (this.state.selectedTrack < this.props.tracks.length - 1) {
      //this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    } */
    console.log('onForward Called');
  }


  render(){
    return (
      <View style={styles.container}>
        <Header message={"Playing from Saved Music"}/>
        <AlbumArt url={require('./kingkrule.jpg')}/>
        <TrackDetails title={"Song"} artist={"Artist"} liked={this.state.liked} 
                      likedCallback={() => this.setState({liked: !this.state.liked})}/>
        <Slider onSeek={this.seek.bind(this)}
                trackLength={this.state.totalLength}
                onSlidingStart={() => this.setState({paused: true})}
                currentPosition={this.state.currentPosition}/>
        <Controls 
          onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
          repeatOn={this.state.repeatOn}
          shuffleOn={this.state.shuffleOn}
          //forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
          onPressPlay={() => this.setState({paused: false})}
          onPressPause={() => this.setState({paused: true})}
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused}/>
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