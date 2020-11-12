import React, { Component } from 'react';
import { StyleSheet,View,TextInput, Text,ScrollView, StatusBar,Image,ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, TouchableWithoutFeedback } from 'react-native-paper';
import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
</View>

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
// value={this.state.profileData.firstName}
// onChange={(text)=>this.state.profileData.firstName =  text}
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
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="last name"  
                  
                /> 
</View>
{/* ----------Email */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16, color:'#49641D',justifyContent: 'center', paddingTop:5}}>Email</Text>
<TextInput   underlineColorAndroid = "black"
// value={this.state.profileData.email}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:14, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="email"  
                  
                /> 
</View>
{/* ----------Mobile # */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Mobile#</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.mobile}
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
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------DOB */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>DOB</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.DOB}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Position */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Position</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.position}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Sex */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Sex</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.gender}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Website */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Website</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.website}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Work phone */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Work Phone</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.workphone}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Skype */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Skype</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.skype}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------FB */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Facebook</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.facebook}
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------linkedin */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Linkedin</Text>
<TextInput  underlineColorAndroid = "black"
// value={this.state.profileData.linkedin}
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
