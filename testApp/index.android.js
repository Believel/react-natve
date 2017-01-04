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
  ListView,
  Alert
} from 'react-native';

export default class testApp extends Component {
  constructor() {
    super()
    const ds = new ListView.dataSource({rowHasChanged:(r1,r2)=>{r1!==r2}})
    this.state = {
      dataSource:ds.cloneWithRows(['小明','小红','Tom','Joke','Lily'])
    }
    
  }
  componentDidMount() {
    Alert.
  }
  render() {
    return (
      <View>
        <ListView
        dataSource ={this.state.dataSource}
        renderRow= {this.renderRow}
         />
      </View>
    );
  }
  renderRow(rowData){
      return (
        <Text>{rowData}</Text>
        )
  }
}


AppRegistry.registerComponent('testApp', () => testApp);
