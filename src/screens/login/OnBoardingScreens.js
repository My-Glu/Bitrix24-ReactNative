import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);


const GenerateOTP= async()=> {

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
  





const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        // SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        // onSkip={() => navigation.replace("Login")}
        // onDone={() => navigation.navigate("Login")}

        // onSkip={() => Actions.replace('login')}
        onDone={() => Actions.login()}

        pages={[
          {
            backgroundColor: '#DCFCAD',
            image: <Image source={require('../../assets/images/onboard.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World'
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../../assets/images/login.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../../assets/images/password.png')} />,
            title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

