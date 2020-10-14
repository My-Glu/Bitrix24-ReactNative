import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './screens/test';
import SideMenu from './screens/SideMenu';
import Profile from './screens/profile';
import Profile2 from './screens/profile2';
import chat from './screens/chat';
import Profile3 from './screens/profile3'

const Drawer = createDrawerNavigator();
const stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {

  

  render() {
    
    
    return (


<NavigationContainer>
        <stack.Navigator

          screenOptions={{
            headerShown: false,

          }}>
<Drawer.Screen name="root" component={root} />
<Tab.Screen name="root2" component={root2} />




           
          
          
          
        </stack.Navigator>
      </NavigationContainer>

    );


  }
}

function root() {
  return (

    <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name="test" component={Test} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}

function root2() {
  return (

    <Tab.Navigator  barStyle={{ backgroundColor: 'green' }} shifting={false}
    
    >
      <Tab.Screen name="Dashboard" component={Test} options={{tabBarIcon:()=> (<Icon name="dashboard" size={24} color='white'/>)}}/>
      <Tab.Screen name="Timelines" component={Profile} options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='white'/>)}}/>
      <Tab.Screen name="Chats" component={Profile2} options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='white'/>)}}/>
      <Tab.Screen name="Channel" component={chat}  options={{tabBarIcon:()=> (<Iconn name="chatbubbles-outline" size={24} color='white'/>)}}/>
      <Tab.Screen name="Menu" component={Profile3}  options={{tabBarIcon:()=> (<Icon name="home" size={24} color='white'/>)}}/>
      
    </Tab.Navigator>
  );
}