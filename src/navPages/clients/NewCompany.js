import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToAllClients = () => {
   
    Actions.allClient()
 }


//   gotoNewEvent = () => {
//     Actions.newEvent()
//  }


  render() {
    return (
      <ScrollView>
      <View>

{/* ---------------------------------header--------------------------------- */}

       <View style={{marginTop:-20,}}>
       <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
                <TouchableOpacity
                onPress={this.goBackToAllClients}
                >
                  <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                  </TouchableOpacity>        }
            centerComponent={<Text style={{ fontSize:20}}>New Company</Text>
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
<Text style={styles.smText}>Company name*</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} color="#49641D" value="Company name" editable={false} />
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
<Text style={styles.smText}>Logo</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Change" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 2 end ------------------ */}





        {/* -------------row 3------------------ */}
{/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Responsible person</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
                <View style={ { backgroundColor: 'white',  marginLeft:'8%'}}>
                <View style={styles.Rows}>

<View style={styles.registeredName}>

<Avatar.Image source={require('../../assets/images/blue6.jpg')} size={40} />
<View style={{ marginLeft: 20 }}>
  <Title style={{ color: '#49641D' , fontSize:17}}>Farhan Sarwar</Title>
</View>

</View>


</View>
{/* ------------------- */}
<View  style={{ marginTop:'3%'}}>
<Text style={{color:'#49641D'}}>Change</Text>
</View>
{/* ------------------ */}
{/* <View>
<TouchableOpacity style={{ width: 300, height: 20 }}>
  <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',marginTop: '3%', fontSize: 35, color: '#e2e2e2' }}></Icon>
</TouchableOpacity>
</View> */}

</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 3 end ------------------ */}





        {/* -------------row 4------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Company type</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
 {/* ----------------------- */}
 
   <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>Client</Title>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
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
<Text style={styles.smText}>Industry</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
             {/* ----------------------- */}
 
   <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>Information Technology</Title>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
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
<Text style={styles.smText}>Employees</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Less than 50" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 6 end ------------------ */}





        {/* -------------row 7------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Currency</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="US Dollars" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 7 end ------------------ */}
        {/* -------------row 8 ------------------ */}
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
  <TextInput style={styles.pLeft} value="Comment" minHeight={60} color="#49641D" editable={false} />
 
   {/* ------------------------------Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ---------------- */}

<View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight:'5%'}}>
      <Title style={{ color: '#49641D' , fontSize:14, marginLeft:'8%'}}>Available to everyone</Title>
      {/* <ion-icon name="checkmark-circle-outline"></ion-icon> */}
      <Icon name="checkmark-circle-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
    </View>
{/* ---------------- */}
</View>
{/* --------------------------- */}
    
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
     

        {/* -------------row 8 end ------------------ */}





        {/* -------------row 9------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Logo</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Change" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 9 end ------------------ */}





        {/* -------------row 10------------------ */}
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
        {/* -------------row 10 end ------------------ */}





        {/* -------------row 11------------------ */}
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
        {/* -------------row 11 end ------------------ */}





        {/* -------------row 12------------------ */}
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
        {/* -------------row 12 end ------------------ */}





        {/* -------------row 13------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Street address</Text>
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
        {/* -------------row 13 end ------------------ */}





        {/* -------------row 14------------------ */}
                {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Legal address</Text>
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
        {/* -------------row 14 end ------------------ */}





        {/* -------------row 15------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Banking details</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="banking details" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 15 end ------------------ */}




        {/* -------------row 16------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Company's contact</Text>
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
        {/* -------------row 16 end ------------------ */}

<View style={{height:200}}></View>
      </View>
      </ScrollView>    );
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
     width: 230,
   },
   Rows: {
     flexDirection: 'row',   
   },
 
 
 })