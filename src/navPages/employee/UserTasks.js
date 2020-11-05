import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, FlatList,StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 import MenuUserTasks from './MenuUserTasks'

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

  goToDetailsUserTasks = () => {
    
    Actions.detailsUserTasks()
 }
  

 goToSearchScreen = () => {

  Actions.search()

}

 goBackToDetailsEmployee = () => {
  Actions.detailsEmployee()

}

  render() {

    let popupRefMenu = React.createRef()
    const onShowPopupMenu = () =>{ popupRefMenu.show()}
    const onClosePopupMenu = () =>{ popupRefMenu.close()}

    return (
      <View style={{ marginTop:-20,}}>
        {/* ---------------------------------header--------------------------------- */}
     <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToDetailsEmployee}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Tasks</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
            <View style={{flexDirection: 'row'}}>

<TouchableOpacity
            onPress={this.goToSearchScreen}
            >
        <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
        </TouchableOpacity>
         <TouchableOpacity    
            onPress={onShowPopupMenu}
            >
            <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
           </TouchableOpacity>

           <MenuUserTasks
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
<View style={{ flexDirection: 'row', }}>

              <View style={{width:'10%', marginLeft:-5}}>
              <TouchableOpacity
            //   onPress={this.goToLoginScreen}
              >
                <Icon name="add" color="#49641D" style={{ marginTop: '3%',fontSize: 40 }}></Icon>
                </TouchableOpacity>   
                </View>
{/* <View Style={{ width:'10%'}}></View> */}
              <View style={{ borderWidth:1, borderColor:'#F3F3F3', borderRadius:8, width: '90%', marginLeft:'5%'}}>
                     <TextInput placeholder="Add Tasks..."></TextInput>        
              </View>

              </View>

{/* ----------------------------item 1 end-------------------------- */}





{/* -----------------------item 2 ------------------------- */}

<View>
<FlatList 
                    data={[  
                        {title: 'Logo Design'},{title: 'Android Developer'}, {title: 'Web Developer'},{title: 'SEO Expert'},  
                      
                    ]} 

                    renderItem={({item}) =>  
                 
<View>
  <TouchableOpacity
    onPress={this.goToDetailsUserTasks}  
  >
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
</TouchableOpacity>
</View>
                
                    }
                   />
                      </View>

{/* -------------------------------item 2 end ----------------- */}


</View>
</View>
{/* // ------after header view end  */}


      </View>
    );
  }
}
