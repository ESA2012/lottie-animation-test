import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './App.styles';

export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={() => this.animation.play()}>
          <LottieView
            source="data.json"
            ref={(c) => { this.animation = c; }}
            imageAssetsFolder="images"
            style={{ height: 300, width: 210 }}
            loop={false}
            hardwareAccelerationAndroid
          />
        </TouchableOpacity>
      </View>
    );
  }
}

