import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from "react-native";
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SideMenu = (props) => {

    
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:25,alignItems:'center'}}>
              <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
              <View style={{flexDirection:'column', marginLeft: 10}}>
                <Title style={{color:'green'}}>Farhan Sarwar</Title>
                <TouchableOpacity delayPressIn={1}>
                <Caption>Edit Profile</Caption>
                </TouchableOpacity>
              </View>
            </View>
            </View>

              <Drawer.Section style={{marginBottom:70}}>
                  <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                      
                 <DrawerItem 
                 icon = { () => (<Icon name="home-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="My Activities"
                 onPress={()=> {props.navigation.navigate('Home')}}
                 width={220}
                 
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
               <DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Employees"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Clients"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Leads"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Deals"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Quotes"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Product Archives"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Quality Check"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Invoices"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Icon name="account-outline" style={{fontSize:20,color:'grey'}} /> )}
                 label="Payments"
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}/>
                 </View>


              </Drawer.Section>
                 
              
              


                

                 

              
              
              
              
            </DrawerContentScrollView>

            <Drawer.Section>
                <DrawerItem
                 icon = { () => (<Icon name="exit-to-app" style={{fontSize:20,color:'grey'}} /> )}
                 label="Sign Out"
                 
                 />
            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem
                 icon = { () => (<Icon name="exit-to-app" style={{fontSize:20,color:'grey'}} /> )}
                 label="Switch User"
                 
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