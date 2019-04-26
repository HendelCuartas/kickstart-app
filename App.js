/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
Platform,
StyleSheet,
Text,
View,
TextInput,
Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {
    super();
    this.state = {};
    this.state.userName = "HELLO NATIVE WORLD!";
    this.state.titleWidth = 0;
    this.state.titleHeight = 0;
    this.state.contentHeight = 0;
    this.state.buttonWidth = 0;
    this.state.buttonHeight = 0;
    this.titleHandle = 0;
  }

  handleChangeUserName = (text) => {
    this.setState({
      userName: text
    });
  }

  onLayoutTitle = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      titleWidth: width,
      titleHeight: height
    });
  }

  onLayoutContent = (event) => {
    const { height } = event.nativeEvent.layout;
    this.setState({
      contentHeight: height
    });
  }

  onLayoutButton = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      buttonWidth: width,
      buttonHeight: height
    });
  }

  render() {
    const { titleWidth, contentHeight, buttonWidth, buttonHeight, titleHeight } = this.state;
    return (
      <View style={[styles.container]}>
        <View style={styles.backgroundTwo}></View>
        <Text onLayout={this.onLayoutTitle} style={[styles.title, { transform: [{ translateX: -(titleWidth / 2) }, { translateY: -(titleHeight / 2) }] }]}>kickstart</Text>
        <View onLayout={this.onLayoutContent} style={[styles.content, styles.centerFlex, { transform: [{ translateY: (contentHeight / 2) }] }]}>
          <View style={[styles.inputContainer, styles.centerFlex]}>
            <Text>User</Text>
            <TextInput
              onChangeText={this.handleChangeUserName}
            />
          </View>
          <View style={[styles.inputContainer, styles.centerFlex]}>
            <Text>Password</Text>
            <TextInput
              onChangeText={this.handleChangeUserName}
            />
          </View>
        </View>
        <View onLayout={this.onLayoutButton} style={[styles.centerFlex, styles.button, { transform: [{ translateX: -(buttonWidth / 2) }, { translateY: (buttonHeight / 2) }] }]}>
          <Button title="LOG IN" color="#573468"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#573468'
  },
  content: {
    position: 'absolute',
    bottom: '40%',
    left: '5%',
    width: '90%',
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1.5 },
    shadowColor: '#573468',
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 2,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '90%',
    height: 'auto',
    margin: 10,
    borderBottomColor: '#573468',
    borderBottomWidth: 0.2
  },
  title: {
    position: 'absolute',
    top: '22.5%',
    left: '50%',
    fontSize: 60,
    margin: 0,
    fontFamily: 'DokdoRegular',
    color: 'white'
  },
  button: {
    margin: 5,
    position: 'absolute',
    bottom: '11.5%',
    left: '50%'
  },
  backgroundOne: {
    position: 'absolute',
    top: '-20%',
    left: '50%',
    width: 600,
    height: 600,
    backgroundColor: '#d9b0de',
    borderRadius: 400
  },
  backgroundTwo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
    backgroundColor: '#FFFFFF'
  },
});
