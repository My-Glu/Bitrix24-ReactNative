import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 import MenuDetailsUserTasks from './MenuDetailsUserTasks'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


// var radio_props = [
//   {label: 'param1', value: 0 },
//   {label: 'param2', value: 1 }
// ];

var radio_props = [
  {label: 'Logo Designing', value: 0 }
  // {label: 'param2', value: 1 }
];

export default class UserTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToUserTasks = () => {
    this.setState({ show: false });
    Actions.userTasks()
 }

  

  render() {

    let popupRefMenu = React.createRef()
    const onShowPopupMenu = () =>{ popupRefMenu.show()}
    const onClosePopupMenu = () =>{ popupRefMenu.close()}

    return (
        <ScrollView>
      <View style={{ marginTop:-20,}}>
        {/* ---------------------------------header--------------------------------- */}
     <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToUserTasks}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Tasks</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
            <View style={{flexDirection: 'row'}}>
            <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
            <TouchableOpacity    
            onPress={onShowPopupMenu}
            >
            <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
           </TouchableOpacity>
           <MenuDetailsUserTasks
title=""
ref={(target) => popupRefMenu = target}
onTouchOutside={onClosePopupMenu}
/>
           </View> 


    
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}

<View style={{width:deviceWidth, }}>
    {/* ----------------------------item 1 -------------------------- */}
 <View style={{marginHorizontal:'5%', marginTop: '3%'}}>
{/* <View style={{ flexDirection: 'row', }}>

              <View style={{width:'10%', marginLeft:-5}}>
              <TouchableOpacity
            //   onPress={this.goToLoginScreen}
              >
                <Icon name="add" color="#49641D" style={{ marginTop: '3%',fontSize: 40 }}></Icon>
                </TouchableOpacity>   
                </View>

              <View style={{ borderWidth:1, borderColor:'#F3F3F3', borderRadius:8, width: '90%', marginLeft:'5%'}}>
                     <TextInput placeholder="Add Tasks..."></TextInput>        
              </View>

              </View>  */}

{/* ----------------------------item 1 end-------------------------- */}

{/* -----------------------item 2 ------------------------- */}
<View>
<View>
<RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
          buttonColor={'#49641D'}
          buttonInnerColor={'#e74c3c'}
          buttonOuterColor={'#e7aa3c'}
        />
</View>

<View style={{flexDirection: 'row', alignItems: 'center', marginLeft:'10%'}}>

<Avatar.Image source={require('../../assets/images/blue6.jpg')} size={25}  /> 
<Icon name="chevron-forward-outline" style={{ fontSize: 35, color: '#e2e2e2' }}/>

<Avatar.Image source={require('../../assets/images/blue6.jpg')} size={25} style={{position:'relative'}} />      

<View style={{borderWidth:1, borderRadius:15, backgroundColor:'#49641D', padding:3, marginLeft:10}}>            
<Text style={{color:'white'}}>Tomorrow</Text>
</View>
</View> 

</View>
  {/* ----------------------------horizontal line-------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0', width:'100%', marginBottom: 10 }}/>

                </View>
{/* -------------------------------item 2 end ----------------- */}


{/* ---------------------------------------- item 3 ------------------------------ */}
<View style={{ borderWidth:0, borderColor:'#F3F3F3', borderRadius:8, width: '90%', marginLeft:'5%'}}>
                     <TextInput placeholder="Add a checklist"></TextInput>        
              </View>
{/* ---------------------------------------- item 3 end ------------------------------ */}

 {/* ----------------------------horizontal line-------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0', width:'100%', marginBottom: 10 }}/>

                </View>

                 {/* -------   ------------- item 4  ---------------------   ---------- */}
        
<View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Status</Text>
                        
                        
                        <Text style={{ color: '#49641D' }}>Pending</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row 4 end ------------------ */}



          {/* -------------row 5 ------------------ */}

          <View style={{ marginBottom: 15,}}>
                    <View style={{ flexDirection: 'row',  justifyContent: 'space-between'}}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Priority</Text>
                                               
                        <Text style={{ color: '#49641D' }}>High Priority</Text>
                      </View>

                      <View style={{ justifyContent: 'center'}}>
                      {/* <Icon name="flame" color="#C0C0C0" style={{fontSize: 25 ,}}></Icon> */}
                      <Image source={require('../../assets/images/fire.png')} style={{width:25, height:25}}/>
                      </View>
        
                    </View>
        
                  </View>
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row 5 end ------------------ */}


          {/* -------------row 6  ------------------ */}
        
          <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Deadline</Text>
                        
                        
                        <Text style={{ color: '#49641D' }}>None</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row  6 end ------------------ */}


   {/* -------------row 7  ------------------ */}
        
   <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Score</Text>
                        
                        
                        <Text style={{ color: '#49641D' }}>No Score</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row  7 end ------------------ */}
        
        
          {/* -------------row  8  ------------------ */}
         
        
           <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View >
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16,}}>Responsible Person</Text>
                        
                        
                        <View style={{flexDirection: 'row', color: '#49641D' }}>
                            <Avatar.Image source={require('../../assets/images/blue6.jpg')} size={25}/>
                         <Text style={{marginLeft:'5%'}}>Hassan Farooq</Text></View>
                         <Text style={{fontSize:12, marginTop:'5%'}}>Change</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
       
          {/* -------------row  8 end ------------------ */}

          {/* -------------row  9   ------------------ */}
        
           <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Created by</Text>
                        
                        
                        <View style={{flexDirection: 'row', color: '#49641D' }}><Avatar.Image source={require('../../assets/images/blue6.jpg')}
                         size={25}  />
                         <Text style={{marginLeft:'5%'}}>Hassan Farooq</Text></View>

                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
         
          {/* -------------row  9 end ------------------ */}

             {/* -------------row 10  ------------------ */}
        
             <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Add observer</Text>
                        
                        
                        <Text style={{ color: '#49641D' }}>Add</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row  10 end ------------------ */}


   {/* -------------row 11  ------------------ */}
        
   <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Add Participant</Text>
                        
                        
                        <Text style={{ color: '#49641D' }}>Add</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row  11 end ------------------ */}


   {/* -------------row 12  ------------------ */}
        
   <View style={{ marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row',  }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Add Files</Text>
                        
                        
                        <Text style={{ color: '#49641D' }}>Add</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
          {/* -------------row  12 end ------------------ */}


</View>
{/* ----- sub main container view end  */}

               
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:30, }}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
       </View>
{/* ------------------------------------- */}

<View style={{marginHorizontal:'5%', marginTop: '3%',marginBottom:'20%'}}>
<View style={{ flexDirection: 'row', alignItems: 'center',}}>

            
{/* <View Style={{ width:'10%'}}></View> */}
              <View style={{ borderWidth:1, borderColor:'#F3F3F3', borderRadius:8, width: '90%',}}>
                     <TextInput placeholder="Add comment..."></TextInput>        
              </View>
              <View style={{width:'10%', marginLeft:5}}>
              <TouchableOpacity
            //   onPress={this.goToLoginScreen}
              >
                <Icon name="happy-outline" color="#49641D" style={{ marginTop: '3%',fontSize: 30 }}></Icon>
                </TouchableOpacity>   
                </View>
              </View>

</View>



</View>
{/* // ------after header view end  */}


      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

    mLeft:{
   
       marginLeft:'8%'
   
    },
    pLeft:{
   
       marginLeft:'8%'
   
    },
    smText:{fontSize:12, color:'#C0C0C0' },
    registeredName: {
       flexDirection: 'row',
       alignItems: 'center',
       height: 50,

    
     },
     Rows: {
       flexDirection: 'row',   
     },
   
   
   })