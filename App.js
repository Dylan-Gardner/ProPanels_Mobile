import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import AlbumArt from './AlbumArt'
import TrackDetails from './TrackDetails'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AlbumArt/>
      <TrackDetails/>
    </View>
  );
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