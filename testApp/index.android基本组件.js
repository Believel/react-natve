/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
   
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class testApp extends Component {
  render() {
    return (
       <ScrollView>
          <Text>Hello World</Text>
          {//项目的图片的引用方式}
          <Image source={require('./tmp/sc.jpg')}/>
          {//网络资源的图片，一定要手动的指定宽高}
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />
        <TextInput/>
        <Text style={styles.bigblue}>我是小明</Text>

       </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'700',
    fontSize:30
  }
})

AppRegistry.registerComponent('testApp', () => testApp);
