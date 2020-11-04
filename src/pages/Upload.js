import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Window
} from 'react-native';

import ToastExample from '../components/ToastExample';

export default class Upload extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          ToastExample.stealClipboard(ToastExample.LONG);
          ToastExample.getCopiedText(
            (copied_text) => {
              Alert.alert('Clipboard Copied: '+copied_text);
              // Window.alert('Clipboard Copied: '+copied_text);
            }, (error) => {
              Alert.alert(error);
            }
          )
        }}>
          <Text>Copy Text From Clipboard</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});