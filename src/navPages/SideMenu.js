import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, AsyncStorage,Image} from "react-native";
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Employee from '.././navPages/Employee'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

const SideMenu = (props) => {
    
    const [profileName, setProfileName] = useState('');
    // let profileName = AsyncStorage.getItem('email1');


    useEffect(() => {
        // document.title = `You clicked ${count} times`;

        // {displayData}

        AsyncStorage.getItem('email1').then(
            (value) =>
            // let name   = email.substring(0, email.lastIndexOf("@"));
              // AsyncStorage returns a promise
              // Adding a callback to get the value
              setProfileName(value.substring(0, value.lastIndexOf("@"))),
            // Setting the value in Text
          );


      });

    // useEffect(() => {
    //     // code to run on component mount
    //     displayData
    //   }, [])


    const displayData= async()=> {

        try{

            AsyncStorage.getItem('email1').then(
                (value) =>
                  // AsyncStorage returns a promise
                  // Adding a callback to get the value
                  setProfileName(value),
                // Setting the value in Text
              );



    // let uEmail = await AsyncStorage.getItem('email1');
    // setProfileName(uEmail)
    // Alert.alert(uEmail);

        }

        catch(error){
    Alert.alert(error)
        }
    
      }


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:25,alignItems:'center'}}>
              <Avatar.Image backgroundColor="#ffffff" source={require('../assets/images/userprog.png')} size={65} />
              <View style={{flexDirection:'column', marginLeft: 10}}>
    <Title style={{color:'green'}}>{profileName}</Title>
                <TouchableOpacity delayPressIn={1}
                onPress={()=> {props.navigation.navigate('Information')}}
                >
                <Caption>Edit Profile</Caption>
                </TouchableOpacity>
              </View>
            </View>
            </View>

              <Drawer.Section style={{marginBottom:70}}>
                  <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                      
                 <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/myactivities.png')} tintColor='#49641D' style={{width:19, height:18,}}/>)}
                 label="My Activities"
                 onPress={()=> {props.navigation.navigate('MyActivities')}}
                 width={220}
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('MyActivities')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
               <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/employees.png')} tintColor='#49641D' style={{width:21, height:21}}/> )}
                 label="Employees"
                 onPress={()=> {props.navigation.navigate('Employee')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('Employee')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/clients.png')} tintColor='#49641D' style={{width:20, height:20, }}/>  )}
                 label="Clients"
                 onPress={()=> {props.navigation.navigate('Clients')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('Clients')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}
                //  onPress={()=> {props.navigation.navigate('Leads')}}
                 >
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/leads.png')} tintColor='#49641D' style={{width:19, height:18,}}/> )}
                 label="Leads"
                 onPress={()=> {props.navigation.navigate('Leads')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('Leads')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/deals.png')} tintColor='#49641D' style={{width:20, height:20, marginHorizontal:1}}/> )}
                 label="Deals"
                 onPress={()=> {props.navigation.navigate('Deals')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('Deals')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/quotes.png')} tintColor='#49641D' style={{width:19, height:19, marginHorizontal:2}}/>)}
                 label="Quotes"
                 onPress={()=> {props.navigation.navigate('Quotes')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('Quotes')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/productarch.png')} tintColor='#49641D' style={{width:19, height:19, }}/> )}
                 label="Product Archives"
                 onPress={()=> {props.navigation.navigate('ProductArchives')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('ProductArchives')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/qualitychk.png')} tintColor='#49641D' style={{width:22, height:21,}}/> )}
                 label="Quality Check"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/invoices.png')} tintColor='#49641D' style={{width:18, height:18,}}/>)}
                 label="Invoices"
                 onPress={()=> {props.navigation.navigate('Invoices')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {props.navigation.navigate('Invoices')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/payments.png')} tintColor='#49641D' style={{width:18, height:18,}}/> )}
                 label="Payments"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>


              </Drawer.Section>
                 
                  

              
              
              
            </DrawerContentScrollView>

            {/* <Image  source={require('../assets/images/invoices.png')} tintColor='#49641D' style={{width:18, height:18,}}/> */}
            <Drawer.Section>
                <DrawerItem
                 icon = { () => (<Image  source={require('../assets/images/logout.png')} tintColor='#49641D' style={{width:18, height:18,}}/> )}
                 label="Sign Out"
                 onPress={() => {AsyncStorage.setItem('SESSION', false) &&  Actions.login()  }
                }
                 />
            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem
                 icon = { () => (<Image  source={require('../assets/images/switch.png')} tintColor='#49641D' style={{width:18, height:18,}}/> )}
                 label="Switch User"
                 onPress={()=> {props.navigation.navigate('SwitchUser')}}
                 />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles=StyleSheet.create({

    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft: 8,
        marginBottom:20
    },
    title:{
        fontSize:18,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption:{
        fontSize: 14
    },
    row:{
        marginTop: 12,
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 12
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:30
    },
    Paragraph:{
        fontWeight: 'bold',
        marginRight:2
    },
    drawerSection:{
        marginTop: 2
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
}); 