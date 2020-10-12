import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import ListOne from './src/components/ListOne';
import Login from './src/screens/login/Login';
import Splash from './src/screens/splash/Splash';
import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';

export default class App extends React.Component {
  
    constructor(props) {
    super(props);
    // this.state = {
    // };
  }


  render() {
 
    return (
      
      <View>
        {/* <ForgetPassword/> */}
            <Login/>
             {/* <Splash/> */}

 
      </View>
    );
  }
}
