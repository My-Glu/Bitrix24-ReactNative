import React, { Component } from 'react';
import { View,StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, TouchableWithoutFeedback } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import MenuMyActivities from './myActivities/MenuMyActivities'

export default class MyActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToNavScreen = () => {

    Actions.navScreen()

  }
  


  render() {

    let popupRef = React.createRef()
    const onShowPopup = () =>{ popupRef.show()}
  const onClosePopup = () =>{ popupRef.close()}

    return (
      <View>
        {/* ---------------------------------header--------------------------------- */}
        <StatusBar backgroundColor="#49641D" animated={true}/>
               <View>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                      <TouchableOpacity
                      onPress={this.goBackToNavScreen}
                      >
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                        </TouchableOpacity>
                }
                    centerComponent={<Text style={{ fontSize:20}}>My Activities</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
            <View style={{flexDirection: 'row'}}>
                <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                
                
                <TouchableOpacity   
                onPress={onShowPopup}
                >
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>
                <MenuMyActivities
title=""
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/>
                </View>     
            
            }
                    // rightComponent={<Text>Done</Text>}
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
               />
        </View>
        {/* -----Header end */}



      </View>
    );
  }
}

