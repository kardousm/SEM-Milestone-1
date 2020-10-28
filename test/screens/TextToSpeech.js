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


/*
com.apple.ttsbundle.Maged-compact Maged AVSpeechSynthesisVoiceQuality ar-SA
com.apple.ttsbundle.Zuzana-compact Zuzana AVSpeechSynthesisVoiceQuality cs-CZ
com.apple.ttsbundle.Sara-compact Sara AVSpeechSynthesisVoiceQuality da-DK
com.apple.ttsbundle.Anna-compact Anna AVSpeechSynthesisVoiceQuality de-DE
com.apple.ttsbundle.Melina-compact Melina AVSpeechSynthesisVoiceQuality el-GR
com.apple.ttsbundle.Karen-compact Karen AVSpeechSynthesisVoiceQuality en-AU
com.apple.ttsbundle.Daniel-compact Daniel AVSpeechSynthesisVoiceQuality en-GB
com.apple.ttsbundle.Moira-compact Moira AVSpeechSynthesisVoiceQuality en-IE
com.apple.speech.synthesis.voice.Fred Fred AVSpeechSynthesisVoiceQuality en-US
com.apple.ttsbundle.Samantha-compact Samantha AVSpeechSynthesisVoiceQuality en-US
com.apple.ttsbundle.Tessa-compact Tessa AVSpeechSynthesisVoiceQuality en-ZA
com.apple.ttsbundle.Monica-compact Monica AVSpeechSynthesisVoiceQuality es-ES
com.apple.ttsbundle.Paulina-compact Paulina AVSpeechSynthesisVoiceQuality es-MX
com.apple.ttsbundle.Satu-compact Satu AVSpeechSynthesisVoiceQuality fi-FI
com.apple.ttsbundle.Amelie-compact Amelie AVSpeechSynthesisVoiceQuality fr-CA
com.apple.ttsbundle.Thomas-compact Thomas AVSpeechSynthesisVoiceQuality fr-FR
com.apple.ttsbundle.Carmit-compact Carmit AVSpeechSynthesisVoiceQuality he-IL
com.apple.ttsbundle.Lekha-compact Lekha AVSpeechSynthesisVoiceQuality hi-IN
com.apple.ttsbundle.Mariska-compact Mariska AVSpeechSynthesisVoiceQuality hu-HU
com.apple.ttsbundle.Damayanti-compact Damayanti AVSpeechSynthesisVoiceQuality id-ID
com.apple.ttsbundle.Alice-compact Alice AVSpeechSynthesisVoiceQuality it-IT
com.apple.ttsbundle.Kyoko-compact Kyoko AVSpeechSynthesisVoiceQuality ja-JP
com.apple.ttsbundle.Yuna-compact Yuna AVSpeechSynthesisVoiceQuality ko-KR
com.apple.ttsbundle.Ellen-compact Ellen AVSpeechSynthesisVoiceQuality nl-BE
com.apple.ttsbundle.Xander-compact Xander AVSpeechSynthesisVoiceQuality nl-NL
com.apple.ttsbundle.Nora-compact Nora AVSpeechSynthesisVoiceQuality no-NO
com.apple.ttsbundle.Zosia-compact Zosia AVSpeechSynthesisVoiceQuality pl-PL
com.apple.ttsbundle.Luciana-compact Luciana AVSpeechSynthesisVoiceQuality pt-BR
com.apple.ttsbundle.Joana-compact Joana AVSpeechSynthesisVoiceQuality pt-PT
com.apple.ttsbundle.Ioana-compact Ioana AVSpeechSynthesisVoiceQuality ro-RO
com.apple.ttsbundle.Milena-compact Milena AVSpeechSynthesisVoiceQuality ru-RU
com.apple.ttsbundle.Laura-compact Laura AVSpeechSynthesisVoiceQuality sk-SK
com.apple.ttsbundle.Alva-compact Alva AVSpeechSynthesisVoiceQuality sv-SE
com.apple.ttsbundle.Kanya-compact Kanya AVSpeechSynthesisVoiceQuality th-TH
com.apple.ttsbundle.Yelda-compact Yelda AVSpeechSynthesisVoiceQuality tr-TR
com.apple.ttsbundle.Ting-Ting-compact Ting-Ting AVSpeechSynthesisVoiceQuality zh-CN
com.apple.ttsbundle.Sin-Ji-compact Sin-Ji AVSpeechSynthesisVoiceQuality zh-HK
com.apple.ttsbundle.Mei-Jia-compact Mei-Jia AVSpeechSynthesisVoiceQuality zh-TW

*/