import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Picker} from '@react-native-community/picker'  

export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToMenu = () => {
    Actions.menu()
 }
  goBackNewEvent = () => {
    Actions.newEvent()
 }

 
 goToCalender = () => {
  Actions.calendar()
}


  render() {
    return (
      <View style={{marginTop:-20,}}>
         {/* ---------------------------------header--------------------------------- */}
         <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goToCalender}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>New Event</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            // rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
          //   <View style={{flexDirection: 'row'}}>

          //   <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
          //   <TouchableOpacity    
          //    onPress={this.goToCalender}
          //   >
          //   <Icon name="add" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 26 }}></Icon>
          //  </TouchableOpacity>

          
          //  </View> 
    
    // }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}
<View style={{marginHorizontal:'5%',}}>
{/* -------------------------row 1--------------------------------- */}
   <View>
{/* <View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, margin:'5%', }}> */}
     
<TextInput  color="#49641D" placeholder="Lead name"  editable={true} style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginVertical:'3%', height:35, paddingVertical:0,paddingHorizontal:'2%', paddingVertical:'1%', }}/>
                        {/* // </View> */}

</View>
{/* -------------------------row 1 end--------------------------------- */}




{/* -------------------------row 2--------------------------------- */}
{/* <View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginHorizontal:'5%', }}>

<View style={{flexDirection:'row'}}>

  <View style={{flexDirection:'column'}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
  
  <Text >Start</Text>
  <Text style={{textAlign:'right'}}>today 2:30pm</Text>

</View>

<View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
  
  <Text>End</Text>
  <Text>today 4:00pm</Text>

</View>
</View>
<View>
<Icon name="chevron-forward-outline" style={{ fontSize: 35, color: '#e2e2e2' }}></Icon>
</View>
</View>
          
       

<View>

</View>


  </View> */}

<View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4,  }}>

<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:'2%', paddingVertical:'1%',}}>
<View>
  
  <Text >Start</Text>
  <Text >End</Text>
  
</View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
<View>
  
  <Text >today 2:30pm</Text>
  <Text >today 4:00pm</Text>
  
</View>
<Icon name="chevron-forward-outline" style={{ fontSize: 30, color: '#e2e2e2' }}></Icon>
</View>

</View>

</View>


{/* -------------------------row 2 end-------------------------------- */}

{/* -------------------------row 3--------------------------------- */}
 <View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginTop: '3%'}}>

<Text style={{ paddingHorizontal:'2%', paddingVertical:'1%',}} >Start</Text>

</View>
{/* -------------------------row 3 end--------------------------------- */}

{/* -------------------------row 4--------------------------------- */}
{/* <View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginHorizontal:'5%', marginTop: '3%'}}> */}

  
<TextInput  multiline={true}
 numberOfLines={4}
            underlineColorAndroid='transparent' color="#49641D" placeholder="Description"  editable={true} style={{lineHeight:10, borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginTop:'3%', height:80,textAlignVertical: 'top',paddingHorizontal:'2%', paddingVertical:'1%', }}/>
                      


{/* </View> */}
{/* -------------------------row 4 end--------------------------------- */}

{/* -------------------------row 5--------------------------------- */}
 <View>
{/* <View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, margin:'5%', }}> */}
     
<TextInput  color="#49641D" placeholder="Location"  editable={true} style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginVertical:'3%', height:35, paddingHorizontal:'2%', paddingVertical:'1%',}}/>
                        {/* // </View> */}

</View>
{/* -------------------------row 5 end --------------------------------- */}

{/* -------------------------row 6--------------------------------- */}
<View>
<View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'  }}>
<Title style={{ color: '#49641D', fontSize:15,  fontFamily:'segoesb',paddingHorizontal:'2%',}}>Add attendees </Title>
<Icon name="chevron-forward-outline" color="#49641D" style={{fontSize: 25 }}></Icon>
               
</View>
</View>
{/* -------------------------row 6 end--------------------------------- */}

{/* -------------------------row 7--------------------------------- */}
   <View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginTop: '3%'}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: '2%', paddingRight:'2%'}}>
<Text style={{ paddingHorizontal:'2%', paddingVertical:'1%',}} >Private event</Text>

<View style={{borderWidth:1,borderColor:'#C0C0C0',  height:30,width:'40%',  justifyContent: 'center',  }}>

<Picker   
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="No" value="no" />  
                    <Picker.Item label="Yes" value="yess" />  
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                
                </View>
{/* <View style={{borderWidth:1,borderColor:'#C0C0C0', borderRadius:4, paddingLeft: '2%',paddingRight:'1%', width:'40%'}}>

<View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
<Text>No</Text>

<Icon name="caret-down-outline" color="#49641D" style={{fontSize: 20 }}></Icon>
</View>

</View> */}

</View>
</View>
{/* -------------------------row 7 end--------------------------------- */}

{/* -------------------------row 8--------------------------------- */}
<View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginTop: '3%'}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: '2%', paddingRight:'2%'}}>
<Text style={{ paddingHorizontal:'2%', paddingVertical:'1%',}} >Availibility</Text>

<View style={{borderWidth:1,borderColor:'#C0C0C0',  height:30,width:'40%',  justifyContent: 'center',  }}>

<Picker   
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Occupied" value="no" />  
                    <Picker.Item label="Yes" value="yess" />  
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                
                </View>
{/* 
<View style={{borderWidth:1,borderColor:'#C0C0C0', borderRadius:4, paddingLeft: '2%',paddingRight:'1%', width:'40%'}}>

<View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
<Text>Occupied</Text>
<Icon name="caret-down-outline" color="#49641D" style={{fontSize: 20 }}></Icon>
</View>

</View> */}

</View>
</View>
{/* -------------------------row 8 end--------------------------------- */}

{/* -------------------------row 9--------------------------------- */}
<View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginTop: '3%'}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: '2%', paddingRight:'2%'}}>
<Text style={{ paddingHorizontal:'2%', paddingVertical:'1%',}} >Priority</Text>


<View style={{borderWidth:1,borderColor:'#C0C0C0',  height:30,width:'40%',  justifyContent: 'center',  }}>

<Picker   
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Normal" value="norm" />  
                    <Picker.Item label="Yes" value="yess" />  
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                
                </View>

</View>
</View>
{/* -------------------------row 9 end--------------------------------- */}

{/* -------------------------row 10--------------------------------- */}
<View style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginTop: '3%'}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: '2%', paddingRight:'2%'}}>
<Text style={{ paddingHorizontal:'2%', paddingVertical:'1%',}} >Calendar</Text>


<View style={{borderWidth:1,borderColor:'#C0C0C0',  height:30,width:'40%',  justifyContent: 'center',  }}>

<Picker   
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Hassan farooq" value="user" />  
                    <Picker.Item label="Yes" value="yess" />  
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                
                </View>

</View>
</View>
{/* -------------------------row 10 end--------------------------------- */}

</View>


      </View>
    );
  }
}

const styles = StyleSheet.create ({  
  container: {  
      flex: 1,  
      alignItems: 'center',  
      justifyContent: 'center',  
  },  
 textStyle:{  
     margin: 24,  
     fontSize: 25,  
     fontWeight: 'bold',  
     textAlign: 'center',  
 },  
 pickerStyle:{  
   
   borderColor: '#D3D3D3',
     height: 30,  
     width: "40%",  
     color: '#344953',  
     justifyContent: 'center',  
 }  
}) 