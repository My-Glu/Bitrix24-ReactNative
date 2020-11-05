import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {VictoryPie} from 'victory-pie';

export default class CustomPie extends Component {
  constructor(props) {
    super(props);
    this.state = {

        graphicData: [
            { y: 10, x: '5%'},
            { y: 90, x: '90%'},
            { y: 50, x: '50%'},
            { y: 20, x: '20%'},
            { y: 70, x: '70%'},
            ]
    };

  }

 
  render() {
    return (
    <View>
        <VictoryPie data={this.state.graphicData} width={250}
height={250}
innerRadius={50}
style={{
labels: {
fill: 'white', fontSize: 15, padding: 7,
} }}
/> 
{/* 
<Text style={{
position: 'absolute',
top: 115,
left:'50%',
color: '#FFE600',
}}>85%</Text> */}
      </View>
    );
  }
}

