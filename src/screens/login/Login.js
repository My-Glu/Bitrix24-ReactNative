import React, { Component } from 'react';
import {View, StyleSheet, Text,TextInput, Image, ScrollView,Button, CheckBox ,Alert, TouchableOpacity} from 'react-native';
// import styles from "./style";
// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from '.././forgetPassword/ForgetPassword';
// import {Actions} from 'react-native-router-flux'


import { Actions } from 'react-native-router-flux';




export default class Login extends Component {

  
   
    goToDashboard = () => {
      Actions.navScreen()
   }
  
   goToForgetPass = () => {
    Actions.forgetPassword()
 }
 
  constructor(props) {
    super(props);
    
    this.state = {
      isLogin: false
    };
    // this.onPressButton = this.onPressButton.bind(this);

  }


//   moveToForgetPassword = () => {
//     this.props.navigation.navigate('ForgetPassword')
// }

// handleClick=()=>{
//   alert('Button clicked!');
// }


// onPressButton() {
//   const { navigate } = this.props.navigation;

//   var options = {
//     title: strings.app_name,
//     content: strings.create_message,
//     positiveText: strings.OK,
//     onPositive: () => navigate("ForgetPassword")
//   };
//   // var dialog = new DialogAndroid();
//   // dialog.set(options);
//   // dialog.show();
// }

// componentDidMount() {
//   setTimeout( () => {
//       this.setState({isLogin:false})
//   },2000);
// }

setLogin() {
  this.setState({isLogin: true});
}

  render() {
    if (this.state.isLogin) {
     
      return <ForgetPassword/>;
      
  }

    return (
      
     
     <ScrollView style={{backgroundColor: 'white'}}>
      
       
         <View style={styles.container}>
         
             <Image source={require('../../assets/images/noorgrplogo3x.png')}
              resizeMode="center" 
               style={styles.image}
                 />

               <Text style={styles.textTitle}>LOGIN</Text>
{/* ------------------------------Horizontal line -------------------------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 20, }} />

                </View>

                <View style={{flex: 1, height:10}}></View>

{/*-------------------------------- input email ------------------------------------- */}
            
<View style={styles.containerInput}>
                <View style={styles.SectionStyle}>

                <Icon name="user" style={{fontSize:22,paddingRight:5,paddingLeft:5,color:'#00000029'}} />

                         <TextInput
                         style={{flex:1}}
                          placeholder="Enter Your Email Here"
                          underlineColorAndroid="transparent"
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
                                 />

                  </View>
                 </View>
{/*----------------------Remember me ---and---- forgot password------------------------------------------------ */}
                 
<View style={{ flexDirection: 'row' , marginBottom:20}}>
               <View style={{ flexDirection: 'row' }}>
                  <CheckBox style={{ height: 20, width: 20, borderColor: '#aaa' , marginRight: 10 }}     />
                  <Text>Remember me?</Text>
                  </View>
<View style={{ flex:0.78, alignItems: 'flex-end'}}></View>

{/* <TouchableOpacity onPress={() => this.onPressButton}>  */}
<TouchableOpacity 
onPress = {this.goToForgetPass}
//goto forgetpassword screen
// onPress={this.setLogin()}
>

<View>
                  <Text style={[styles.textBody], {alignSelf: 'flex-end'}}
                  >Forgot Password?</Text>
                  </View>

                  </TouchableOpacity>

  </View>

  {/* ------------------------------Button signin----------------------------------------------  */}

  <View style={styles.screenContainer}>
      <Button title="SIGN IN" width="100%" color="#385805" style={{backgroundColor: '#385805'}} 

onPress = {this.goToDashboard}
      // onPress={this.handleClick}
      // onClick={this.handleClick}
     />

    </View>



{/* -------------------------------Social Links ----------------------------------------------- */}

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
</View>

  {/* <View style = {{alignItems: 'center'}}>
  <TouchableOpacity>
            <Text style = {styles.buttonSignin}>
               SIGN IN
            </Text>
         </TouchableOpacity>
         </View> */}
               
               {/* <View style={{flexDirection: 'row'}}>
                 <View style={{ flexDirection: 'row' }}>
    <CheckBox
      value={this.state.checked}
      onValueChange={() => this.setState({ checked: !this.state.checked })}
    />
    <Text>Remember me</Text>
  </View>



                           <Text style={[styles.textBody], {alignSelf: 'flex-start'}}>Remember me?              </Text>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>               Forgot Password?</Text>
                </View> */}




                   {/* 
                <Image 
                    source={require('../images/reactlogo.png')} 
                    resizeMode="center" 
                    style={styles.image} /> */}

          </View>

      </ScrollView>

      );
      

//         <KeyboardAvoidingView style={styles.containerView} behavior="padding">

//  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//   <View style={styles.loginScreenContainer}>
//     <View style={styles.loginFormView}>
//     <Text style={styles.logoText}>Instamobile</Text>
//       <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
//       <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
//       <Button
//         buttonStyle={styles.loginButton}
//         // onPress={() => this.onLoginPress()}
//         // onPress={}
//         title="Login"
//       />
//       <Button
//         buttonStyle={styles.fbLoginButton}
//         // onPress={() => this.onFbLoginPress()}
//         // onPress={}
//         title="Login with Facebook"
//         color="#3897f1"
//       />
//     </View>
//   </View>
// </TouchableWithoutFeedback>
// </KeyboardAvoidingView>
      
    
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  image: {
      width: 400,
      height: 210,
  
  },
  textTitle: {
      fontFamily: 'Foundation',
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
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10
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
  margin: 10
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
  flex: 1,
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