import React, { Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, AsyncStorage,Image, ToastAndroid} from "react-native";
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Employee from '.././navPages/Employee'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

var mProfileName = 'Name';
class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileName:'',

        };

        AsyncStorage.getItem('email1').then(
            (value) =>{
            let name   = value.substring(0, value.lastIndexOf("@"));
              // AsyncStorage returns a promise
              // Adding a callback to get the value
            //   setProfileName(value.substring(0, value.lastIndexOf("@"))),
            this.setState({profileName: name})
            // ToastAndroid.show("userName "+name, ToastAndroid.LONG);
            // mProfileName=name;
            
            // Setting the value in Text
            });
      }
 
      componentDidMount(){
        // AsyncStorage.getItem('email1').then(
        //     (value) =>{
        //     let name   = value.substring(0, value.lastIndexOf("@"));
        //       // AsyncStorage returns a promise
        //       // Adding a callback to get the value
        //     //   setProfileName(value.substring(0, value.lastIndexOf("@"))),
        //     this.setState({profileName: name})
        //     ToastAndroid.show("userName "+name, ToastAndroid.LONG);
        //     // mProfileName=name;
            
        //     // Setting the value in Text
        //     });
      }


render() {
    // var namePro=  AsyncStorage.getItem('email1');
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:25,alignItems:'center'}}>
              <Avatar.Image backgroundColor="#ffffff" source={require('../assets/images/userprog.png')} size={65} />
              <View style={{flexDirection:'column', marginLeft: 10}}>
    <Title style={{color:'green'}}>{this.state.profileName}</Title>
    {/* <Title style={{color:'green'}}>{namePro}</Title> */}
                <TouchableOpacity delayPressIn={1}
                onPress={()=> {this.props.navigation.navigate('Information')}}
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
                 onPress={()=> {this.props.navigation.navigate('MyActivities')}}
                 width={220}
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('MyActivities')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
               <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/employees.png')} tintColor='#49641D' style={{width:21, height:21}}/> )}
                 label="Employees"
                 onPress={()=> {this.props.navigation.navigate('Employee')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('Employee')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/clients.png')} tintColor='#49641D' style={{width:20, height:20, }}/>  )}
                 label="Clients"
                 onPress={()=> {this.props.navigation.navigate('Clients')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('Clients')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}
                //  onPress={()=> {props.navigation.navigate('Leads')}}
                 >
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/leads.png')} tintColor='#49641D' style={{width:19, height:18,}}/> )}
                 label="Leads"
                 onPress={()=> {this.props.navigation.navigate('Leads')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('Leads')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/deals.png')} tintColor='#49641D' style={{width:20, height:20, marginHorizontal:1}}/> )}
                 label="Deals"
                 onPress={()=> {this.props.navigation.navigate('Deals')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('Deals')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
<DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/quotes.png')} tintColor='#49641D' style={{width:19, height:19, marginHorizontal:2}}/>)}
                 label="Quotes"
                 onPress={()=> {this.props.navigation.navigate('Quotes')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('Quotes')}}
                 />
                 </View>

                 <View style={{flexDirection:'row',alignItems:'center',width:150}}>
                 <DrawerItem 
                 icon = { () => (<Image  source={require('../assets/images/productarch.png')} tintColor='#49641D' style={{width:19, height:19, }}/> )}
                 label="Product Archives"
                 onPress={()=> {this.props.navigation.navigate('ProductArchives')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('ProductArchives')}}
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
                 onPress={()=> {this.props.navigation.navigate('Invoices')}}
                 width={220}
                 
                 />
                 <Icon name="arrow-right" style={{fontSize:18}}
                 onPress={()=> {this.props.navigation.navigate('Invoices')}}
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
                //  onPress={() => {AsyncStorage.setItem('SESSION', "false) &&  Actions.login()  }
                 onPress={() => {AsyncStorage.setItem('SESSION', JSON.stringify(false)) &&  Actions.login()  }
                }
                 />
            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem
                 icon = { () => (<Image  source={require('../assets/images/switch.png')} tintColor='#49641D' style={{width:18, height:18,}}/> )}
                 label="Switch User"
                 onPress={()=> {this.props.navigation.navigate('SwitchUser')}}
                 />
            </Drawer.Section>
        </View>
    );

}


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