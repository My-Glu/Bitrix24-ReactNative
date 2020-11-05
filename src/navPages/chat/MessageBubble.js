import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MessageBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View>
        <View>
        
          <View style={{borderWidth:1, borderColor:'#49641D', padding:'3%', marginTop: '3%', marginHorizontal:'2%', borderRadius:16}}>
          <Text>MessageBubblesdhgfhgs fhgsdfhgsdfhg hello hi school janaa haiMessageBubblesdhgfhgs fhgsdfhgsdfhg hello hi school jana hai</Text>
          <Text style={{textAlign: 'right'}}>6:20 pm</Text>
          </View>

        </View>
      </View>
    );
  }
}
