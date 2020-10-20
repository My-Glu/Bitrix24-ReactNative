import React, { Component } from 'react';
import { View,StatusBar, Text, TextInput,Multiline, TouchableOpacity,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';

export default class EditLeads extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView>
        <View>
  
  {/* ---------------------------------header--------------------------------- */}
  <StatusBar backgroundColor="#49641D" animated={true}/>
         <View>
         <Header 
              containerStyle={{backgroundColor: '#fff',}}
              leftComponent={
                  <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
          }
              centerComponent={<Text style={{ fontSize:20}}>Edit</Text>
                  // {text: 'All Clients', fontSize:30}
              }
          
              rightComponent={
              // <Image source={require('../../assets/images/search.png')}  />
      
          <Text>Save</Text>  
      
      }
              // rightComponent={<Text>Done</Text>}
              // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
         />
  </View>
  {/* -----Header end */}
  
  
          {/* -------------row 1------------------ */}
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Lead name*</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} color="#49641D" value="Lead name" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
       </View>
          {/* -------------row 1 end ------------------ */}
  
  
  
  
  
          {/* -------------row 2------------------------------------------------------------- */}
            
          {/* ----------------- */}
          <View style={styles.mLeft}>
  <Text style={styles.smText}>Status Information</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}

{/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>Client</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View>

{/* --------------------------- */}

  
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 2 end ------------------ */}
  
  
  
  
  
          {/* -------------row 3 new------------------ */}
                  {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Currency</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>US Dollar</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View>

{/* --------------------------- */}
  
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 3 new end------------------ */}




        
  
  
  
  
  
          {/* -------------row 4------------------ */}
     {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Deal Opportunity</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Deal Opportunity" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 4 end ------------------ */}
  
  
  
  
  
          {/* -------------row 5------------------ */}
           {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Source</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>Call</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View>

{/* --------------------------- */}
  
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 5 end ------------------ */}
  
  
  
  
  
          {/* -------------row 6------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Source Information</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Source Information" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 6 end ------------------ */}
  
  
  
  
  
          {/* -------------row 7------------------ */}
          {/* ----------------- */}
    {/* -------------row  image ------------------ */}
  {/* ----------------- */}
  <View  >
  <Text style={styles.smText}>Responsible person</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
                  <View style={ { backgroundColor: 'white', paddingLeft:'8%'}}>
                  <View style={styles.Rows}>
  
  <View style={styles.registeredName}>
  
  <Avatar.Image source={require('../../assets/images/blue6.jpg')} size={40} />
  <View style={{ marginLeft: 20 }}>
    <Title style={{ color: '#49641D' , fontSize:17}}>Farhan Sarwar</Title>
  </View>
  
  </View>
  
  
  </View>
   {/* ------------------------------Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:5, marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ------------------- */}
  <View  style={{ marginTop:'3%', marginBottom:5}}>
  <Text style={{color:'#49641D'}}>Change</Text>
  </View>
  {/* ------------------ */}
  {/* <View>
  <TouchableOpacity style={{ width: 300, height: 20 }}>
    <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',marginTop: '3%', fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
  </View> */}
  
 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ---------------- */}
  
  <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight:'5%'}}>
      <Title style={{ color: '#49641D' , fontSize:14}}>Available to everyone</Title>
      {/* <ion-icon name="checkmark-circle-outline"></ion-icon> */}
      <Icon name="checkmark-circle-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
    </View>
  {/* ---------------- */}
  {/* </View> */}
  {/* --------------------------- */}
      
      
       

  
  </View>

     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                  </View>
  
          {/* -------------row 7 end ------------------ */}
  
  
  {/* ------------------8---------------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Saluation</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Not Selected" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------8 end---------------------- */}
  
  
          {/* -------------row 9------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Last name</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Last name" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 9 end ------------------ */}
  
  
  {/* ------------------------10 new ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Name</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Name" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------10 new end----------------- */}
  
  {/* ------------------------11 new ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Second name</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Second name" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------11 new end----------------- */}
  



  {/* ------------------------12 new ----------------- */}
<View style={styles.mLeft}>
  <Text style={styles.smText}>Date of Birth</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Date of Birth" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------12 new end----------------- */}
  
  



          {/* -------------row 13------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Work phone</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Add" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 13 end ------------------ */}
  
  
  
  
  
          {/* -------------row 14------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Email</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Add" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 14 end ------------------ */}
  
  
  
  
  
          {/* -------------row 15------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Website</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Add" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 15 end ------------------ */}
  
  {/* ------------------------16 ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Company name</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Company name" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------16 end----------------- */}
  
  {/* ------------------------16 ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Position</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Position" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------16 end----------------- */}
  
 
  
  
  
          {/* -------------row 17 block------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Address</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* -------------1---------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Street, Building" color="#49641D" editable={false} />
  
   {/* ------------------------------sm Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ------------------------------sm Horizontal line end-------------------------------------- */}
   {/* -------------2---------- */}
  <TextInput style={styles.pLeft} value="Suite/ Apartment" color="#49641D" editable={false} />
  
   {/* ------------------------------sm Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------3-------------- */}
  <TextInput style={styles.pLeft} value="City" color="#49641D" editable={false} />
  {/* --------------------------- */}
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------4-------------- */}
  <TextInput style={styles.pLeft} value="Region" color="#49641D" editable={false} />
  {/* --------------------------- */}
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------5-------------- */}
  <TextInput style={styles.pLeft} value="State/ Province" color="#49641D" editable={false} />
  {/* --------------------------- */}
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------6-------------- */}
  <TextInput style={styles.pLeft} value="Zip" color="#49641D" editable={false} />
  {/* --------------------------- */}
  
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------6-------------- */}
  <TextInput style={styles.pLeft} value="Company" color="#49641D" editable={false} />
  {/* --------------------------- */}
  </View>
  {/* ------------------------------sm Horizontal line end-------------------------------------- */}
  
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 17 block end ------------------ */}
  
  
  
  
  
        
  
  
  
  
          {/* -------------row 18------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Comment</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Comment" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 18 end ------------------ */}
  
  
  
  
  
          {/* -------------row 19------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Lead products</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="none" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} value="Select" color="#49641D" editable={false} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 19 end ------------------ */}
  
  <View style={{height:200}}></View>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

    mLeft:{
   
       marginLeft:'8%'
   
    },
    pLeft:{
   
       marginLeft:'8%'
   
    },
    smText:{fontSize:12, color:'#C0C0C0'},
    registeredName: {
       flexDirection: 'row',
       alignItems: 'center',
       height: 50,
    
     },
     Rows: {
       flexDirection: 'row',   
     },
   
   
   })