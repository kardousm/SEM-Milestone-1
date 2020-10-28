import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

export default class TextToSpeech extends Component {

  state = {
    text_speak: "Practice your reading skill and improve your English, learn new vocabulary and broaden your general knowledge via our specifically chosen interesting topics below.",
    isPlaying: false,
    isPaused: false

  }

  //multiple languages, chinese is zh-cmn. Supports multiple voices. Can pause, resume, stop etc...

  onSpeak = () => {
    Speech.speak(this.state.text_speak, {
      language: 'en',
      pitch: 1,
      rate: 1,
      voice: 'com.apple.ttsbundle.Samantha-compact'
    })
  }

  onPause = () => {
    Speech.pause()
    this.setState({
      isPlaying: false,
      isPaused: true
    })
  }

  onResume = () => {
    Speech.resume()
    this.setState({
      isPlaying: true,
      isPaused: false
    })
  }

  onStop = () => {
    Speech.stop()
    this.setState({
      isPlaying: false,
      isPaused: false
    })
  }

  handlePlayPauseResume = () => {
    const { isPlaying, isPaused } = this.state
    
    if(isPlaying) {
      this.onPause()
    } else if(isPaused) {
      this.onResume()
    } else {
      this.onSpeak()
    }

    this.setState({
      isPlaying: !isPlaying
    })
  }

  render () {
      return (
        <View style={styles.container}>
          
          <Image 
          style={styles.inputImage}
          source={require('../example.png')}
          />

          <View style={styles.controls}>  
            <TouchableOpacity style={styles.control} onPress={this.handlePlayPauseResume}>
            {this.state.isPlaying ? (
              <Ionicons name='ios-pause' size={48} color='#444' />
            ) : (
              <Ionicons name='ios-play-circle' size={48} color='#444' />
            )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.control} onPress={this.onStop}>
              <Ionicons name='ios-square' size={48} color='#444' />
            </TouchableOpacity>

          </View>
        </View>
    );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputImage: {
    width: 300,
    height: 500
  },
  controls: {
    flexDirection: 'row'
  },
  control: {
    margin: 20
  }
});
