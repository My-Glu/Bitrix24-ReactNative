import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToNavScreen = () => {
    Actions.navScreen()
 }
  gotoNewEvent = () => {
    Actions.newEvent()
 }


 goToSearchScreen = () => {

  Actions.search()

}



  render() {
    return (
      <ScrollView>
      <View style={{marginTop:-20,}}>
         {/* ---------------------------------header--------------------------------- */}
         <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToNavScreen}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Calendar</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
            <View style={{flexDirection: 'row'}}>
 <TouchableOpacity
              onPress={this.goToSearchScreen}>
            <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
              </TouchableOpacity>
              
            <TouchableOpacity    
             onPress={this.gotoNewEvent}
            >
            <Icon name="add" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 26 }}></Icon>
           </TouchableOpacity>

          
           </View> 


    
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}

{/* -------------------------row 1-------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D6E2C2'}} />
  
                  </View>
  {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Today</Text>
  </View>
  {/* ----------------- */}
  {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D6E2C2'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 
<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '2%'}} >

<View style={{flexDirection: 'row' ,  justifyContent:'space-between', alignItems:'center' }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
<Image  source={require('../../assets/images/calendar48.png')} style={{height:30, width:30, }} />
                                    <View style={{ marginLeft:'8%' }}>
                                        <Title style={{ color: '#49641D', fontSize:16,  fontFamily:'segoesb',}}>Meeting with Raffy</Title>
                                        <Caption style={{ fontSize:11, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>today, from 2:30 pm to 3:30 pm</Caption>
                                    </View>
                               
                                    </View>
                                <View>
                                    <TouchableOpacity >
                                    <Icon name="chevron-forward-outline" color="#D3D3D3" style={{ marginTop: '3%',fontSize: 25 }}></Icon>
 
                                    </TouchableOpacity>
                                    </View>
</View>


</View>

{/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>

                  {/* ---------     row 1 end -------------- */}


{/* -------------------------row 2-------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D6E2C2'}} />
  
                  </View>
  {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Later</Text>
  </View>
  {/* ----------------- */}
  {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D6E2C2'}} />
  
                  </View>
          {/* ------------------------------Horizontal line end -------------------------------------- */}
 
<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '2%'}} >

<View style={{flexDirection: 'row' ,  justifyContent:'space-between', alignItems:'center' }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
<Image  source={require('../../assets/images/calendar48.png')} style={{height:30, width:30,}} />
                                    <View style={{ marginLeft:'8%' }}>
                                        <Title style={{ color: '#49641D', fontSize:16,  fontFamily:'segoesb',}}>Meeting with Raffy</Title>
                                        <Caption style={{ fontSize:11, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>today, from 2:30 pm to 3:30 pm</Caption>
                                    </View>
                               
                                    </View>
                                <View>
                                    <TouchableOpacity >
                                    <Icon name="chevron-forward-outline" color="#D3D3D3" style={{ marginTop: '3%',fontSize: 25 }}></Icon>
 
                                    </TouchableOpacity>
                                    </View>
</View>


</View>

{/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
{/* ---------------------------- */}

<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '2%'}} >

<View style={{flexDirection: 'row' ,  justifyContent:'space-between', alignItems:'center' }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
<Image  source={require('../../assets/images/calendar48.png')} style={{height:30, width:30,}} />
                                    <View style={{ marginLeft:'8%' }}>
                                        <Title style={{ color: '#49641D', fontSize:16,  fontFamily:'segoesb',}}>Meeting with Raffy</Title>
                                        <Caption style={{ fontSize:11, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>today, from 2:30 pm to 3:30 pm</Caption>
                                    </View>
                               
                                    </View>
                                <View>
                                    <TouchableOpacity >
                                    <Icon name="chevron-forward-outline" color="#D3D3D3" style={{ marginTop: '3%',fontSize: 25 }}></Icon>
 
                                    </TouchableOpacity>
                                    </View>
</View>


</View>

<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
                  {/* ---------     row 2 end -------------- */}



      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  mLeft:{
 
     marginLeft:'8%',
     backgroundColor: '#FBFFF4'
 
  },
  pLeft:{
 
     marginLeft:'8%'
 
  },
  smText:{fontSize:12, color:'#C0C0C0'},
  registeredName: {
     flexDirection: 'row',
     alignItems: 'center',
     height: 50,
     fontWeight: 'bold'
  
   },
   Rows: {
     flexDirection: 'row',   
   },
 
 
 })