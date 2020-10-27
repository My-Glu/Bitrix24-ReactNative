import React, { Component } from 'react';
import { StyleSheet,View,TextInput, Text,ScrollView, StatusBar,Image, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuDetailsEmployee from './MenuDetailsEmployee'
import { Actions } from 'react-native-router-flux';

export default class DetailsEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToEmployee = () => {

    Actions.employee()

  }


  render() {

    let popupRef = React.createRef()
    const onShowPopup = () =>{ popupRef.show()}
  const onClosePopup = () =>{ popupRef.close()}

    return (
        <ScrollView>
  {/* ---------------------------------header--------------------------------- */}

               <View  style={{ marginTop:-20,}}>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                      <TouchableOpacity
                      onPress={this.goBackToEmployee}
                      >
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                        </TouchableOpacity>                 }
                    centerComponent={<Text style={{ fontSize:20}}>Employee</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
                    // <ion-icon name="pencil-outline"></ion-icon>
            <View style={{flexDirection: 'row'}}>
                <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                <TouchableOpacity    onPress={onShowPopup}>
                <Icon name="pencil-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>

<MenuDetailsEmployee
title=""
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/>
                </View>     
            
            }
                    // rightComponent={<Text>Done</Text>}
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
               />
        </View>
        {/* -----Header end */}  



        {/* --------------------------------------Image Block----------------------------- */}
<View style={{backgroundColor: 'white', paddingVertical:10}}>
<View style={{flexDirection: 'row', display: 'flex',alignItems: 'center', justifyContent: 'center',marginBottom:10}}>
<Avatar.Image source={require('../../assets/images/blue6.jpg')} size={60} />
 
</View>
<View style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
<Text style={styles.textTitle}>Shahid Saleem</Text>
<Text style={styles.text}>IOS Developer</Text>
</View>
</View>
{/* ----------------------------------block1--------------------------------- */}


  {/* -------------------- 3 card views in row ------------------------------ */}
  <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, marginTop: -10, marginHorizontal:'5%' }}>
          <View style={styles.cardView}>
          <Icon name="call" color="#49641D" style={{marginTop: '3%',fontSize: 20 }}></Icon>
            <Text style={{ color: '#49641D', fontSize: 12 }}>CALL</Text>
          </View>
         <View  style={{ width:'2%'}}></View>
         {/* <ion-icon name="chatbox-ellipses"></ion-icon> */}
          <View style={styles.cardView}>
          <Icon name="chatbox-ellipses" color="#49641D" style={{ marginTop: '3%',fontSize: 20 }}></Icon>
            <Text style={{ color: '#49641D', fontSize: 12 }}>SMS</Text>
          </View>
          <View  style={{ width:'2%'}}></View>
          {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
          <View style={styles.cardView}>
          <Icon name="logo-whatsapp" color="#49641D" style={{ marginTop: '3%',fontSize: 20 }}></Icon>
            <Text style={{ color: '#49641D', fontSize: 12 }}>WHATSAPP</Text>
          </View>
          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
          <Icon name="mail" color="#49641D" style={{ marginTop: '3%',fontSize: 20 }}></Icon>
            <Text style={{ color: '#49641D', fontSize: 12 }}>E-MAIL</Text>
          </View>

      </View>

{/* ------------------------------Horizontal line -------------------------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ------------------------------Horizontal line end -------------------------------------- */}

<View>

<Title style={{marginLeft:'8%' , color:'#C0C0C0', fontSize:22}}>General</Title>

<View style={{marginTop:'3%'}}>

<Title style={{marginLeft:'8%' , color:'#C0C0C0'}}>Email</Title>
<Title style={{marginLeft:'8%' , color:'#49641D'}}>abc123@xyz.com</Title>

</View>
<Title style={{marginLeft:'8%' , color:'#C0C0C0'}}>Mobile</Title>
<Title style={{marginLeft:'8%' , color:'#49641D'}}>+923007860123</Title>

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
       
        fontSize: 17,
        
    },
    text:{
        fontSize: 14,
        
    },
    cardView: {
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
        paddingVertical: '1%',
        height: '60%',
        width: 80,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },

})