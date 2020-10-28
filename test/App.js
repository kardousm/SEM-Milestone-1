import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as Speech from 'expo-speech';
import TextToSpeech from './screens/TextToSpeech'
import ImageCapture from './screens/ImageCapture'
import * as firebase from 'firebase';
import "firebase/database";
import "firebase/storage";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*
const firebaseConfig = {
  apiKey: "AIzaSyAlmL5SCGZDlu0pieccj_YsxSulPlHTVtg",
  authDomain: "sem-assignment.firebaseapp.com",
  databaseURL: "https://sem-assignment.firebaseio.com",
  projectId: "sem-assignment",
  storageBucket: "sem-assignment.appspot.com",
  messagingSenderId: "223151166275",
  appId: "1:223151166275:web:44879f05fab298831f95f6"
};



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: 'YOYOYOYOYOYOYOYOYOYOYOYO'
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  componentDidMount() {
    var that = this

    firebase.database().ref('/value').on('value', (snapshot) => {
      let temp = snapshot.val()
      console.log(temp.text)
    })
  }

  render () {

    //firebase.database().ref('/value').set({'text':""})

    return (
      <View style={styles.container}>
        <Text>Hi</Text>
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
});

export default App;
*/

const RootStack = createStackNavigator(); 

class App extends Component {

  render () {
    return (
      <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="ImageCapture" component={ImageCapture} options={{ headerShown: false }}/>
        <RootStack.Screen name="TextToSpeech" component={TextToSpeech} options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
}
export default App;