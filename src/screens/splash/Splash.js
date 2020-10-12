import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    //   <View >

          <View style={styles.container}>
            
            <Image source={require('../../assets/images/noorgrplogo3x.png')}
              resizeMode="contain" 
              style={{width: 200}}
                 />

          </View>

    //  </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
          justifyContent: "center",
          alignItems: "center"
    },
    image: {
        width: 200,
        
       
    },
  
 
  });