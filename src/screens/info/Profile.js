import React, { Component } from 'react';
import { SafeAreaView, StyleSheet,View,TextInput, Text,ScrollView, StatusBar,Image,ToastAndroid, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, TouchableWithoutFeedback } from 'react-native-paper';
import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

var myData={ 
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


const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // firstName:this.props.fName,
      // firstName: this.props.firstName,
      id:'',
      firstName: '',
      lastName:'',
      email:'',
      mobile:'',
      phone:'',
      dob:'',
      position:'',
      gender:'',
      website:'',
      workphone:'',
      skype:'',
      facebook:'',
      linkedin:'',
      updateResponse:'',
      isLoading:false, 
      
    };

  }

  
  goBackToNavScreen = () => {

    Actions.navScreen()
  
  }


  doLoading = () => {
    this.setState({ isLoading: true });
    this.updateUserProfile
    this.setState({ isLoading: false })
  };


  // indicator=()=>{

  //   <ActivityIndicator color="red" size='large' />

  // }

  componentDidMount() {

    myData.id=this.state.uid
    this.setState({id:this.props.proData.id})
    this.setState({firstName:this.props.proData.firstName})
    this.setState({lastName:this.props.proData.lastName})
    this.setState({email:this.props.proData.email})
    this.setState({mobile:this.props.proData.mobile})
    this.setState({phone:this.props.proData.phone})
    this.setState({dob:this.props.proData.dob})
    this.setState({position:this.props.proData.position})
    this.setState({gender:this.props.proData.gender})
    this.setState({website:this.props.proData.website})
    this.setState({workphone:this.props.proData.workPhone})
    this.setState({skype:this.props.proData.skype})
    this.setState({facebook:this.props.proData.facebook})
    this.setState({linkedin:this.props.proData.linkedin})
    
    // ToastAndroid.show("z "+this.props.proData.firstName, ToastAndroid.LONG);

  }

  handleInputTextChange = (newText) => {
    this.setState({ firstName: newText })
  }

  handleInputTextChangeLastName = (newText1) => {
    this.setState({ lastName: newText1})
  }

  handleInputTextChangeEmail = (newText2) => {
    this.setState({ email: newText2 })
  }

  handleInputTextChangeMobile = (newText3) => {
    this.setState({ mobile: newText3 })
  }

  handleInputTextChangePhone = (newText4) => {
    this.setState({ phone: newText4 })
  }

  handleInputTextChangeDOB = (newText5) => {
    this.setState({ dob: newText5 })
  }

  handleInputTextChangePosition = (newText6) => {
    this.setState({ position: newText6 })
  }

  handleInputTextChangeGender = (newText7) => {
    this.setState({ gender: newText7 })
  }

  handleInputTextChangeWebsite = (newText8) => {
    this.setState({ website: newText8 })
  }

  handleInputTextChangeWorkPhone = (newText9) => {
    this.setState({ workphone: newText9 })
  }

  handleInputTextChangeSkype = (newText10) => {
    this.setState({ skype: newText10 })
  }
  handleInputTextChangeFacebook = (newText11) => {
    this.setState({ facebook: newText11 })
  }
  handleInputTextChangeLinkedIn = (newText12) => {
    this.setState({ linkedin: newText12 })
  }



  updateUserProfile= async()=> {
    // const response = await fetch("https://randomuser.me/api?results=15");
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=Myglu Community&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&AVATAR='avatar'&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.chat.add?TYPE=CHAT&TITLE=Myglu&DESCRIPTION=MygluCommunity&COLOR=MINT&MESSAGE={this.state.message}&USERS=Array(1,4)&ENTITY_TYPE=CHAT&ENTITY_ID=4&OWNER_ID={this.props.id}");
    // const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
    ToastAndroid.show("fn "+ this.props.uid, ToastAndroid.LONG);
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=${this.state.firstName}&LAST_NAME=${this.state.lastName}&EMAIL=${this.state.email}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}&PERSONAL_BIRTHDAY=${this.state.dob}&WORK_POSITION=${this.state.position}&PERSONAL_GENDER=${this.state.gender}&WORK_PHONE=${this.state.workphone}&UF_WEB_SITES=${this.state.website}&UF_SKYPE=${this.state.skype}&UF_FACEBOOK=${this.state.facebook}&UF_LINKEDIN=${this.state.linkedin}`,
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=${this.state.firstName}&LAST_NAME=${this.state.lastName}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}&PERSONAL_BIRTHDAY=${this.state.dob}&WORK_POSITION=${this.state.position}&PERSONAL_GENDER=${this.state.gender}&WORK_PHONE=${this.state.workphone}&UF_WEB_SITES=${this.state.website}&UF_SKYPE=${this.state.skype}&UF_FACEBOOK=${this.state.facebook}&UF_LINKEDIN=${this.state.linkedin}`,
    // const response = await fetch(afiaNoor+`user.updaFte?ID=${this.state.id}&NAME=uuu&LAST_NAME=aaa&EMAIL=${this.state.email}&PERSONAL_MOBILE=09007860111&PERSONAL_PHONE=0442526263&PERSONAL_BIRTHDAY=16/02/1995&WORK_POSITION=web dev&PERSONAL_GENDER=female&WORK_PHONE=03007898765&UF_WEB_SITES=emela.pk&UF_SKYPE=mehekti.khushi1129&UF_FACEBOOK=facebook.com&UF_LINKEDIN=linkedIn`,
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=Urwa&LAST_NAME=Ali`,
  
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=${this.state.firstName}&LAST_NAME=${this.state.lastName}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}&PERSONAL_BIRTHDAY=${this.state.dob}&WORK_POSITION=${this.state.position}&PERSONAL_GENDER=${this.state.gender}&WORK_PHONE=${this.state.workphone}`,
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=uuu&LAST_NAME=${this.state.lastName}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}&PERSONAL_BIRTHDAY=${this.state.dob}&WORK_POSITION=${this.state.position}&PERSONAL_GENDER=${this.state.gender}&WORK_PHONE=${this.state.workphone}`,
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=uuu&LAST_NAME=${this.state.lastName}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}`,
    // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=Urea&LAST_NAME=${this.state.lastName}`,
    const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=${this.state.firstName}&LAST_NAME=${this.state.lastName}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}&PERSONAL_BIRTHDAY=${this.state.dob}&WORK_POSITION=${this.state.position}&PERSONAL_GENDER=${this.state.gender}&WORK_PHONE=${this.state.workphone}&UF_SKYPE=${this.state.skype}&UF_FACEBOOK=${this.state.facebook}&UF_LINKEDIN=${this.state.linkedin}`,
    {method: 'POST',
    headers: {
    'Content-Type': 'application/json'},
    // body: JSON.stringify({
    //   // "provider": "email",s
    //   "data":
    //    {
    //       "email": this.state.username,
    //       "password": this.state.pass
    //   }
    // })
    }).then((json) =>  ToastAndroid.show("processing" , ToastAndroid.LONG))
    .catch((error) => console.warn("fetch error:", error.message));
   

    
    // const response = await fetch(afiaNoor+"im.recent.get");
    // const response = await fetch(afiaNoor+`im.dialog.messages.get?DIALOG_ID=${this.props.id}`);
    // const response = await fetch(afiaNoor+"im.dialog.messages.get?DIALOG_ID=83");
    // const jsonData = await response.json()
    // .then((json) =>  ToastAndroid.show("processing", ToastAndroid.LONG))
    //  .catch((error) => console.warn("fetch error:", error.message))

    //  jsonData.then(res=> res.json)
    //  .catch((error) => console.warn("fetch error:", error.message))


     ToastAndroid.show("saved", ToastAndroid.LONG);

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


  render() {


    // if(this.state.isLoading == true){
      
    //   return (
        
    //     <ActivityIndicator color="red" size='large' />
    //   //   <View>
    //   //   <TextInput  
    //   //               style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
    //   //               placeholder="Type your city name here!"  
    //   //               onChangeText={(text) => this.setState({text})}  
    //   //           /> 
    //   // </View>
      
    //   )
    // }



    return (

      <ScrollView>
 
<View>
{/* ---------------------------------header--------------------------------- */}
        
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
              // onPress={this.updateUserProfile && this.doLoading}
              onPress={this.updateUserProfile}
              // onPress={this.doLoading}
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
</View> 


{/* <ActivityIndicator animating={this.state.isLoading} /> */}
{/* <ActivityIndicator animating={this.state.isLoading} color="red" size='large'/> */}


{/* --------------------------------------Image Block----------------------------- */}
<View style={{backgroundColor: 'white', paddingVertical:10}}>
<View style={{flexDirection: 'row', display: 'flex',alignItems: 'center', justifyContent: 'center',marginBottom:10}}>
<Avatar.Image backgroundColor='#ffffff' source={require('../../assets/images/userprog.png')} size={80} />
 
</View>
<View style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
<Text style={styles.textTitle}>Change Profile Photo</Text>
</View>
</View>
{/* ----------------------------------block1--------------------------------- */}


<View style={{ marginTop:'4%',backgroundColor:'white', paddingVertical:8, paddingHorizontal:30}}>
  {/* -----------first name */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>First Name</Text>
<TextInput   underlineColorAndroid = "black"
// value={this.props.pfName}
// value={this.props.id}
value={this.state.firstName}
onChangeText={ this.handleInputTextChange}
// onChangeText={ (newText) => {
//   this.setState({ firstName: newText })} }
// onChangeText={(value) => this.setState({ firstName: this.handleInputTextChange })}

// onChange={(text)=>this.state.profileData.firstName =  text}
// onChange={(text)=>this.props.fName =  text}
editable
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="first name"  
                /> 
</View>
{/* ----------last name */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Last Name</Text>
<TextInput   underlineColorAndroid = "black"
// value={this.state.profileData.lastName}
value={this.state.lastName}
onChangeText={ this.handleInputTextChangeLastName}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="last name"  
                  
                /> 
</View>
{/* ----------Email */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16, color:'#49641D',justifyContent: 'center', paddingTop:5}}>Email</Text>
<TextInput   underlineColorAndroid = "black"
// value={this.state.profileData.email}
value={this.state.email}
// onChangeText={ this.handleInputTextChangeEmail}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:14, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="email"  
                  
                /> 
</View>
{/* ----------Mobile # */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Mobile#</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.mobile}
value={this.state.mobile}
onChangeText={ this.handleInputTextChangeMobile}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>
</View> 
{/* -----------------------block one end  */}

{/* -------------------------block 2--------------------------------- */}
<View  style={{ marginTop:'4%',backgroundColor:'white', paddingVertical:8, paddingHorizontal:30}}>
<Text style={{width:'40%',fontSize:18,color:'#E4E3E2', justifyContent: 'center', paddingTop:5}}>More</Text>

{/* ----------Phone */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D',
 justifyContent: 'center', paddingTop:5}}>Phone</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.phone}
value={this.state.phone}
onChangeText={ this.handleInputTextChangePhone}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------DOB */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>DOB</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.DOB}
value={this.state.dob}
onChangeText={ this.handleInputTextChangeDOB}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Position */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Position</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.position}
value={this.state.position}
onChangeText={ this.handleInputTextChangePosition}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Sex */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Sex</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.gender}
value={this.state.gender}
onChangeText={ this.handleInputTextChangeGender}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Website */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Website</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.website}
value={this.state.website}
onChangeText={ this.handleInputTextChangeWebsite}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Work phone */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Work Phone</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.workphone}
value={this.state.workphone}
onChangeText={ this.handleInputTextChangeWorkPhone}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Skype */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Skype</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.skype}
value={this.state.skype}
onChangeText={ this.handleInputTextChangeSkype}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------FB */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Facebook</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.facebook}
value={this.state.facebook}
onChangeText={ this.handleInputTextChangeFacebook}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------linkedin */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Linkedin</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.linkedin}
value={this.state.linkedin}
onChangeText={ this.handleInputTextChangeLinkedIn}

                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>
<View style={{height:40}}></View>
</View>
{/* -----block2 end  */}



</View>

      </ScrollView>
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
