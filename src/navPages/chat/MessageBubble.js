import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MessageBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View  style={[this.props.uid?styles.mymsgs:styles.msgs]}>
        <View >
        
          <View style={{borderWidth:1, borderColor:'#49641D', paddingHorizontal:'8%',paddingVertical:'3%', marginTop: '3%', marginHorizontal:'2%', borderRadius:16, backgroundColor:'#f5fcff',  }}>
    {/* <Text>{this.props.title} {this.props.firstName} {this.props.lastName}</Text> */}
    {/* <Text style={{color:'#49641D'}}>{this.props.firstName}</Text> */}
    {/* <Text>{this.props.message.text}</Text> */}
    <Text>{this.props.message}</Text>
    <Text style={{textAlign: 'right', fontSize:11}}>{this.props.datetime.substring(0, this.props.datetime.lastIndexOf("T"))}</Text>

    {/* value.substring(0, value.lastIndexOf("@")) */}

          </View>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  mymsgs:{
alignSelf:'flex-end',
marginLeft:'30%',

  },
  msgs:{
marginRight:'30%',

  }



})