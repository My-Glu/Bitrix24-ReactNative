import React, { Component } from 'react';
import { StyleSheet,View,TextInput, Text,ScrollView, StatusBar,Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class Information extends Component {
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
         <StatusBar backgroundColor="#49641D" animated={true}/>
       <View>
       <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={<Image source={require('../../assets/images/backarrowsmall.png')} />}
            centerComponent={{text: 'Information', fontWeight: 'bold',fontSize:20,style:{...styles.headerTitle}}}
            
            // rightComponent={<Image source={require('../../assets/images/search.png')} style={styles.headerRight} />}
            rightComponent={<Text>Done</Text>}
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
            })}
       />
</View>
{/* --------------------------------------Image Block----------------------------- */}
<View style={{backgroundColor: 'white', paddingVertical:20}}>
<View style={{flexDirection: 'row', display: 'flex',alignItems: 'center', justifyContent: 'center',marginBottom:20}}>
   <View  style={styles.circle}>
    <Text style={{width: 80, textAlign: 'center'}}>Image</Text>
  </View>
 
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
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="first name"  
                  
                /> 
</View>
{/* ----------last name */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Last Name</Text>
<TextInput   underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="last name"  
                  
                /> 
</View>
{/* ----------Email */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16, color:'#49641D',justifyContent: 'center', paddingTop:5}}>Email</Text>
<TextInput   underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="email"  
                  
                /> 
</View>
{/* ----------Mobile # */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Mobile#</Text>
<TextInput  underlineColorAndroid = "black"
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
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------DOB */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>DOB</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Position */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Position</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Sex */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Sex</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Website */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Website</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Work phone */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Work Phone</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------Skype */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Skype</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------FB */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Facebook</Text>
<TextInput  underlineColorAndroid = "black"
                    style={{width:'60%',height: 40, paddingHorizontal:5,fontSize:16, marginLeft:10, justifyContent: 'center'}}  
                    // placeholder="mobile number"       
                /> 
</View>

{/* ----------linkedin */}
<View style={{flexDirection: 'row', marginTop:'1%'}}>

<Text style={{width:'40%',fontSize:16,color:'#49641D', justifyContent: 'center', paddingTop:5}}>Linkedin</Text>
<TextInput  underlineColorAndroid = "black"
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