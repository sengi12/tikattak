import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Window
} from 'react-native';

import ClipboardThief from '../components/ClipboardThief';

var isCopied = false;

export default class Upload extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          ClipboardThief.stealClipboard(ClipboardThief.LONG);
          ClipboardThief.getCopiedText(
            (copied_text) => {
              Alert.alert('Clipboard Copied: '+copied_text);
              isCopied = true;
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