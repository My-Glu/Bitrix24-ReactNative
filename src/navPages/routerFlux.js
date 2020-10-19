import React from 'react';

import Login from '../screens/login/Login';
import Channel from './Channel';
import Pipelines from './Pipelines';
import Dashboard from './Dashboard';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import NavScreen from '../navPages/NavScreen';

import { Router, Scene } from 'react-native-router-flux';


const Routes = () => (
    
    <Router>
      <Scene key="root">
        
        <Scene
         key="login" 
         component={Login} 
         hideNavBar={true} 
         
         />

<Scene
         key="navScreen" 
         component={NavScreen} 
         hideNavBar={true} 
         initial = {true}
         />

        <Scene
         key="pipeline" 
         component={Pipelines} 
         title="pipeline" />
        
        <Scene 
        key="dashboard" 
        component={Dashboard} 
        />

        <Scene 
        key="channel" 
        component={Channel} 
        />

<Scene 
        key="forgetPassword" 
        component={ForgetPassword} 
        />




      </Scene>


      
    </Router>
  );

  export default Routes