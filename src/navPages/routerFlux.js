import React from 'react';
import Login from '../screens/login/Login';
import Channel from './Channel';
import Pipelines from './Pipelines';
import Clients from './Clients';
import ViewCompany from './clients/ViewCompany';
import ClientsEdit from './clients/ClientsEdit';
import ViewDeal from './deals/ViewDeal';
import EditDeal from './deals/EditDeal';
import ViewLeads from './leads/ViewLeads';
import EditLeads from './leads/EditLeads';
import MyActivities from './MyActivities';
import Employee from './Employee';
import Leads from './Leads';
import Deals from './Deals';
import ProductArchives from './ProductArchives';
import ViewProduct from './archiveProduct/ViewProduct';
import EditProduct from './archiveProduct/EditProduct';
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
         initial = {true}
         />

        <Scene
         key="navScreen" 
         component={NavScreen} 
         hideNavBar={true} 

        //  initial = {true}
         />

        <Scene
         key="pipeline" 
         component={Pipelines} 
         title="pipeline" 
         hideNavBar={true} 
         />
        
        <Scene 
        key="dashboard" 
        component={Dashboard} 
        hideNavBar={true} 
        />

        <Scene 
        key="channel" 
        component={Channel} 
        hideNavBar={true} 
        />

       <Scene 
        key="forgetPassword" 
        component={ForgetPassword} 

        />

      <Scene 
        key="employee" 
        component={Employee} 
        hideNavBar={true} 
        />

      <Scene 
        key="detailsEmployee" 
        component={DetailsEmployee} 
        hideNavBar={true} 
        />

      <Scene 
        key="allClient" 
        component={Clients} 
        hideNavBar={true} 
        />

      <Scene 
        key="MyActivities" 
        component={MyActivities} 
        hideNavBar={true} 
        />

      <Scene 
        key="viewCompany" 
        component={ViewCompany} 
        hideNavBar={true} 
        />

      <Scene 
        key="editClient" 
        component={ClientsEdit} 
        hideNavBar={true} 
        />


      <Scene 
        key="allLeads" 
        component={Leads} 
        hideNavBar={true} 
        />

      <Scene 
        key="viewLeads" 
        component={ViewLeads} 
        hideNavBar={true} 
        />

      <Scene 
        key="editLeads" 
        component={EditLeads} 
        hideNavBar={true} 
        />


      <Scene 
        key="allDeals" 
        component={Deals} 
        hideNavBar={true} 
        />

      <Scene 
        key="viewDeal" 
        component={ViewDeal}
        hideNavBar={true} 
        />

      <Scene 
        key="editDeal" 
        component={EditDeal}
        hideNavBar={true} 
        />


      <Scene 
        key="productArchives" 
        component={ProductArchives} 
        hideNavBar={true} 
        />

      <Scene 
        key="viewProduct" 
        component={ViewProduct}
        hideNavBar={true}  
        />

      <Scene 
        key="editProducts" 
        component={EditProduct}
        hideNavBar={true} 
               
        />

      </Scene>
    
    </Router>
    
  );

  export default Routes

  {/* 
    step0: index.d.ts
     step1: declare a scene for a screen with key, title, back and Component in router.js
    step2: make action method in the parent class with the key to child class
    step3: import action from recatnativerouterflux in the parent
    step4: declare <rout/> in App.js
    step5: import all routing screens to rout.js

*/}