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
        //  back={false}
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
        head={false}
        />

      <Scene 
        key="allClient" 
        component={Clients} 
        head={false}
        />

      <Scene 
        key="MyActivities" 
        component={MyActivities} 
        head={false}
        />

      <Scene 
        key="viewCompany" 
        component={ViewCompany} 
        head={false}
        />

      <Scene 
        key="editClient" 
        component={ClientsEdit} 
        head={false}
        />


      <Scene 
        key="allLeads" 
        component={Leads} 
        hea={false}
        />

      <Scene 
        key="viewLeads" 
        component={ViewLeads} 
        back={false}
        />

      <Scene 
        key="editLeads" 
        component={EditLeads} 
        back={false}
        />


      <Scene 
        key="allDeals" 
        component={Deals} 
        back={false}
        />

      <Scene 
        key="viewDeal" 
        component={ViewDeal}
        back={false} 
        />

      <Scene 
        key="editDeal" 
        component={EditDeal}
        back={false} 
        />


      <Scene 
        key="productArchives" 
        component={ProductArchives} 
        back={false}
        />

      <Scene 
        key="viewProduct" 
        component={ViewProduct}
        back={false} 
        />

      <Scene 
        key="editProducts" 
        component={EditProduct}
        title="Edit"
               
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