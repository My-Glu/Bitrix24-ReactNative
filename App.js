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




















import * as React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  


class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile Screen</Text>  
        </View>  
    );  
  }  
}  
class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
    }  
}  
class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  



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
//  import TabNavigator from './src/screens/bottomNav/BottomNavigation';
// // import Chat from './src/screens/bottomNav/Chat';

// export default class App extends React.Component {
  
//     constructor() {
//     super();
//     // this.state = {
//     // };
//   }


//   render() {
 
//     return (
     
//       <View>
//         {/* <ForgetPassword/> */}
//       <TabNavigator/>
//             {/* <Login/> */}
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