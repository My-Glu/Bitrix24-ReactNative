import React from 'react';

import Login from '../screens/login/Login';
import Channel from './Channel';
import Pipelines from './Pipelines';
import Employee from './Employee';
import DetailsEmployee from './employee/DetailsEmployee';
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
        //  initial = {true}
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

      <Scene 
        key="employee" 
        component={Employee} 
        />

      <Scene 
        key="detailsEmployee" 
        component={DetailsEmployee} 
        />

{/* 
    step0: index.d.ts
     step1: declare a scene for a screen with key, title and Component in router.js
    step2: make action method in the parent class with the key to child class
    step3: import action from recatnativerouterflux in the parent
    step4: declare <rout/> in App.js


*/}

      </Scene>
    
    </Router>
    
  );

  export default Routes