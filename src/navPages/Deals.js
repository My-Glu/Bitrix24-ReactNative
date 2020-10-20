import React, { Component } from 'react';
import { View,StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';

export default class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>

        {/* ---------------------------------header--------------------------------- */}
        <StatusBar backgroundColor="#49641D" animated={true}/>
               <View>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                }
                    centerComponent={<Text style={{ fontSize:20}}>All Deals</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
            <View style={{flexDirection: 'row'}}>
                <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
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
                    <View style={{ flexDirection: 'row' }}>
        
                      <View style={styles.Rows}>
        
                        <View style={styles.registeredName}>
        
                          <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
                          <View style={{ marginLeft: 20 }}>
                            <Title style={{ color: '#49641D' }}>Flatteys</Title>
                          </View>
        
                        </View>
        
                        <View>
                          <TouchableOpacity style={{ width: 200, height: 20 }}>
                            <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',marginTop: '3%', fontSize: 35, color: '#e2e2e2' }}></Icon>
                          </TouchableOpacity>
                        </View>
        
                      </View>
        
                    </View>
              </View>
        
                  <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                  </View>
        
             
        
         
        
                    {/* ------------------------------row 2----------------------------------------------  */}
        
                    <View style={{ marginBottom: 15, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', width: 270 }}>
        
        
                      <View>
                        <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Deal Stage- <Text style={{ color: '#49641D' }}>Invoice</Text></Text>
                        <Text style={{ color: '#49641D' }}>-----------------------------</Text>
                      </View>
        
                    </View>
                  </View>
        
                  <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                  </View>
        
        
{/* ------------------------------row 3----------------------------------------------  */}
        
<View style={{ marginBottom: 15, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', width: 270 }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Contact</Text>
                        <Text style={{ color: '#49641D' }}>No name</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                  <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                  </View>


         {/* ------------------------------row 4----------------------------------------------  */}

        
<View style={{ marginBottom: 15, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', width: 270 }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Company name</Text>
                        <Text style={{ color: '#49641D' }}>Flatteys</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                  <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                  </View>



         {/* ------------------------------row 5----------------------------------------------  */}
        
         <View style={{marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', width: 270 }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Created on</Text>
                        <Text style={{ color: '#49641D' }}>08/09/2020</Text>
                      </View>
        
                    </View>
                  </View>


{/* ------------------------------row 6----------------------------------------------  */}
        
<View style={{ marginBottom: 15, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', width: 270 }}>
        
                      <View>
                        <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Amount/ Currency</Text>
                        <Text style={{ color: '#49641D' }}>$ 12,000</Text>
                      </View>
        
                    </View>
        
                  </View>
        
                  <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                  </View>
        
        {/* ------------More-------------- */}
                  <View style={{alignContent:'space-between',backgroundColor:'#FBFFF4',paddingTop:10, paddingBottom:10, flexDirection:'row', marginLeft:'5%'}}>
                  
                 
                  <TouchableOpacity 
                  //  delayPressIn={1} onPress={() =>}
                   >
                  <Text style={{textAlign:'left', paddingRight:'5%'}}>Change Stage</Text>
                  </TouchableOpacity>
                 
                  <TouchableOpacity 
                  //  delayPressIn={1} onPress={() =>}
                   >
                  <Text style={{ marginRight:'10%',textAlign:'left'}}>Create using source</Text>
                  </TouchableOpacity>
                 
                  <TouchableOpacity 
                  //  delayPressIn={1} onPress={() =>}
                   >
                  <Text style={{textAlign:'right', paddingRight:'2%'}}>More...</Text>
                  </TouchableOpacity>
                 

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
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 230,
      },
      Rows: {
        flexDirection: 'row',
        width: '90%'
      },
})