import React, { Component } from 'react';
import { View, StatusBar, Toolbar } from 'react-native';
// import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
// import Toolbar from './lib/Toolbar';
// import {getColor} from './lib/helpers';
// import Toolbar from 'react-native-toolbar';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <StatusBar backgroundColor="#49641D" animated={true}/>
          <View style={{flex:1}}>
                        <Toolbar ref={(toolbar) => this.toolbar = toolbar}/>
                </View>

        
      </View>
    );
  }

}



