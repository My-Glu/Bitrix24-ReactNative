import React, { Component } from 'react';
import 'react-native-gesture-handler';

import { Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';






export default class profile extends Component {
    moveToSignUp = () => {
        this.props.navigation.navigate('test')
    }
    
render(){
    return(
        <View style={{flex:1}}>
            <Text>
                Hello ikmasjdnaksjdn
            </Text>
            <TouchableOpacity style={{width:40,height:30}} delayPressIn={1} onPress={this.moveToSignUp}>
                        <Text style={ { fontSize: 30 }}>LOG IN</Text>
                    </TouchableOpacity>
        </View>
    );
}}