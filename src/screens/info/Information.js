import React, { Component } from 'react';
import {SafeAreaView,AsyncStorage, StyleSheet,View,TextInput,Alert, Text,ScrollView, StatusBar,Image,ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, TouchableWithoutFeedback } from 'react-native-paper';
import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';

const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"
const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"
// const bitrix2 = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"

var userID=0;
var profileData={ 
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
  
}
export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData:{ 
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
        
      }
      ,
      logUserID:'',
    };
  }

  goBackToNavScreen = () => {

    Actions.navScreen()
  
  }
  
  componentDidMount() {
    // this.displayData();


    // AsyncStorage.getItem('loggedUserID').then(
    //   (value) =>
    //     // AsyncStorage returns a promise
    //     // Adding a callback to get the value
    //     // this.setState({logUserID: value})
    //     {userID= value
    //       ToastAndroid.show("userID "+userID, ToastAndroid.LONG);
    //     this.fetchData();
    //     }
    //     // setProfileName(value),
    //   // Setting the value in Text
    // );
    
    // this.SendMessage();
  }

  updateUserProfile= async()=> {
    // const response = await fetch("https://randomuser.me/api?results=15");
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=Myglu Community&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&AVATAR='avatar'&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=MygluCommunity&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
    ToastAndroid.show("ok", ToastAndroid.LONG);
    const response = await fetch(afiaNoor+"user.update?ID=6&NAME=urwa&LAST_NAME=ali&EMAIL=urwa.ali@my-glu.com&PERSONAL_MOBILE=03067459550&PERSONAL_PHONE=null&PERSONAL_BIRTHDAY=02/16/1997&WORK_POSITION=developer&PERSONAL_GENDER=female&WORK_PHONE=null&UF_WEB_SITES=null&UF_SKYPE=null&UF_FACEBOOK=null&UF_LINKEDIN=null");
    // const response = await fetch(afiaNoor+"im.recent.get");
    // const response = await fetch(afiaNoor+`im.dialog.messages.get?DIALOG_ID=${this.props.id}`);
    // const response = await fetch(afiaNoor+"im.dialog.messages.get?DIALOG_ID=83");
    const jsonData = await response.json()
    // .then((json) => json.json())
     .catch((error) => console.warn("fetch error:", error.message) && Alert.alert('E'))

    
     
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
              // this.setState({logUserID: value})
              userID= value
              // setProfileName(value),
            // Setting the value in Text
          );


          // ToastAndroid.show(""+this.state.logUserID, ToastAndroid.LONG)

// let uEmail = await AsyncStorage.getItem('email1');
// setProfileName(uEmail)
// Alert.alert(uEmail);

    } catch(error){
      Alert.alert(error.message);
          }
      
        }
  
  fetchData= async()=> {

    // const response = await fetch("https://randomuser.me/api?results=15");
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=Myglu Community&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&AVATAR='avatar'&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=MygluCommunity&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
    // const response = await fetch(bitrix+"user.get?ID=1")
    // const response = await fetch(`https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/user.get?ID=${this.state.loggedUserID}`, {
    // const response = await fetch(afiaNoor+`user.get?ID=${this.state.logUserID}`, {
  
      // return new Promise((resolve, reject) => {

      // });

    const response = await fetch(afiaNoor+`user.get?ID=${userID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json'
      }});
    // const response = await fetch(afiaNoor+"im.recent.get");
    // const response = await fetch(afiaNoor+`im.dialog.messages.get?DIALOG_ID=${this.props.id}`);
    // const response = await fetch(afiaNoor+"im.dialog.messages.get?DIALOG_ID=83");
  
    const jsonData = await response.json()
    .catch((error) => console.warn("fetch error:", error.message) );

  // });
    // .then((response) => response.json())
    // .then((json) => json.json())
    //  .catch((error) => console.warn("fetch error:", error) && Alert.alert('E')
     
    //  )
    //  .then((jsonData) => {
    // this.setState({data: jsonData.result});
    //  Alert.alert("Message"+jsonData.result[0].ID)

   
{
          profileData.id= jsonData.result[0].ID;
          // id: 'by',
          profileData.firstName= jsonData.result[0].NAME;
          profileData.lastName= jsonData.result[0].LAST_NAME;
          profileData.email= jsonData.result[0].EMAIL,
          profileData.mobile = jsonData.result[0].PERSONAL_MOBILE;
          profileData.phone= jsonData.result[0].PERSONAL_PHONE;
          profileData.DOB= jsonData.result[0].PERSONAL_BIRTHDAY;
          profileData.position= jsonData.result[0].WORK_POSITION;
          profileData.gender= jsonData.result[0].PERSONAL_GENDER;
          profileData.website= jsonData.result[0].UF_WEB_SITES;
          profileData.workphone= jsonData.result[0].WORK_PHONE;
          profileData.skype= jsonData.result[0].UF_SKYPE;
          profileData.facebook= jsonData.result[0].UF_FACEBOOK;
          profileData.linkedin=jsonData.result[0].UF_LINKEDIN;
}
        }
    

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
 

    


  render() {

    
    AsyncStorage.getItem('loggedUserID').then(
      (value) =>
        // AsyncStorage returns a promise
        // Adding a callback to get the value
        // this.setState({logUserID: value})
        {userID= value
          ToastAndroid.show("userID "+userID, ToastAndroid.LONG);
        this.fetchData();
        }
        // setProfileName(value),
      // Setting the value in Text
    )


    return (

      

     <Profile uid={userID} proData={profileData}
    //  id={userID} 
    //           firstName={this.state.profileData.firstName}
    //           lastName={this.state.profileData.lastName}
    //           email={this.state.profileData.email}
    //           mobile={this.state.profileData.mobile}
    //           phone={this.state.profileData.phone}
    //           dob={this.state.profileData.DOB}
    //           position={this.state.profileData.position}
    //           gender={this.state.profileData.gender}
    //           website={this.state.profileData.website}
    //           workPhone={this.state.profileData.workphone}
    //           skype={this.state.profileData.skype}
    //           facebook={this.state.profileData.facebook}
    //           linkedin={this.state.profileData.linkedin}

              // lastName={this.state.profileData.email}
              // email={this.state.profileData.email}
              // mobile={this.state.profileData.email}
              // phone={this.state.profileData.email}
              // dob={this.state.profileData.email}
              // position={this.state.profileData.email}
              // gender={this.state.profileData.email}
              // website={this.state.profileData.email}
              // workPhone={this.state.profileData.email}
              // skype={this.state.profileData.email}
              // facebook={this.state.profileData.email}
              // linkedin={this.state.profileData.email}
              />
    
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


// lastName={this.state.profileData.lastName}
// email={this.state.profileData.email}
// mobile={this.state.profileData.mobile}
// phone={this.state.profileData.phone}
// dob={this.state.profileData.DOB}
// position={this.state.profileData.position}
// gender={this.state.profileData.gender}
// website={this.state.profileData.website}
// workPhone={this.state.profileData.workphone}
// skype={this.state.profileData.skype}
// facebook={this.state.profileData.facebook}
// linkedin={this.state.profileData.linkedin}




{/*  <View>
       
      <View  style={{ marginTop:-20,}}>
       <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToNavScreen}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity> 
          }
            centerComponent={<Text style={{ fontSize:20}}>Information</Text>}
            
            // rightComponent={<Image source={require('../../assets/images/search.png')} style={styles.headerRight} />}
            rightComponent={
              <TouchableOpacity
              // onPress={()=>}
              >
                <Text>Done</Text>

                </TouchableOpacity>
            }

            options={() => ({
              // headerTitle: getHeaderTitle(route),
              // headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
              headerStyle: {
                backgroundColor: '#fff', //Set Header color
              },
              headerTintColor: '#49641D', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            })
          }
       /> 
       
<View>
<Text style={{textAlign: 'center', marginTop:35,color:'#49641D' ,fontSize:20}}>hello {this.state.profileData.email}</Text>
</View>

    </View>*/}