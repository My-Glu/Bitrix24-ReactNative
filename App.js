import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, AppRegistry,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ListOne from './src/components/ListOne';
import Login from './src/screens/login/Login';
import Splash from './Splash';
import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';
import Information from './src/screens/info/Information';
//  import TabNavigator from './src/screens/bottomNav/BottomNavigation';
// import Chat from './src/screens/bottomNav/Chat';
// import Navigation from './Navigation';


// const App = createStackNavigator({

// Splash:{screen:Splash},
// Login:{screen:Login}

// })
// export default createAppContainer(App);

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
}

componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },2000);
}

setTimePassed() {
    this.setState({timePassed: true});
}

render() {
    if (!this.state.timePassed) {
        return <Splash/>;
    } else {
        return <Login/>;
    }
}

  // render() {
 
  //   return (
     
  //     <View>
  //         {/* <Navigation/> */}
  //       {/* <ForgetPassword/> */}
  //     {/* <TabNavigator/> */}
  //           {/* <Login/> */}
  //           {/* <Information/> */}
  //            {/* <Splash /> */}
  //            {/* <Chat/> */}





  //     </View>

  //   );
  // }
}






//--------------------bottom nav within nav drawer all ftns-----------------------
// import 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import * as React from 'react';
// import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

// import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Clients from './src/navPages/Clients';
// import ExploreScreen from './src/navPages/ExploreScreen';
// import SettingScreen from './src/navPages/SettingScreen';

// import Chat from './src/navPages/Chat';
// import Dashboard from './src/navPages/Dashboard';
// import Pipelines from './src/navPages/Pipelines';
// import Channel from './src/navPages/Channel';
// import Menu from './src/navPages/Menu';
// import SideMenu from './src/navPages/SideMenu';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// const NavigationDrawerStructure = (props)=> {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: 'row', marginLeft:10 }}>
//       <TouchableOpacity onPress={()=> toggleDrawer()}>
//         {/*Donute Button Image */}

//         <Icon name="menu" size={24} color='#49641D' />

//         {/* <Image
//           // source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawer.png'}}
//           source={require('./src/assets/images/noorgrplogo3x.png')}
//           style={{ width: 25, height: 25, marginLeft: 5 }}
//         /> */}
//       </TouchableOpacity>
//     </View>
//   );
// }

// // options={{
// //   title: 'CPU Home', headerLeft: () => (
// //       <TouchableOpacity
// //           style={Styles.headerButton}
// //           onPress={() => navigation.openDrawer()}
// //       >
// //           <Text>Open Drawer</Text>
// //       </TouchableOpacity>
// //   ),
// // }}

// function getHeaderTitle(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
// //seems like bottom nav screens
//   switch (routeName) {
//     // case 'Clients':
//     //   return 'Clients';
//     // case 'ExploreScreen':
//     //   return 'Explore';
//       case 'Dashboard':
//       return 'Dashboard';
//       case 'Pipelines':
//       return 'Pipelines';
//        case 'Chat':
//       return 'Chat';
//       case 'Channel':
//       return 'Channel';
//       case 'Menu':
//       return 'Menu';

//   }
// }

// function BottomTabStack() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Dashboard"
//       tabBarOptions={{
//         activeTintColor: '#d1f595',
//         inactiveTintColor: 'white',
//         style: {
//           backgroundColor: '#49641D',
//           borderTopRightRadius: 20,
//           borderTopLeftRadius: 20,
         
//         },
//         labelStyle: {
//           textAlign: 'center',
//           fontSize: 11
//         },
//       }}>
        
//         {/* bottom nav screen one */}
//       {/* <Tab.Screen
//         name="Clients"
//         component={Clients}
//         options={{
//           tabBarLabel: 'Clients',
//           // tabBarIcon: ({ color, size }) => (
//           //   <MaterialCommunityIcons name="home" color={color} size={size} />
//           // ),
//         }}  /> */}
//          {/* bottom nav screen Two */}
//       {/* <Tab.Screen
//         name="ExploreScreen"
//         component={ExploreScreen}
//         options={{
//           tabBarLabel: 'Explore',
//           // tabBarIcon: ({ color, size }) => (
//           //   <MaterialCommunityIcons name="settings" color={color} size={size} />
//           // ),
//         }} /> */}



//         <Tab.Screen 
//         name="DASHBOARD"
//         component={Dashboard}
//         options={{tabBarIcon:()=> (<Icon name="dashboard" size={24} color='#fff'/>)}}
//          />

//         <Tab.Screen
//         name="PIPELINES"
//         component={Pipelines}
//         options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}
//          />

//         <Tab.Screen
//         name="CHATS"
//         component={Chat}
//         options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}
//          />
//         <Tab.Screen
//         name="CHANNEL"
//         component={Channel}
//         options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}
//          />
//         <Tab.Screen
//         name="MENU"
//         component={Menu}
//         options={{tabBarIcon:()=> (<Icon name="menu" size={24} color='#fff'/>)}}
//          />

//     </Tab.Navigator>

//   );
// }

// function DashboardScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator initialRouteName="Dashboard">
//       <Stack.Screen
//         name="BottomTabStack"
//         component={BottomTabStack}
//         options={({ route }) => ({
//           headerTitle: getHeaderTitle(route),
//           headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
//           headerStyle: {
//             backgroundColor: '#fff', //Set Header color
//           },
//           headerTintColor: '#49641D', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         })}
//       /> 
//     </Stack.Navigator>

//     // <Stack.Navigator
//     //   initialRouteName="Clients"
//     //   // component={BottomTabStack}
      
//     //   screenOptions={{
//     //     headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        
//     //     headerStyle: {
//     //       backgroundColor: '#fff', //Set Header color
//     //     },
//     //     headerTintColor: '#49641D', //Set Header text color
//     //     headerTitleStyle: {
//     //       fontWeight: 'bold', //Set Header text style
//     //     }
//     //   }}>
//     //   <Stack.Screen
//     //     name="SettingScreen"
//     //     component={SettingScreen}
//     //     options={{
//     //       title: 'Settings', //Set Header Title
          
//     //     }}/>
//     // </Stack.Navigator>



//   );
// }

// function SettingScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="Second Screen"
//       // component={BottomTabStack}
      
//       screenOptions={{
//         headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        
//         headerStyle: {
//           backgroundColor: '#fff', //Set Header color
//         },
//         headerTintColor: '#49641D', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         }
//       }}>
//       <Stack.Screen
//         name="SettingScreen"
//         component={SettingScreen}
//         options={{
//           title: 'Settings', //Set Header Title
          
//         }}/>
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>

// <Drawer.Navigator
// drawerContent={props => <SideMenu {...props} />}
//       // options={{tabBarIcon:()=> (<Icon name="menu" size={24} color='#49641D'/>)}}
//         drawerContentOptions={{
//           activeTintColor: '#49641D',
//           itemStyle: { marginVertical: 5 },
//         }}>
//           {/* ------------Screen one------------ */}
          
//         <Drawer.Screen
//           name="DashboardScreenStack"
//           options={{ drawerLabel: 'Dashboard' }}
//           component={DashboardScreenStack} />
//           {/* ---------------Screen Two--------------- */}
//         <Drawer.Screen
//           name="SettingScreenStack"
//           options={{ drawerLabel: 'Setting Screen Option' }}
//           component={SettingScreenStack} />
//       </Drawer.Navigator>

//       {/* --------Navigation Drawer------------- */}
//       {/* <Drawer.Navigator
//       // options={{tabBarIcon:()=> (<Icon name="menu" size={24} color='#49641D'/>)}}
//         drawerContentOptions={{
//           activeTintColor: '#49641D',
//           itemStyle: { marginVertical: 5 },
//         }}> */}
//           {/* ------------Screen one------------ */}
//         {/* <Drawer.Screen
//           name="ClientsScreenStack"
//           options={{ drawerLabel: 'Clients Screen Option' }}
//           component={ClientsScreenStack} /> */}
//           {/* ---------------Screen Two--------------- */}
//         {/* <Drawer.Screen
//           name="SettingScreenStack"
//           options={{ drawerLabel: 'Setting Screen Option' }}
//           component={SettingScreenStack} />
//       </Drawer.Navigator> */}

//     </NavigationContainer>
//   );
// }

// export default App;

//------------------------latest nav working all ftns above---------------------------------





// -----------------------------nav two--------------------------

// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator} from '@react-navigation/stack';
// // import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/Ionicons';
// const Tab = createBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <Tab.Navigator

//     tabBarOptions={{
//               activeTintColor: '#80B033',
//               inactiveTintColor: 'white',
//               style: {
//                 backgroundColor: '#49641D',
//               },
//               labelStyle: {
//                 textAlign: 'center',
//                 fontSize: 16
//               },
//             }}

//     // screenOptions={({ route }) => ({
// //       tabBarIcon: ({ focused, color, size }) => {
// //      let iconName;
// //      if (route.name === 'TabA') {
// //         iconName = focused
// //         ? 'ios-information-circle'
// //         : 'ios-information-circle-outline';
// //       } else if (route.name === 'TabB') {
// //         iconName = focused
// //         ? 'ios-list-box'
// //         : 'ios-list';
// //       }
// // return <Ionicons name={iconName} size={size} color={color}     />;
// //         },
// //       })}
//       // tabBarOptions={{
//       // activeTintColor: 'tomato',
//       // inactiveTintColor: 'gray',
//       // }}
//     >
//         <Tab.Screen name="TabA" component={TabAScreen} options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}} />
//         <Tab.Screen name="TabB" component={TabBScreen} options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}/>
//     </Tab.Navigator>
//   );
// }
// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>No New Notifications!</Text>
//       <Button 
//       onPress={() => navigation.goBack()}
//       title="Go back home"
//       />
//     </View>
//   );
// }
// const Stack = createStackNavigator();
// function TabAScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
//       <Stack.Screen name="TabA Details" component={Details} />
//     </Stack.Navigator>
//   );
// }
// function TabADetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
//       <Text>
//         Welcome to TabA page!
//       </Text>
//       <Button 
//       onPress={() => navigation.navigate('TabA Details')}
//       title="Go to TabA Details"
//       />
//     </View>
//   );
// }
// function Details() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
//       <Text>
//         TabA Details here!
//       </Text>
//     </View>
//   );
// }
// function TabBScreen() {
//   return (
//     <View>
//       <Text style={{textAlign: 'center', marginTop: 300}}>
//         Welcome to TabB page!
//       </Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}}/>
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{tabBarIcon:()=> (<Icon name="chat" size={24} color='#fff'/>)}} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }













//-------------------- faseeh code One below ----------------------
// import React, { Component } from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';

// import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// // import Test from './screens/test';
// // import SideMenu from './screens/SideMenu';
// // import Profile from './screens/profile';
// import Chat from './src/screens/bottomNav/Chat';
// import Splash from './src/screens/splash/Splash';
// import Login from './src/screens/login/Login';

// const Drawer = createDrawerNavigator();
// const stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default class App extends Component {

//     render() {
       
//     return (

// <NavigationContainer>
//         <stack.Navigator

//           screenOptions={{
//             headerShown: false,

//           }}>
// <Tab.Screen name="root2" component={root2} />
// <Drawer.Screen name="root" component={root} />

                    
          
//         </stack.Navigator>
//       </NavigationContainer>

//     );


//   }
// }

// function root() {
//   return (

//     <Drawer.Navigator >
//       <Drawer.Screen name="chat" component={Chat} />
//       <Drawer.Screen name="login" component={Login} />
//     </Drawer.Navigator>
//   );
// }

// function root2() {
//   return (

//     <Tab.Navigator >
//       <Tab.Screen name="chat" component={Chat} />
//       <Tab.Screen name="splash" component={Splash} />
//    </Tab.Navigator>

// );
// }
//--------------------faseeh code----------------------------


//------------------------------------------wroking drawer-----------------------
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>I am Home</Text>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>I am Notifications</Text>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
//----------------------------------working drawer above -----------------------------

//----------------------------------new drawer code start-------------------------------------

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }

//----------------------------------new drawer code end -------------------------------------
// import * as React from 'react';
// import {StyleSheet, Text, View,Button, Image} from 'react-native';  
// import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
// import Icon from 'react-native-vector-icons/Ionicons';  
// import {Header} from 'react-native-elements';
// import NavDrawer from './src/navDrawer/NavDrawer';

// class Dashboard extends React.Component {  
//   render() {  
//     return (  
//         <View> 
//         <View style={styles.containerh}>
//         {/* <NavDrawer/> */}
//             <Header 
//             containerStyle={styles.headerContainer}
//             leftComponent={<Image source={require('./src/assets/images/bar.png')}
//             onPress={() =>navigation.toggleDrawer()}
//             />}
//             // centerComponent={{text: 'Home', style:{...styles.headerTitle}}}
//             rightComponent={<Image source={require('./src/assets/images/search.png')} style={styles.headerRight} />}
//         /></View>
        
//         <View style={styles.container}>
//             <Text>Dashboard</Text> 
//             </View>
         
//         </View>  
//     );  
//   }  
// }  
// class ProfileScreen extends React.Component {  
//   render() {  
//     return (  
//         <View style={styles.container}>  
//           <Text>Profile Screen</Text>  
//         </View>  
//     );  
//   }  
// }  
// class ImageScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Image Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
// class CartScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         justifyContent: 'center',  
//         alignItems: 'center'  
//     },  
//     containerh: {
//         marginTop:30,
//         paddingTop: 10,
//         paddingBottom:20,
//         flex: 1,
//         width: '100%',
//         borderLeftColor: '#FFF',
//         borderLeftWidth: 2,
//         backgroundColor: '#FFF',
//     },
//       headerContainer: {
//           backgroundColor: '#FFF',
//           borderBottomRightRadius: 100,
//           height: '10%',
//       },
//       headerTitle: {
//           fontFamily: 'HelveticaNeue',
//           color: '#000',
//           fontSize: 20,
//       },
//       headerRight: {
//           width: 24,
//           height: 24,
//           marginHorizontal: 10
//       }
// });  
// const TabNavigator = createMaterialBottomTabNavigator(  
//     {  
//         Dashboard: { screen: Dashboard,  
//             navigationOptions:{  
//                 tabBarLabel:'Dashboard',  
//                 tabBarIcon: ({ tintColor }) => (  
//                     <View>  
//                         <Icon style={[{color: tintColor}]} size={25} name={'ios-Dashboard'}/>  
//                     </View>),  
//             }  
//         },  
//         Profile: { screen: ProfileScreen,  
//             navigationOptions:{  
//                 tabBarLabel:'Profile',  
//                 tabBarIcon: ({ tintColor }) => (  
//                     <View>  
//                         <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
//                     </View>),  
//                 activeColor: '#f60c0d',  
//                 inactiveColor: '#f65a22',  
//                 barStyle: { backgroundColor: '#f69b31' },  
//             }  
//         },  
//         Image: { screen: ImageScreen,  
//             navigationOptions:{  
//                 tabBarLabel:'History',  
//                 tabBarIcon: ({ tintColor }) => (  
//                     <View>  
//                         <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
//                     </View>),  
//                 activeColor: '#615af6',  
//                 inactiveColor: '#46f6d7',  
//                 barStyle: { backgroundColor: '#67baf6' },  
//             }  
//         },  
//         Cart: {  
//             screen: CartScreen,  
//             navigationOptions:{  
//                 tabBarLabel:'Cart',  
//                 tabBarIcon: ({ tintColor }) => (  
//                     <View>  
//                         <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
//                     </View>),  
//             }  
//         },  
//     },  
//     {  
//       initialRouteName: "Dashboard",  
//       activeColor: '#f0edf6',  
//       inactiveColor: '#226557',  
//       barStyle: { backgroundColor: '#3BAD87' },  
//     },  
// );  
  
// export default createAppContainer(TabNavigator);  

//----------------------- all screens --------------------------------------------

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import ListOne from './src/components/ListOne';
// import Login from './src/screens/login/Login';
// import Splash from './src/screens/splash/Splash';
// import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';
// import Information from './src/screens/info/Information';
// //  import TabNavigator from './src/screens/bottomNav/BottomNavigation';
// // import Chat from './src/screens/bottomNav/Chat';
// // import Navigation from './Navigation';

// export default class App extends React.Component {
  
//     constructor() {
//     super();
//     // this.state = { 
//     // };
//   }


//   render() {
 
//     return (
     
//       <View>
//           {/* <Navigation/> */}
//         {/* <ForgetPassword/> */}
//       {/* <TabNavigator/> */}
//             {/* <Login/> */}
//             {/* <Information/> */}
//              {/* <Splash/> */}
//              {/* <Chat/> */}

//       </View>

//     );
//   }
// }



// ------------------------------------
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {
//   Button,
//   View,
//   Text,
//   TouchableOpacity,
//   Image
// } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Clients from './src/navPages/Clients';
// import Deals from './src/navPages/Deals';
// import Leads from '../src/navPages/Leads';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props)=> {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TouchableOpacity onPress={()=> toggleDrawer()}>
//         {/*Donute Button Image */}
//         <Image
//           source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
//           style={{
//             width: 25,
//             height: 25,
//             marginLeft: 5
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// function firstScreenStack({ navigation }) {
//   return (
//       <Stack.Navigator initialRouteName="Clients">
//         <Stack.Screen
//           name="Clients"
//           component={Clients}
//           options={{
//             title: 'Clients', //Set Header Title
//             headerLeft: ()=>
//               <NavigationDrawerStructure
//                 navigationProps={navigation}
//               />,
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//   );
// }

// ---------------------------
// function secondScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="Deals"
//       screenOptions={{
//         headerLeft: ()=>
//           <NavigationDrawerStructure
//             navigationProps={navigation}
//           />,
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         }
//       }}>
//       <Stack.Screen
//         name="Deals"
//         component={Deals}
//         options={{
//           title: 'Deals', //Set Header Title
          
//         }}/>
//       <Stack.Screen
//         name="Leads"
//         component={Leads}
//         options={{
//           title: 'Leads', //Set Header Title
//         }}/>
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: { marginVertical: 5 },
//         }}>
//         <Drawer.Screen
//           name="Clients"
//           options={{ drawerLabel: 'First page Option' }}
//           component={firstScreenStack} />
//         <Drawer.Screen
//           name="Deals"
//           options={{ drawerLabel: 'Second page Option' }}
//           component={secondScreenStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// --------------------------------------






// // // import React, { Component } from 'react';

// import React, { Component } from 'react';  
// import { View, Text, StyleSheet, Button } from 'react-native';  
// import Icon from 'react-native-vector-icons/Ionicons';  
// import { createDrawerNavigator } from 'react-navigation'  
  
// import {  
//     createSwitchNavigator,  
//     createAppContainer,  
//     createStackNavigator  
// } from 'react-navigation';  
// export default class App extends Component {  
//     render() {  
//         return <AppContainer />;  
//     }  
// }  
  
// class WelcomeScreen extends Component {  
//     static navigationOptions = {  
//          title: 'Welcome',  
//     };  
//     render() {  
//         return (  
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
//                 <Text>WelcomeScreen</Text>  
//                 <Button  
//                     title="Go to DashboardScreen"  
//                     onPress={() => this.props.navigation.navigate('Dashboard')}  
//                 />  
//             </View>  
//         );  
//     }  
// }  
  
// class DashboardScreen extends Component {  
//     static navigationOptions = {  
//          title: 'Dashboard',  
//     };  
  
//     render() {  
//         return (  
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
//                 <Text>DashboardScreen</Text>  
//             </View>  
//         );  
//     }  
// }  
// const DashboardStackNavigator = createStackNavigator(  
//     {  
//         DashboardNavigator: DashboardScreen  
//     },  
//     {  
//         defaultNavigationOptions: ({ navigation }) => {  
//         return {  
//             headerLeft: (  
//                 <Icon  
//                     style={{ paddingLeft: 10 }}  
//                     onPress={() => navigation.openDrawer()}  
//                     name="md-menu"  
//                     size={30}  
//                 />  
//             )  
//         };  
//         }  
//     }  
// );  
  
// const WelcomeStackNavigator = createStackNavigator(  
//     {  
//         WelcomeNavigator: WelcomeScreen  
//     },  
//     {  
//         defaultNavigationOptions: ({ navigation }) => {  
//             return {  
//                 headerLeft: (  
//                     <Icon  
//                         style={{ paddingLeft: 10 }}  
//                         onPress={() => navigation.openDrawer()}  
//                         name="md-menu"  
//                         size={30}  
//                     />  
//                 )  
//             };  
//         }  
//     }  
// );  
// const AppDrawerNavigator = createDrawerNavigator({  
//     Dashboard: {  
//         screen: DashboardStackNavigator  
//     },  
//     Welcome: {  
//         screen: WelcomeStackNavigator  
//     },  
// });  
  
// const AppSwitchNavigator = createSwitchNavigator({  
//     Dashboard: { screen: AppDrawerNavigator },  
//     Welcome: { screen: WelcomeScreen },  
  
// });  
  
// const AppContainer = createAppContainer(AppSwitchNavigator);  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         alignItems: 'center',  
//         justifyContent: 'center'  
//     }  
// });  

// ---------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// // import ListOne from './src/components/ListOne';
// import Login from './src/screens/login/Login';
// import Splash from './src/screens/splash/Splash';
// import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';
// //  import TabNavigator from './src/screens/bottomNav/BottomNavigation';
// // import Chat from './src/screens/bottomNav/Chat';
// // import Navigation from './Navigation';

// export default class App extends React.Component {
  
//     constructor() {
//     super();
//     // this.state = {
//     // };
//   }


//   render() {
 
//     return (
     
//       <View>
//           {/* <Navigation/> */}
//         {/* <ForgetPassword/> */}
//       {/* <TabNavigator/> */}
//             <Login/>
//              {/* <Splash/> */}
//              {/* <Chat/> */}

//       </View>

//     );
//   }
// }


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
// export default class BottomNavigation extends Component {
//   render() {
//     return (
      
//         // <NavigationContainer>
//         // <Stack.Navigator>
//         // <Stack.Screen name="Home" component={HomeScreen} />
//         // </Stack.Navigator>
//         // </NavigationContainer>

//     );
//   }
// }

// function App() {react-native link
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
  


// const Stack = createStackNavigator();
// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }

//   export default App;