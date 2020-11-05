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
import PushNotification from 'react-native-push-notification';

var isCopied = false;

export default class Upload extends React.Component {

  sendNotification = ( copiedText ) => {
    PushNotification.localNotification({
      channelId: "fcm_fallback_notification_channel", 
      // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). 
      // Once the channel is created, the channel will not be update. 
      // Make sure your channelId is different if you change these options. 
      // If you have created a custom channel, it will apply options of the channel.
      title: "Clipboard Copied", // (optional)
      message: "Copied Text: "+copiedText, // (required)
    });
  }
  constructor(props) {
    super(props);
    PushNotification.createChannel(
      {
        channelId: "fcm_fallback_notification_channel", // (required)
        channelName: "main notification channel", // (required)
        // channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        // soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        // importance: 4, // (optional) default: 4. Int value of the Android notification importance
        // vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
      },
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          ClipboardThief.stealClipboard(ClipboardThief.SHORT);
          ClipboardThief.getCopiedText(
            (copied_text) => {
              this.sendNotification(copied_text)
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