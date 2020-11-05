import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RoundCheckbox from 'react-native-round-checkbox';
import {Picker} from '@react-native-community/picker';
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} color="#49641D" placeholder="Company name" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Change" color="#49641D" editable={true} />
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
                
<View style={{backgroundColor: 'white'}}>
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

</View>

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
 
 <View style={{backgroundColor: 'white'}}>
   <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>

 
   <View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.companytype}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({companytype: itemValue, choosenIndex: itemPosition})}  
                  >  
                  <Picker.Item label="Client" value="client" />  
                  <Picker.Item label="Supplier" value="sply" />  
                  <Picker.Item label="Competitor" value="cmpt" />  
                  <Picker.Item label="Partner" value="ptnr" />  
                  <Picker.Item label="Other" value="other" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>

<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>

 {/*  
  <Title style={{ color: '#49641D' , fontSize:14}}>Client</Title>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
    */}

    </View>
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
 <View style={{ backgroundColor: 'white'}}>
   <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>


   <View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.ind}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({ind: itemValue, choosenIndex: itemPosition})}  
                  >  
                  <Picker.Item label="Information Technology" value="it" />  
                  <Picker.Item label="Telecommunication" value="tcom" />  
                  <Picker.Item label="Manufacturing" value="mft" />  
                  <Picker.Item label="Banking Services" value="bsrvc" />  
                  <Picker.Item label="Consulting" value="conslt" />  
                  <Picker.Item label="Finance" value="fnc" />  
                  <Picker.Item label="Government" value="govt" />  
                  <Picker.Item label="Delivery" value="dlv" />  
                  <Picker.Item label="Entertainment" value="ent" />  
                  <Picker.Item label="Non-Profit" value="nonp" />  
                  <Picker.Item label="Other" value="oth" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>

<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
 

  {/* <Title style={{ color: '#49641D' , fontSize:14}}>Information Technology</Title>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon> */}
    </View>
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
<View style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>

<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                   selectedValue={this.state.ind}  
                   onValueChange={(itemValue, itemPosition) =>  
                       this.setState({ind: itemValue, choosenIndex: itemPosition})}  
               >  
               <Picker.Item label="Less than 50" value="it" />  
               <Picker.Item label="50 to 250" value="tcom" />  
               <Picker.Item label="250 to 500" value="mft" />  
               <Picker.Item label="Over 500" value="bsrvc" />  
              
           </Picker>
           </View>

<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>




{/* <Title style={{ color: '#49641D' , fontSize:14}}>Information Technology</Title>
<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon> */}
 </View>
 </View>


        {/* <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Less than 50" color="#49641D" editable={true} />
</View> */}
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 6 end ------------------ */}



        {/* -------------row 6.1  ------------------ */}
       {/* ----------------- */}
       <View style={styles.mLeft}>
<Text style={styles.smText}>Annual revenue</Text>
</View>
{/* ----------------- */}
    {/* ------------------------------Horizontal line -------------------------------------- */}
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Annual revenue" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 2 end ------------------ */}



        {/* -------------row 6.1 end ------------------ */}





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

                <View style={{backgroundColor: 'white'}}>
<View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  
  
<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.currencys}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({currencys: itemValue, choosenIndex: itemPosition})}  
                  >  
                  <Picker.Item label="US Dollar" value="no" />  
                  <Picker.Item label="Euro" value="eu" />  
                  <Picker.Item label="China Yuan Renminbi" value="cyr" />  
                  <Picker.Item label="Brazilian Real" value="br" />  
                  <Picker.Item label="Indian Rupee" value="ir" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>

<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
 
  
  {/* <Title style={{ color: '#49641D' , fontSize:14}}>US Dollar</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
    </View>
    </View>


        {/* <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="US Dollars" color="#49641D" editable={true} />
</View> */}
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Comment" minHeight={60} color="#49641D" editable={true} />
 
   {/* ------------------------------Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ---------------- */}

<View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginRight:'5%'}}>
      <Title style={{ color: '#49641D' , fontSize:14, marginLeft:'8%'}}>Available to everyone</Title>
      {/* <ion-icon name="checkmark-circle-outline"></ion-icon> */}
   
      {/* <Icon name="checkmark-circle-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon> */}
      
<RoundCheckbox
            size={24}
            borderColor={'black'}
            backgroundColor={"#49641D"}
            iconColor={'white'}
            checked={this.state.isSelected}
            onValueChange={(newValue) => {this.setState({isSelected:true})}}
        />
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
{/* <View style={styles.mLeft}>
<Text style={styles.smText}>Logo</Text>
</View> */}
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
{/* <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        {/* <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Change" color="#49641D" editable={true} />
</View> */}
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     {/* <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View> */}
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Add" color="#49641D" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Add" color="#49641D" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Add" color="#49641D" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Street, Building" color="#49641D" editable={true} />

 {/* ------------------------------sm Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ------------------------------sm Horizontal line end-------------------------------------- */}
 {/* -------------2---------- */}
<TextInput style={styles.pLeft} placeholder="Suite/ Apartment" color="#49641D" editable={true} />

 {/* ------------------------------sm Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------3-------------- */}
<TextInput style={styles.pLeft} placeholder="City" color="#49641D" editable={true} />
{/* --------------------------- */}

{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------4-------------- */}
<TextInput style={styles.pLeft} placeholder="Region" color="#49641D" editable={true} />
{/* --------------------------- */}

{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------5-------------- */}
<TextInput style={styles.pLeft} placeholder="State/ Province" color="#49641D" editable={true} />
{/* --------------------------- */}

{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------6-------------- */}
<TextInput style={styles.pLeft} placeholder="Zip" color="#49641D" editable={true} />
{/* --------------------------- */}


{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------6-------------- */}
<TextInput style={styles.pLeft} placeholder="Company" color="#49641D" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Street, Building" color="#49641D" editable={true} />

 {/* ------------------------------sm Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ------------------------------sm Horizontal line end-------------------------------------- */}
 {/* -------------2---------- */}
<TextInput style={styles.pLeft} placeholder="Suite/ Apartment" color="#49641D" editable={true} />

 {/* ------------------------------sm Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------3-------------- */}
<TextInput style={styles.pLeft} placeholder="City" color="#49641D" editable={true} />
{/* --------------------------- */}

{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------4-------------- */}
<TextInput style={styles.pLeft} placeholder="Region" color="#49641D" editable={true} />
{/* --------------------------- */}

{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------5-------------- */}
<TextInput style={styles.pLeft} placeholder="State/ Province" color="#49641D" editable={true} />
{/* --------------------------- */}

{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------6-------------- */}
<TextInput style={styles.pLeft} placeholder="Zip" color="#49641D" editable={true} />
{/* --------------------------- */}


{/* ------------------------------sm Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* -------------6-------------- */}
<TextInput style={styles.pLeft} placeholder="Company" color="#49641D" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="banking details" color="#49641D" editable={true} />
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
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
                <TouchableOpacity>
  <Text style={{paddingVertical:'3%', marginLeft:'8%', color:'#49641D'}}>Select</Text>
  </TouchableOpacity>
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