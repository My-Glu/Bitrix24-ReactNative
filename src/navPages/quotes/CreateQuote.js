import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class CreateQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToAllQuotes = () => {
   
    Actions.allQuotes()

 }

//   gotoNewEvent = () => {
//     Actions.newEvent()
//  }


  render() {
    return (
      <View style={{marginTop:-20,}}>
         {/* ---------------------------------header--------------------------------- */}
         <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToAllQuotes}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Create Quote</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
            <View>

            {/* <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon> */}
            <TouchableOpacity    
            //  onPress={this.gotoNewEvent}
            >
                <Text style={{fontSize:14}} >Save</Text>
            {/* <Icon name="add" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 26 }}></Icon> */}
           </TouchableOpacity>
          
           </View> 
   
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}
      </View>
    );
  }
}
