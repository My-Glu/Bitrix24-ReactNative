import React, { Component } from 'react';
import { StyleSheet,View, Text, TextInput,Alert, CustomTextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default class OTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d1:'',
      d2:'',
      d3:'',
      d4:'',
      d5:'',
    };
  }


  VerifyOTP= async()=> {

    const response = await fetch(`http://34.210.75.190/api/otp/verify?email=${this.props.email}&OTP=${this.state.d1}`,
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
    // Alert.alert("Response1", "Error: "+ res.status +" "+res.message);
    // Actions.navScreen();
     Actions.setPassword({email: this.props.email});

  }
  // else if(res.status === 2){
    // {this.goToDashboard}
    // Actions.navScreen({onBack: () => Actions.login()});
    // Actions.onboard();
    // Alert.alert("Response", "Status: "+ res.status +"\nMessage: "+res.message);
  // }
  else{
    // this.setState({ auth_token: res.auth_token });
    Alert.alert("Oops", "Something went wrong" );
    }
  }).catch((error) => {
     console.error(error);
    });
  
    // const json = await response.json()
    // // .then((response) => response.json())
    //  .catch((error) => console.warn("fetch error:", error))
    // this.setState({data: json.results});
  
  }
  
  ResendOTP= async()=> {

    const response = await fetch(`http://34.210.75.190/api/otp/resend?email=${this.props.email}`,
    {method: 'POST',
    headers: {
    'Content-Type': 'application/json'},
    }).then((response) => response.json())
    .then((res) => {
   if(res.status == 0){
    // Alert.alert("Response0", "Status: "+ res.status +"\n Message "+res.message);
    ToastAndroid.show(""+res.message, ToastAndroid.LONG);
  }else if(res.status === 1){
    // Alert.alert("Response1", "Error: "+ res.status +" "+res.message);
    // Actions.navScreen();
    // Alert.alert("Response1", "Status: "+ res.status +"\n Message "+res.message);
    ToastAndroid.show(""+res.message, ToastAndroid.LONG);
  }
   else{
    // this.setState({ auth_token: res.auth_token });
    // Alert.alert("Oops", "Something went wrong" );
    ToastAndroid.show("Something went wrong", ToastAndroid.LONG);
    }
  }).catch((error) => {
     console.error(error);
    });
  }
  



  render() {
    return (
    // http://34.210.75.190/api/otp/verify?email=urwa.ali@my-glu.com&OTP=40731
      <View style={{ 
           display: 'flex',
           flexDirection: 'column',
           flex: 1,
           justifyContent: 'center',
           marginTop: -100,
           
          }}>

<View style={{backgroundColor: 'white', padding:'5%', borderRadius:8,marginHorizontal:'5%', elevation: 5,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 0 },
           shadowOpacity: 0.1,
           shadowRadius: 5,
           backgroundColor: '#F7F9F3',}}>
        <Text style={{fontSize:16, fontFamily:'segoe-ui',textAlign:'center'}}>Enter OTP sent to your email: </Text>
        <View style={{backgroundColor: '#ECFFCE', borderwidth:'#d3d3d3', borderRadius:8 , marginVertical:'3%'}}>
     
        {/* <OTPInputView
    style={{width: '80%', height: 100}}
    pinCount={5}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/> */}
      
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:'8%', marginVertical:'8%'}}>
          {/* -------------------------------------------- */}
        <TextInput
        returnKeyType = { "next" }
        autoFocus={true}
        keyboardType="numeric"
        style={{borderWidth:1, borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1} 
        onSubmitEditing={() => { this.second.focus(); }}
        onChangeText={ val1 =>
        this.setState({d1 : val1 }) 
        // && 
        // this.refs['second'].focus()
        
      }
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        // ref={'second'}
        returnKeyType = { "next" }
        ref={(input) => { this.second = input; }}
        onSubmitEditing={() => { this.third.focus(); }}
        // inputRef={(r) => { this.passcode2 = r }}
        keyboardType="numeric"
        style={{borderWidth:1, borderColor:'#606060',width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1} 
        onChangeText={ val2 =>
        this.setState({d1 : `${this.state.d1}${val2}` }
        
        ) }
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        returnKeyType = { "next" }
        ref={(input) => { this.third = input; }}
        onSubmitEditing={() => { this.forth.focus(); }}
        keyboardType="numeric"
        style={{borderWidth:1,borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
        onChangeText={ val3 =>
          this.setState({d1 : `${this.state.d1}${val3}` }) }
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        returnKeyType = { "next" }
        ref={(input) => { this.forth = input; }}
        onSubmitEditing={() => { this.fifth.focus(); }}
        keyboardType="numeric"
        style={{borderWidth:1,borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
        onChangeText={ val4 =>
          this.setState({d1 : `${this.state.d1}${val4}` }) } 
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        ref={(input) => { this.fifth = input; }}
        keyboardType="numeric"
        style={{borderWidth:1,borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
        onChangeText={ val5 =>
          this.setState({d1 : `${this.state.d1}${val5}` }) }
                                 />
        </View>

        </View> 

<View style={{ justifyContent: 'center', alignItems: 'center'}}><Text>Resend OTP in <Text style={{fontWeight:'bold'}}>25</Text><Text style={{fontWeight:'bold'}}>s</Text></Text></View>

<View style={{marginTop: '3%', alignSelf: 'center', width:'30%'}}>
<Button style={{fontWeight: 'bold'}} title="Resend"
onPress = {this.ResendOTP.bind(this)}
/>
</View>


<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:'5%'}}><Text><Text style={{fontWeight:'bold'}}>5</Text> <Text>Attempts Remaining</Text></Text></View>

<View style={{marginTop:'10%'}}>
<Button style={{fontWeight: 'bold'}} title="Submit"
onPress = {this.VerifyOTP.bind(this)}
/>
</View>

{/* <View> */}
{/*    
{[0,1,2,3].map((element, index) => (

<CustomTextInput
value={otpArray[index]}
keyboardType={'numeric'}
maxLength={1}
autoFocus={index=== 0 ? true : undefined}
key={index}/> 
 ))}  */}

{/* </View> */}


</View>
      </View>

      
    );
  }
}


const styles = StyleSheet.create({

  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    backgroundColor:'black'
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

})