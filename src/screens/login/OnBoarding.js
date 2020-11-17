import React, { Component } from 'react';
import {StyleSheet,SafeAreaView, View, Text, Button,Dimensions, Alert, Image, TouchableOpacity,ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// const deviceHeight = Dimensions.get('window').height
// const deviceWidth = Dimensions.get('window').width

  GenerateOTP= async()=> {

    const response = await fetch(`http://34.210.75.190/api/onboard?email=${this.props.email}&password=${this.props.password}`,
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
    // Alert.alert("Response0", "Status: "+ res.status +"\n Message "+res.message);
    ToastAndroid.show(""+res.message, ToastAndroid.LONG);
  }else if(res.status === 1){
    // Alert.alert("Response1", "Error: "+ res.status +" "+res.message);
    Actions.otp({email: this.props.email});
  }
  // else if(res.status === 2){
    // {this.goToDashboard}
    // Actions.navScreen({onBack: () => Actions.login()});
    // Actions.onboard();
    // Alert.alert("Response", "Status: "+ res.status +"\nMessage: "+res.message);
  // }
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

// timer code -----------------------
const RESEND_OTP_TIME_LIMIT = 25;
    const startResendOtpTimer = () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
      resendOtpTimerInterval = setInterval(() => {
        if (resendButtonDisabledTime <= 0) {
          clearInterval(resendOtpTimerInterval);
        } else {
          // setResendButtonDisabledTime(resendButtonDisabledTime - 1);
          setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT - 1);
        }
      }, 1000);
    };
// --------------------------------------

    return (
   
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerMain}>
       
       {/* <View style={{backgroundColor: '#DCFCAD',}}> */}

 <Image style={{alignSelf: 'center',  marginTop: '10%'}} source={require('../../assets/images/onboard.png')}/>

 <View style={{ marginHorizontal: '5%'}}>
 <Text style={{textAlign: 'center',fontSize:50,fontFamily:'berlinsans',fontWeight:'bold',color: '#49641D',padding:'3%', borderRadius:25,}}>CRM Application</Text> 

    {/* <Button title={'Generate OTP'}/> */}

    {/* <TouchableOpacity   onPress={this.GenerateOTP.bind(this)}
   
    >
   <Text style={{textAlign: 'center',fontFamily:'segoe-ui',alignSelf: 'center',width: '30%',color: '#49641D',borderColor:'#D6E2C2',backgroundColor:'#D6E2C2',fontWeight:'bold', borderWidth:1,padding:'3%', marginTop:'10%', fontSize:18, borderRadius:25,}}>NEXT</Text>
    </TouchableOpacity>
    */}

 </View>

       </View>
      
      
      <View style={styles.bottomView}>
      <TouchableOpacity   onPress={this.GenerateOTP.bind(this)}
   
   >
  <Text style={{textAlign: 'center',fontFamily:'segoe-ui',alignSelf: 'center',color: '#49641D',borderColor:'#D6E2C2',fontWeight:'bold', borderWidth:1,padding:'3%', fontSize:18, }}>NEXT</Text>
   </TouchableOpacity>
  
        </View>
      {/* </View> */}
    </SafeAreaView>



//       <View style={{backgroundColor: '#DCFCAD', height:Dimensions.get('window').height}}>

// <Image style={{alignSelf: 'center',  marginTop: '10%'}} source={require('../../assets/images/onboard.png')}/>

// <View style={{ marginHorizontal: '5%'}}>
// <Text style={{textAlign: 'center',fontSize:50,fontFamily:'berlinsans',fontWeight:'bold',color: '#49641D',padding:'3%', borderRadius:25,}}>CRM Application</Text> 

//    {/* <Button title={'Generate OTP'}/> */}

//    <TouchableOpacity   onPress={this.GenerateOTP.bind(this)}
   
//    >
//    <Text style={{textAlign: 'center',fontFamily:'segoe-ui',alignSelf: 'center',width: '30%',color: '#49641D',borderColor:'#D6E2C2',backgroundColor:'#D6E2C2',fontWeight:'bold', borderWidth:1,padding:'3%', marginTop:'10%', fontSize:18, borderRadius:25,}}>NEXT</Text>
//    </TouchableOpacity>
   

// </View>

//       </View>


      // <View style={{ 
      //   display: 'flex',
      //   flexDirection: 'column',
      //   flex: 1,
      //   justifyContent: 'center',
      //   marginTop: -200,
      //   marginHorizontal:'10%'
      //     }}>

      //       <View style={styles.cardView}>
      //   {/* <Text style={{textAlign: 'center'}}>Proceed to Onboarding</Text> */}

      //   <Text style={{textAlign: 'center'}}>Proceed to Onboarding</Text>
      //   {/* <Button title={'Generate OTP'}/> */}
      //   <Button title={'Onboarding'}
      //   onPress={this.GenerateOTP.bind(this)}
      //   />
      //           </View>
      // </View>
    
    );
  }
}

const styles = StyleSheet.create({

  cardView: {
    // flex:1,
      justifyContent: 'space-between',
      borderRadius: 5,
      marginTop: '2%',
      paddingTop: '10%',
      paddingBottom:'10%',
      marginBottom:'2%',
      paddingHorizontal: '5%',
      height: '20%',
      width: '100%',
      backgroundColor: '#F7F9F3',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    bottomView: {
      width: '100%',
      height: 50,
      backgroundColor: '#D6E2C2',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
    },
    textStyle: {
      color: '#fff',
      fontSize: 18,
    }

})