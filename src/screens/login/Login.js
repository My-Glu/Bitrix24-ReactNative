import React, { Component } from 'react';
import {View, StyleSheet, Text,TextInput, Image,Dimensions, AsyncStorage, ScrollView,Button, Alert, TouchableOpacity} from 'react-native';
// import styles from "./style";
// import { Button } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {CheckBox} from '@react-native-community/checkbox' 
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from '.././forgetPassword/ForgetPassword';
// import {Actions} from 'react-native-router-flux'

import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class Login extends Component {
 
  // const LoginScreen = props => {
  
    // }
  
    goToDashboard = () => {
      // Actions.navScreen()
      // Actions.navScreen({onBack: () => console.log('custom back callback') });
      Actions.navScreen({onBack: () => Actions.login()});
   }
  
   goToForgetPass = () => {
    Actions.forgetPassword()
 }
 
  constructor(props) {
    super(props);
    
    this.state = {
      responseData:{},
      username: '',
    password: '',
       message: '',
      isLogIn: false,
      sessionOn: false,
      token:'',
      email:'',
    };
    
    // this.onPressButton = this.onPressButton.bind(this);

  }

  
  saveData= () => {


    // let userEmail = email;
    // AsyncStorage.setItem('email1', JSON.stringify(userEmail));
    // AsyncStorage.setItem('email1', JSON.stringify(this.state.email));
    AsyncStorage.setItem('email1', this.state.email);
    AsyncStorage.setItem('SESSION', this.state.sessionOn);

  }


  displayData= async()=> {

    try{
let uEmail = await AsyncStorage.getItem('email1');
Alert.alert(uEmail);
    }
    catch(error){
Alert.alert(error)
    }

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


// componentDidMount() {
//   this.fetchData();
// }


// storeSession = async () => {
//   try {
//     await AsyncStorage.setItem('SESSION', this.state.sessionOn)
//   } catch (e) {
//     // saving error
//   }
// }


// $value = AsyncStorage.getItem('SESSION')

// getSession = async () => {
//   try {
//     const value = await AsyncStorage.getItem('SESSION')
//     if(value !== null) {
//       // value previously stored
//     }
//   } catch(e) {
//     // error reading value
//   }
// }


Login= async()=> {

  const response = await fetch(`http://34.210.75.190/api/login?email=${this.state.username}&password=${this.state.password}`,
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
this.setState({email: res.User.EMAIL})
 if(res.status == 0){
  Alert.alert("Response0", "Status: "+ res.status +"\n Message "+res.message);
}else if(res.status === 1){
  // Alert.alert("Response1", "Error: "+ res.status +" "+res.message);
  Actions.navScreen({userEmail: res.User.EMAIL});
 this.setState({sessionOn:true})
  // this.saveData().bind(this, res.User.EMAIL);
  this.saveData();

  // this.displayData();
  // this.setState({sessionOn:true})
  // AsyncStorage.setItem('SESSION', true)
  // AsyncStorage.setItem('SESSION', true)


}else if(res.status === 2){
  // {this.goToDashboard}
  // Actions.navScreen({onBack: () => Actions.login()});
  // Actions.onboard(this, this.state.username, this.state.password);
  Actions.onboard({email: this.state.username, password: this.state.password});
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


componentDidMount() {
//  let value = AsyncStorage.getItem('SESSION')
  // const value = AsyncStorage.getItem('SESSION')

  // if(value=="true"){
  if(AsyncStorage.getItem('SESSION')){
    Actions.navScreen();
    // Actions.navScreen({onBack: () => Actions.login()});
  }
}


setLogin() {
  this.setState({isLogIn: true});
}

  render() {
    if (this.state.isLogIn) {
      return <ForgetPassword/>; 
  }

  // let [userEmail, setUserEmail] = useState('');
  // let [userPassword, setUserPassword] = useState('');
  // let [loading, setLoading] = useState(false);
  // let [errortext, setErrortext] = useState(''); 
  
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

                <View style={{flex: 1, height:10}}></View>

{/*-------------------------------- input email ------------------------------------- */}
            
<View style={styles.containerInput}>
                <View style={styles.SectionStyle}>

                <Icon name="user" style={{fontSize:22,paddingRight:5,paddingLeft:5,color:'#00000029'}} />

                         <TextInput
                          style={{flex:1}}
                          autoCapitalize={"none"}
                          placeholder="Enter Your Email Here"
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
                         autoCapitalize={"none"}
                          placeholder="Enter Your Password Here"
                          underlineColorAndroid="transparent"
                          pass={true}
                          secureTextEntry={true}
                          onChangeText={ TextInputValue =>
                            this.setState({password : TextInputValue }) }
                                 />

                  </View>
                 </View>
{/*----------------------Remember me ---and---- forgot password------------------------------------------------ */}
                 
<View style={{ flexDirection: 'row' , marginBottom:20, paddingHorizontal:'5%'}}>
               <View style={{ flexDirection: 'row' }}>
                  <CheckBox style={{ height: 20, width: 20, borderColor: '#aaa' , marginRight: 10 }}     />
                  <Text style={{fontSize: RFValue(14)}}>Remember me?</Text>
                  </View>
                  <View style={{ width: '5%'}}></View>
<View style={{ flex:0.78, alignItems: 'flex-end',}}></View>

{/* <TouchableOpacity onPress={() => this.onPressButton}>  */}
<TouchableOpacity 
onPress = {this.goToForgetPass}
//goto forgetpassword screen
// onPress={this.setLogin()}
>

<View>
                  <Text style={[styles.textBody], {alignSelf: 'flex-end',fontSize: RFValue(14)}}
                  >Forgot Password?</Text>
                  </View>

                  </TouchableOpacity>

  </View>

  {/* ------------------------------Button signin----------------------------------------------  */}

  <View style={styles.screenContainer}>
      <Button title="SIGN IN" width="100%" color="#385805" 
     
      style={{backgroundColor: '#385805'}} 
      onPress = {this.Login.bind(this)}
// onPress = {this.goToDashboard}
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
      justifyContent: 'center',
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