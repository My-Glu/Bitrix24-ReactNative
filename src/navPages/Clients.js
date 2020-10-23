import React, { Component } from 'react';
import { View,StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, TouchableWithoutFeedback } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import BottomPopUp from './BottomPopUp';
import MoreClient from './clients/MoreClient';
import MenuClient from './clients/MenuClient';

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToViewCompany = () => {

    Actions.viewCompany()

  }

  goBackToNavScreen = () => {

    Actions.navScreen()

  }
  
  render() {

    let popupRef = React.createRef()
    const onShowPopup = () =>{ popupRef.show()}
  const onClosePopup = () =>{ popupRef.close()}

  let popupRef2 = React.createRef()
  const onShowPopup2 = () =>{ popupRef2.show()}
const onClosePopup2 = () =>{ popupRef2.close()}


//   let popupRef = React.createRef()
//   const onShowPopup = () =>{ popupRef.show()}
// const onClosePopup = () =>{ popupRef.close()}

    return (

      <View>

 {/* ---------------------------------header--------------------------------- */}
        <StatusBar backgroundColor="#49641D" animated={true}/>
               <View>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                      <TouchableOpacity
                      onPress={this.goBackToNavScreen}
                      >
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                        </TouchableOpacity>
                }
                    centerComponent={<Text style={{ fontSize:20}}>All Clients</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
            <View style={{flexDirection: 'row'}}>
                <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                
                
                <TouchableOpacity   
                onPress={onShowPopup2}
                >
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>
                            <MenuClient
title=""
ref={(target) => popupRef2 = target}
onTouchOutside={onClosePopup2}
/>
                </View>     
            
            }
                    // rightComponent={<Text>Done</Text>}
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
               />
        </View>
        {/* -----Header end */}



        {/* -------------Big card view */}

        <View style={styles.bigCardView}>
         
          <View style={{ marginBottom: 15, marginLeft: '5%', marginTop: '5%' }}>
          <TouchableOpacity 
                  onPress={this.goToViewCompany}
                  >
            <View style={{ flexDirection: 'row' }}>

              <View style={styles.Rows}>

                <View style={styles.registeredName}>

                  <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
                  <View style={{ marginLeft: 5 }}>
                    <Title style={{ color: '#49641D' }}>Afia Noor</Title>
                  </View>
                  <Icon name="chevron-forward-outline" style={{ marginLeft: '10%',marginTop: '3%', fontSize: 35, color: '#e2e2e2' }}></Icon>
               
                </View>

              </View>

            </View>
            </TouchableOpacity>
      </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

     

 {/* ------------------------------second row----------------------------------------------  */}

 <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>

              <View>
                <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Company Type</Text>
                <Text style={{ color: '#49641D' }}>Client</Text>
              </View>

            </View>

          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

            {/* ------------------------------third row----------------------------------------------  */}

            <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Industry</Text>
                <Text style={{ color: '#49641D' }}>Information Technology</Text>
              </View>

            </View>
          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>


 {/* ------------------------------fourth row----------------------------------------------  */}

 <View style={{marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>

              <View>
                <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Responsible Person</Text>
                <Text style={{ color: '#49641D' }}>Farhan Sarwar</Text>
              </View>

            </View>
          </View>

{/* ------------More-------------- */}
          <View style={{backgroundColor:'#FBFFF4',paddingTop:10, paddingBottom:10}}>
           <TouchableOpacity 
           onPress={onShowPopup}
          //  delayPressIn={1} onPress={() =>}
           >
          <Text style={{textAlign:'right', paddingRight:'5%'}}>More...</Text>

          </TouchableOpacity>


          {/* <MenuClient
title=""
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/> */}

<MoreClient
title=""
ref={(s) => popupRef = s}
onTouchOutside={onClosePopup}
/>

          </View>      

        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    bigCardView: {
        marginBottom:'5%',
        marginTop:'5%',        
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: 'column',
       },
    
       registeredName: {
         justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
      },
      Rows: {
        flexDirection: 'row',
        width: '90%'
      },
})