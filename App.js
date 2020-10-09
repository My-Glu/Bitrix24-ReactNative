import React,{ AsyncStorage } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ListOne from './src/components/ListOne';

export default class App extends React.Component {
  
    constructor(props) {
    super(props);
    // this.state = {
    // };
  }


  async authenticateApi(){
   const id = 'b24-u1zji2';
const authcode = 'local.5f8003beb9a282.06957183&state=JJHgsdgfkdaslg7lbadsfg';
    const authApi = await fetch(`https://b24-u1zji2.bitrix24.com/oauth/authorize/?client_id=local.5f8003beb9a282.06957183&state=JJHgsdgfkdaslg7lbadsfg`)
    // const authApi = await fetch(`https://${id}.bitrix24.com/oauth/authorize/?client_id=${authcode}`)
    console.log(authApi);
    // const data = await authApi.json(); 
    // console.log(data);
    // const data = await authApi.url(); 


  }

   componentDidMount(){

    this.authenticateApi();

   }

  render() {
 
    return (
      
      <View>

           {/* const res = this.authenticateApi(); */}


        {/* <ListOne/> */}
      </View>
    );
  }
}
