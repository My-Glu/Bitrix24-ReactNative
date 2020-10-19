import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Employee from '.././navPages/Employee'
import Clients from './Clients'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//import Clients from './src/navPages/Clients';
//import ExploreScreen from './src/navPages/ExploreScreen';
//import SettingScreen from './src/navPages/SettingScreen';

// import Clients from './src/navPages/Clients';
// import ExploreScreen from './src/navPages/ExploreScreen';
// import SettingScreen from './src/navPages/SettingScreen';


import Chat from './Chat';
import Dashboard from './Dashboard';
import Pipelines from './Pipelines';
import Channel from './Channel';
import Menu from './Menu';
import SideMenu from './SideMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', marginLeft:10 }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}

        <Icon name="menu" size={24} color='#49641D' />

        {/* <Image
          // source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawer.png'}}
          source={require('./src/assets/images/noorgrplogo3x.png')}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        /> */}
      </TouchableOpacity>
    </View>
  );
}

// options={{
//   title: 'CPU Home', headerLeft: () => (
//       <TouchableOpacity
//           style={Styles.headerButton}
//           onPress={() => navigation.openDrawer()}
//       >
//           <Text>Open Drawer</Text>
//       </TouchableOpacity>
//   ),
// }}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//seems like bottom nav screens
  switch (routeName) {
    // case 'Clients':
    //   return 'Clients';
    // case 'ExploreScreen':
    //   return 'Explore';
      case 'Dashboard':
      return 'Dashboard';
      case 'Pipelines':
      return 'Pipelines';
       case 'Chat':
      return 'Chat';
      case 'Channel':
      return 'Channel';
      case 'Menu':
      return 'Menu';

  }
}

function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#d1f595',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: '#49641D',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
         
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 11
        },
      }}>
        
        {/* bottom nav screen one */}
      {/* <Tab.Screen
        name="Clients"
        component={Clients}
        options={{
          tabBarLabel: 'Clients',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  /> */}
         {/* bottom nav screen Two */}
      {/* <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} /> */}



        <Tab.Screen 
        name="DASHBOARD"
        component={Dashboard}
        options={{tabBarIcon:()=> (<Icon name="dashboard" size={24} color='#fff'/>)}}
         />

        <Tab.Screen
        name="PIPELINES"
        component={Pipelines}
        options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}
         />

        <Tab.Screen
        name="CHATS"
        component={Chat}
        options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}
         />
        <Tab.Screen
        name="CHANNEL"
        component={Channel}
        options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}
         />
        <Tab.Screen
        name="MENU"
        component={Menu}
        options={{tabBarIcon:()=> (<Icon name="menu" size={24} color='#fff'/>)}}
         />

    </Tab.Navigator>

  );
}

function DashboardScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Main Screen"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#49641D', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      /> 
    </Stack.Navigator>

    // <Stack.Navigator
    //   initialRouteName="Clients"
    //   // component={BottomTabStack}
      
    //   screenOptions={{
    //     headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        
    //     headerStyle: {
    //       backgroundColor: '#fff', //Set Header color
    //     },
    //     headerTintColor: '#49641D', //Set Header text color
    //     headerTitleStyle: {
    //       fontWeight: 'bold', //Set Header text style
    //     }
    //   }}>
    //   <Stack.Screen
    //     name="SettingScreen"
    //     component={SettingScreen}
    //     options={{
    //       title: 'Settings', //Set Header Title
          
    //     }}/>
    // </Stack.Navigator>



  );
}




function SettingScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Second Screen"
      // component={BottomTabStack}
      
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        
        headerStyle: {
          backgroundColor: '#fff', //Set Header color
        },
        headerTintColor: '#49641D', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Settings', //Set Header Title
          
        }}/>


    </Stack.Navigator>
  );
}

function NavScreen() {
  return (
    <NavigationContainer>

<Drawer.Navigator
drawerContent={props => <SideMenu {...props} />}
      // options={{tabBarIcon:()=> (<Icon name="menu" size={24} color='#49641D'/>)}}
        drawerContentOptions={{
          activeTintColor: '#49641D',
          itemStyle: { marginVertical: 5 },
        }}>
          {/* ------------Screen one------------ */}
          
         <Drawer.Screen
          name="DashboardScreenStack"
          options={{ drawerLabel: 'Dashboard' }}
          component={DashboardScreenStack} />
          {/* ---------------Screen Two--------------- */}

          <Drawer.Screen
          name="SettingScreenStack"
          options={{ drawerLabel: 'Setting Screen Option' }}
          component={SettingScreenStack} />

           {/* ---------------Screen Three--------------- */}

           <Drawer.Screen
          name="Employee"
          options={{ drawerLabel: 'Employees' }}
          component={Employee} />

          
          {/* // set nav screen plus side menu onpress */}
          <Drawer.Screen
          name="Clients"
          options={{ drawerLabel: 'All Clients' }}
          component={Clients} />

      </Drawer.Navigator>

      {/* --------Navigation Drawer------------- */}
      {/* <Drawer.Navigator
      // options={{tabBarIcon:()=> (<Icon name="menu" size={24} color='#49641D'/>)}}
        drawerContentOptions={{
          activeTintColor: '#49641D',
          itemStyle: { marginVertical: 5 },
        }}> */}
          {/* ------------Screen one------------ */}
        {/* <Drawer.Screen
          name="ClientsScreenStack"
          options={{ drawerLabel: 'Clients Screen Option' }}
          component={ClientsScreenStack} /> */}
          {/* ---------------Screen Two--------------- */}
        {/* <Drawer.Screen
          name="SettingScreenStack"
          options={{ drawerLabel: 'Setting Screen Option' }}
          component={SettingScreenStack} />
      </Drawer.Navigator> */}

    </NavigationContainer>
  );
}

export default NavScreen;
