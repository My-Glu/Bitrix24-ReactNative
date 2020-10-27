import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default class SwitchUser extends Component {
    constructor(props) {  
        super(props);  
   
    }  

   goToLoginScreen = () => {

    Actions.login()

  }

  render() {
    return (
      <View>

{/* ---------------------------------header--------------------------------- */}

       <View style={{ marginTop:-20,}}>
       <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goToLoginScreen}
              >
                <Icon name="add" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Switch User</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
        <Icon name="pencil" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 20 }}></Icon>
               
    
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />
</View>
{/* -----Header end */}
{/* -----Header end */}

{/* item one  */}
          <View>
        <View>
        <View style={{flexDirection: 'row', display: 'flex',alignItems: 'center',marginBottom:20}}>
  <View style={{marginStart:'10%',marginEnd:'10%', marginVertical:'5%'}}>
   <View  style={styles.circle}>
    <Text style={{width: 60}}>Image</Text>
  </View>
  </View>
<View>
    <Text>Shahid Saleem</Text>
    <Text style={{ color: '#C0C0C0' }}>+923007860123</Text>

</View>

<View >
{/* <Image style={{alignSelf:'flex-end' ,marginEnd:'10%'}} source={require('.././assets/images/arrowright.png')} /> */}

</View>

  </View>
 
</View>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({

    circle :{
        height : 60,
        width :60,
        borderRadius: 100,
        borderColor: '#49641D',
        borderWidth:2,
        justifyContent: "center", 
        paddingHorizontal: 5,
       },
       textTitle: {
       
        fontSize: 20,
        
    },

})