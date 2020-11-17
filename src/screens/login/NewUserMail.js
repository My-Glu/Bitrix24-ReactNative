import React, { Component } from 'react';
import {SafeAreaView,View, StyleSheet, Text,TextInput, Image,Dimensions, AsyncStorage, ScrollView,Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class NewUserMail extends Component {
  constructor(props) {
    super(props);
    this.state = {

        username: '',
        password: '',
         message: '',
        isLogIn: false,
        sessionOn: JSON.stringify(false),
        // sessionOn: "false",
        token:'',
        email:'',
        loggedUserID:'',

    };
  }



  NewUserMail= async()=> {

    const response = await fetch(`http://34.210.75.190/api/login?email=${this.state.username}&password="dummyPassword"`,
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
  if(res.User != null){
  this.setState({email: res.User.EMAIL, loggedUserID: res.User.ID})
  }
  
   if(res.status === 0){
    // Alert.alert("Response0", "Status: "+ res.status +"\n Message "+res.message);
    // Alert.alert("Response", "Message: "+res.message);
  
//   Actions.newUserMail();
  
    ToastAndroid.show(""+res.message, ToastAndroid.LONG);
  }else if(res.status === 1){
    // Alert.alert("Response1", "Error: "+ res.status +" "+res.message);
    this.setState({email: res.User.EMAIL, loggedUserID: res.User.ID});
    // this.setState({sessionOn:"true"});
    this.setState({sessionOn:JSON.stringify(true)});
    this.saveData();
    ToastAndroid.show("Loading...", ToastAndroid.LONG);
    Actions.navScreen({userEmail: res.User.EMAIL});
    //for session
   
    // this.saveData().bind(this, res.User.EMAIL);
   
    // this.displayData();
    // this.setState({sessionOn:true})
    // AsyncStorage.setItem('SESSION', true)
    // AsyncStorage.setItem('SESSION', true)
  
  }else if(res.status === 2){
    // {this.goToDashboard}
    // Actions.navScreen({onBack: () => Actions.login()});
    // Actions.onboard(this, this.state.username, this.state.password);
    Actions.onboard({email: this.state.username, password: this.state.password});
    // Actions.onBoardingScreens({email: this.state.username, password: this.state.password});
    // Alert.alert("Response", "Status: "+ res.status +"\nMessage: "+res.message);
  
  }
  else{
    // this.setState({ auth_token: res.auth_token });
    // Alert.alert("Oops", "Something went wrong");
    ToastAndroid.show("Something went wrong", ToastAndroid.LONG);
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
        <SafeAreaView style={{flex: 1, backgroundColor:'#DCFCAD'}}>
      <View >

<View>

{/* <Image source={require('../../assets/images')} /> */}


      <View style={{marginTop:'10%'}}>
       

 <Image style={{alignSelf: 'center',  marginTop: '10%'}} source={require('../../assets/images/mail.png')}/>

 <View style={{ height: '15%'}}>
 {/* <Text style={{textAlign: 'center',fontSize:50,fontFamily:'berlinsans',fontWeight:'bold',color: '#49641D',padding:'3%', borderRadius:25,}}>CRM Application</Text>  */}

   </View>

   <View style={{marginTop:'20%'}}></View>

   <Text style={{color:'#49641D', textAlign: 'center'}}>Email Address Required for OTP Code</Text>


{/*-------------------------------- input email ------------------------------------- */}

<View style={styles.containerInput}>
                <View style={styles.SectionStyle}>

                <Icon name="user" style={{fontSize:22,paddingRight:5,paddingLeft:5,color:'#00000029'}} />

                         <TextInput
                          style={{flex:1}}
                          autoCapitalize={"none"}
                          placeholder="E-mail"
                          underlineColorAndroid="transparent"
                          onChangeText={ input =>
                          this.setState({username : input }) }
                          editable={true}
                                 />

                  </View>
                 </View>

                 {/* <View style={styles.screenContainer}> */}
                 <TouchableOpacity style={{backgroundColor: '#385805' ,paddingVertical:14, borderRadius:8, height:45,fontWeight:'bold',
        marginHorizontal:'8%',
        alignSelf: 'stretch',
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: '10%',
        borderRadius: 8,
        color:'#385805'}}   
                 onPress = {this.NewUserMail.bind(this)}
                // onPress = {Actions.otp()}
                 >

<Text style={{ color: 'white', textAlign: 'center', fontWeight:'bold', fontFamily:'segoe-ui'}}>SEND</Text>

</TouchableOpacity>
{/* </View> */}

       </View>
      
      
<View>

{/* <Text style={{color:'#d3d3d3'}}>Email Address Required for OTP Code</Text> */}

</View>

      {/* <View style={styles.bottomView}>
      <TouchableOpacity   
    //   onPress={this.GenerateOTP.bind(this)}
   
   >
  <Text style={{textAlign: 'center',fontFamily:'segoe-ui',alignSelf: 'center',color: '#49641D',borderColor:'#D6E2C2',fontWeight:'bold', borderWidth:1,padding:'3%', fontSize:18, }}>NEXT</Text>
   </TouchableOpacity>
  
        </View> */}
      {/* </View> */}
    
</View>
        {/* <Text>NewUserMail </Text> */}

      </View>
      </SafeAreaView>
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
      },
      containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical:30
      
      },
      screenContainer: {
        height:100,
        marginHorizontal:18,
        alignSelf: 'stretch',
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: '5%',
        borderRadius: 5,
        color:'#385805'
        },
    
SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 45,
    borderRadius: 5 ,
    margin: 14
  },
  
      
  
  })