import React, { Component } from 'react';
import { StyleSheet,View,TextInput, Text,ScrollView, StatusBar,Image,ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, TouchableWithoutFeedback } from 'react-native-paper';
import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Profile from './Profile';


const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"
const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"
// const bitrix2 = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"


export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData:[{ 
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        phone:'',
        DOB:'',
        position:'',
        gender:'',
        website:'',
        workphone:'',
        skype:'',
        facebook:'',
        linkedin:'',
        
      }]
      ,
      logUserID:'',
    };
  }

  goBackToNavScreen = () => {

    Actions.navScreen()
  
  }
  

  componentDidMount() {
    this.displayData();
    this.fetchData();
    
    // this.SendMessage();
  }


  updateUserProfile= async()=> {
    // const response = await fetch("https://randomuser.me/api?results=15");
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=Myglu Community&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&AVATAR='avatar'&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=MygluCommunity&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
    const response = await fetch(afiaNoor+"user.update?ID=6&NAME=urwa&LAST_NAME=ali&EMAIL=urwa.ali@my-glu.com&PERSONAL_MOBILE=03067459550&PERSONAL_PHONE=null&PERSONAL_BIRTHDAY=02/16/1997&WORK_POSITION=developer&PERSONAL_GENDER=female&WORK_PHONE=null&UF_WEB_SITES=null&UF_SKYPE=null&UF_FACEBOOK=null&UF_LINKEDIN=null");
    // const response = await fetch(afiaNoor+"im.recent.get");
    // const response = await fetch(afiaNoor+`im.dialog.messages.get?DIALOG_ID=${this.props.id}`);
    // const response = await fetch(afiaNoor+"im.dialog.messages.get?DIALOG_ID=83");
    const jsonData = await response.json()
    // .then((json) => json.json())
     .catch((error) => console.warn("fetch error:", error) && Alert.alert('E'))

    // this.setState({data:[{
    //   id: jsonData.result.ID,
    //   firstName: jsonData.result.NAME,
    //   lastName: jsonData.result.LAST_NAME,
    //   Email: jsonData.result.EMAIL,
    //   mobile : jsonData.result.PERSONAL_MOBILE,
    //   phone: jsonData.result.PERSONAL_PHONE,
    //   DOB: jsonData.result.PERSONAL_BIRTHDAY,
    //   position: jsonData.result.WORK_POSITION,
    //   gender: jsonData.result.PERSONAL_GENDER,
    //   website: jsonData.result.UF_WEB_SITES,
    //   workphone: jsonData.result.WORK_PHONE,
    //   skype: jsonData.result.UF_SKYPE,
    //   facebook:jsonData.result.UF_FACEBOOK,
    //   linkedin:jsonData.result.UF_LINKEDIN,

    //  }
    // ]});

    // this.setState({
    //   data:{
    //   messages:jsonData.result.messages
    //   }
    // });
    // Alert.alert(this.state.data.chat_id)
  }

   displayData= async()=> {

    try{

        AsyncStorage.getItem('loggedUserID').then(
            (value) =>
              // AsyncStorage returns a promise
              // Adding a callback to get the value
              this.setState({logUserID: value})
             

              // setProfileName(value),
            // Setting the value in Text
          );


          ToastAndroid.show(""+this.state.logUserID, ToastAndroid.LONG)

// let uEmail = await AsyncStorage.getItem('email1');
// setProfileName(uEmail)
// Alert.alert(uEmail);

    } catch(error){
      Alert.alert(error)
          }
      
        }
  
  fetchData= async()=> {
    // const response = await fetch("https://randomuser.me/api?results=15");
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=Myglu Community&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&AVATAR='avatar'&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=MygluCommunity&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
    // const response = await fetch(bitrix+"user.get?ID=1")
    // const response = await fetch(`https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/user.get?ID=${this.state.loggedUserID}`, {
    const response = await fetch(afiaNoor+`user.get?ID=${this.state.logUserID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }})
    // const response = await fetch(afiaNoor+"im.recent.get");
    // const response = await fetch(afiaNoor+`im.dialog.messages.get?DIALOG_ID=${this.props.id}`);
    // const response = await fetch(afiaNoor+"im.dialog.messages.get?DIALOG_ID=83");
    const jsonData = await response.json()
    .catch((error) => console.warn("fetch error:", error) && Alert.alert('E'))
    // .then((response) => response.json())
    // .then((json) => json.json())
    //  .catch((error) => console.warn("fetch error:", error) && Alert.alert('E')
     
    //  )
    //  .then((jsonData) => {
    // this.setState({data: jsonData.result});
    //  Alert.alert("Message"+jsonData.result[0].ID)

    this.setState({profileData: { 

          id: jsonData.result[0].ID,
          // id: 'by',
          firstName: jsonData.result[0].NAME,
          lastName: jsonData.result[0].LAST_NAME,
          email: jsonData.result[0].EMAIL,
          mobile : jsonData.result[0].PERSONAL_MOBILE,
          phone: jsonData.result[0].PERSONAL_PHONE,
          DOB: jsonData.result[0].PERSONAL_BIRTHDAY,
          position: jsonData.result[0].WORK_POSITION,
          gender: jsonData.result[0].PERSONAL_GENDER,
          website: jsonData.result[0].UF_WEB_SITES,
          workphone: jsonData.result[0].WORK_PHONE,
          skype: jsonData.result[0].UF_SKYPE,
          facebook:jsonData.result[0].UF_FACEBOOK,
          linkedin:jsonData.result[0].UF_LINKEDIN,
  
    }
  });


    // this.setState({
    //   data:{
    //   messages:jsonData.result.messages
    //   }
    // });
    // Alert.alert(this.state.data.chat_id)
    // -----------------------
  // }).catch((error) => {
  //   console.error(error);
  //  });
 

  }


  render() {
    return (
     <Profile/>
        
    );
  }
}

const styles = StyleSheet.create({

    circle :{
        height : 80,
        width :80,
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