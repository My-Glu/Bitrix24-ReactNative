import React, { Component } from 'react';
import {View, StyleSheet, Text,TextInput, Image,Dimensions, ScrollView,Button, Alert, TouchableOpacity} from 'react-native';
// import styles from "./style";
// import { Button } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {CheckBox} from '@react-native-community/checkbox' 
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from '.././forgetPassword/ForgetPassword';
// import {Actions} from 'react-native-router-flux'

import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class SetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        confirmPassword:'',
        responseData:{},
      username: '',
    password: '',
       message: '',
      isLogIn: false
    };
  }

  goToDashboard = () => {
    // Actions.navScreen()
    // Actions.navScreen({onBack: () => console.log('custom back callback') });
    Actions.navScreen({onBack: () => Actions.login()});
 }

 Login= async()=> {

    const response = await fetch(`http://34.210.75.190/api/login?email=${this.props.email}&password=${this.state.password}&password_confirmation=${this.state.confirmPassword}`,
    {method: 'POST',
    headers: {
    'Content-Type': 'application/json'},
    // body: JSON.stringify({
    //   // "provider": "email",
    //   "data":
    //    {
    //       "email": this.state.username,
    //       "password": this.state.password
    //   }
    // })
    }).then((response) => response.json())
    .then((res) => {
  // if(typeof(res.message) != "undefined"){
  //  Alert.alert("Error1", "Error: "+ res.message);
  // }else
  
   if(res.status == 0){
    Alert.alert("Response0", "Status: "+ res.status +"\n Message "+res.message);
  }else if(res.status === 1){
    Alert.alert("Response1", "Error: "+ res.status +" "+res.message);
  }else if(res.status === 2){
    // {this.goToDashboard}
    Actions.login({onBack: () => Actions.login()});
    // Actions.onboard(this, this.state.username, this.state.password);
    // Actions.onboard({email: this.state.username, password: this.state.password});
    // Alert.alert("Response", "Status: "+ res.status +"\nMessage: "+res.message);
  }
  else{
    // this.setState({ auth_token: res.auth_token });
    Alert.alert("Oops", "Something went wrong");
    }
  }).catch((error) => {
     console.error(error);
    });
  
    // const json = await response.json()
    // // .then((response) => response.json())
    //  .catch((error) => console.warn("fetch error:", error))
    // this.setState({data: json.results});
  
  }
  

  render() {
    return (
      
        <ScrollView style={{backgroundColor: 'white'}}>
      
        <View style={styles.container}>
        
            <Image source={require('../../assets/images/noorgrplogo3x.png')}
             resizeMode="center" 
              style={styles.image}
                />

              <Text style={styles.textTitle }>LOGIN</Text>
              
{/* ------------------------------Horizontal line -------------------------------------- */}
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <View style={{flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 20, }} />

               </View>

               {/* <View style={{flex: 1, height:10}}></View> */}

{/*-------------------------------- input email ------------------------------------- */}
           
<View style={styles.containerInput}>
               <View style={styles.SectionStyle}>

               <Icon name="user" style={{fontSize:22,paddingRight:5,paddingLeft:5,color:'#00000029'}} />

                        <TextInput
                         style={{flex:1}}
                         placeholder="Enter Your Email Here"
                         value={this.props.email}
                         underlineColorAndroid="transparent"
                         onChangeText={ input =>
                         this.setState({username : input }) }
                                />
                 </View>
                </View>
           
           {/* ------------------------------input password -------------------------------------*/}

<View style={styles.containerInput}>
               <View style={styles.SectionStyle}>

               <Icon name="lock" style={{fontSize:22,paddingRight:5,paddingLeft:5,color:'#00000029'}} />

                        <TextInput
                        style={{flex:1}}
                         placeholder="Enter Your Password Here"
                         underlineColorAndroid="transparent"
                         pass={true}
                         secureTextEntry={true}
                         onChangeText={ TextInputValue =>
                           this.setState({password : TextInputValue }) }
                                />

                 </View>
                </View>

{/* --------------------Confirm Password------------------------------ */}


<View style={styles.containerInput}>
               <View style={styles.SectionStyle}>

               <Icon name="lock" style={{fontSize:22,paddingRight:5,paddingLeft:5,color:'#00000029'}} />

                        <TextInput
                        style={{flex:1}}
                         placeholder="Confirm Password Here"
                         underlineColorAndroid="transparent"
                         pass={true}
                         secureTextEntry={true}
                         onChangeText={ cpass =>
                           this.setState({confirmPassword : cpass }) }
                                />

                 </View>
                </View>

{/* -------------------------------------------------- */}


{/*----------------------Remember me ---and---- forgot password------------------------------------------------ */}
{/*                 
<View style={{ flexDirection: 'row' , marginBottom:20, paddingHorizontal:'5%'}}>
              <View style={{ flexDirection: 'row' }}>
                 <CheckBox style={{ height: 20, width: 20, borderColor: '#aaa' , marginRight: 10 }}     />
                 <Text style={{fontSize: RFValue(14)}}>Remember me?</Text>
                 </View>
                 <View style={{ width: '5%'}}></View> */}
{/* <View style={{ flex:0.78, alignItems: 'flex-end',}}></View> */}

{/* <TouchableOpacity onPress={() => this.onPressButton}>  */}
{/* <TouchableOpacity 
onPress = {this.goToForgetPass}
//goto forgetpassword screen
// onPress={this.setLogin()}
>

<View>
                 <Text style={[styles.textBody], {alignSelf: 'flex-end',fontSize: RFValue(14)}}
                 >Forgot Password?</Text>
                 </View>

                 </TouchableOpacity> */}

 {/* </View> */}

 {/* ------------------------------Button signin----------------------------------------------  */}

 <View style={styles.screenContainer}>
     <Button title="SIGN IN" width="100%" color="#385805" 
    
     style={{backgroundColor: '#385805'}} 
     onPress = {this.Login.bind(this)}

    />

   </View>



{/* -------------------------------Social Links ----------------------------------------------- */}
{/* 
<View style={{flexDirection: 'row', alignItems: 'center', marginVertical:40}}>
<View  style={styles.circle}>
<Image source={require('../../assets/images/youtubeicon.png')} style={{width:40,height:30,marginLeft:3}}/>
 </View>
 <View style={{flex:  0.15, height: 1, backgroundColor: 'black'}} />
 <View style={styles.circle}>
 <Image source={require('../../assets/images/fbicon.png')} style={{width:20,height:38,marginLeft:12}}/>
 </View>
 <View style={{flex: 0.15, height: 1, backgroundColor: 'black'}} />
 <View style={styles.circle}>
 <Image source={require('../../assets/images/instaicon.png')} style={{width:30,height:30,marginLeft:8}}/>
 </View>
</View> */}

         </View>

     </ScrollView>
    );


  }
}


const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        height: deviceHeight,
    },
    image: {
        width: 400,
        height: 210,
    
    },
    textTitle: {
        fontFamily: 'berlinaansdemibold',
        fontSize: 40,
        marginTop: -10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'black',
      margin:10,
  },
  containerInput: {
   marginTop:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    marginHorizontal: 10
  },
  
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
    buttonSignin: {
       
      borderWidth: 1,
      
      borderColor: 'black',
      backgroundColor: 'red'
   },
   screenContainer: {
    
    marginHorizontal:5,
    alignSelf: 'stretch',
    justifyContent: "center",
    padding: 16,
    color:'#385805'
    },
    circle :{
    height : 60,
    width :60,
    borderRadius: 100,
    borderColor: '#49641D',
    borderWidth:2,
    justifyContent: "center", 
    paddingHorizontal: 5,
   }
  
  });