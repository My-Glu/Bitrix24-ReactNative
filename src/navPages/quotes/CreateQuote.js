import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import {Picker} from '@react-native-community/picker'; 
import RoundCheckbox from 'react-native-round-checkbox';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class CreateQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToAllQuotes = () => {
   
    Actions.allQuotes()

 }

//   gotoNewEvent = () => {
//     Actions.newEvent()
//  }


  render() {
    return (
      <View  >
      <ScrollView>
    <View >
      <View style={{marginTop:-20,}}>
         {/* ---------------------------------header--------------------------------- */}
         <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToAllQuotes}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Create Quote</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
            <View>

            {/* <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon> */}
            <TouchableOpacity    
            //  onPress={this.gotoNewEvent}
            >
                <Text style={{fontSize:14}} >Save</Text>
            {/* <Icon name="add" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 26 }}></Icon> */}
           </TouchableOpacity>
          
           </View> 
   
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}
      
      
      </View>

        {/* -------------row 1------------------ */}
        {/* ------------------------------Horizontal line -------------------------------------- */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Quote #</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} color="#49641D" placeholder="Quote #" />
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
<Text style={styles.smText}>Subject*</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Subject" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 2 end ------------------ */}





        {/* -------------row 3------------------ */}
{/* ----------------- */}

        {/* -------------row 3 end ------------------ */}




        {/* -------------row 4------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Quote status</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
 {/* ----------------------- */}
 
   <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  {/* <Title style={{ color: '#49641D' , fontSize:14}}>New</Title> */}


  <View style={{  width:'100%',  justifyContent: 'center',  }}>

  <Picker   
  style={{backgroundColor: 'white'}}
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="New" value="new" />  
                    <Picker.Item label="Sent to client" value="stc" />  
                    <Picker.Item label="Accepted" value="acp" />  
                    <Picker.Item label="Declined" value="dcl" />  
                    <Picker.Item label="Analyze decline" value="ad" />  
                    
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                </View>

  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
   
    </View>

{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 4 end ------------------ */}

        {/* -------------row 4.1  ------------------ */}
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
 
   <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  {/* <Title style={{ color: '#49641D' , fontSize:14}}>US Dollar</Title> */}


  <View style={{  width:'100%',  justifyContent: 'center',  }}>

  <Picker   
  style={{backgroundColor: 'white'}}
                        selectedValue={this.state.lang}  
                        onValueChange={(itemVal, itemPos) =>  
                            this.setState({lang: itemVal, choosenIndex: itemPos})}  
                    >  
                   <Picker.Item label="US Dollar" value="no" />  
                  <Picker.Item label="Euro" value="yes" />  
                  <Picker.Item label="China Yuan Renminbi" value="yes" />  
                  <Picker.Item label="Brazilian Real" value="yes" />  
                  <Picker.Item label="Indian Rupee" value="yes" />  
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                </View>

  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
   


  {/* <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon> */}
    </View>

{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 4.1 end ------------------ */}





        {/* -------------row 5------------------ */}
         {/* ----------------- */}
         <View style={styles.mLeft}>
<Text style={styles.smText}>Amount</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Amount" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 5 end ------------------ */}


        {/* -------------row 5.1  ------------------ */}
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
{/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />

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
        {/* -------------row 5.1 end ------------------ */}






        {/* -------------row 6------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Invoice date</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Today" color="#49641D" editable={true} />
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
<Text style={styles.smText}>Deadline</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="08/09/2020" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 7 end ------------------ */}
        {/* -------------row 8 ------------------ */}
{/* ----------------- */}


        {/* -------------row 8 end ------------------ */}





        {/* -------------row 9------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Lead</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
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
  <Text style={styles.smText}>Deal</Text>
  </View>
{/* ------------------horizontal line--------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ----------------- */}
  <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Select" minHeight={40} color="#49641D" editable={true} />
 
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
        {/* -------------row 10 end ------------------ */}





        {/* -------------row 11------------------ */}
        {/* ----------------- */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Contact</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 11 end ------------------ */}


       {/* -------------row 11 new------------------ */}

        {/* -------------row 11 new end ------------------ */}



        {/* -------------row 12------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Company</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 12 end ------------------ */}





        {/* -------------row 13------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Contents</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Contents" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 13 end------------------ */}
        {/* -------------row 14------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Conditions</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Conditions" color="#49641D" editable={true} />
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
<Text style={styles.smText}>Comment</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Comment" color="#49641D" editable={true} />
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
<Text style={styles.smText}>Products</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="auto" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 16 end ------------------ */}

  
<View style={{height:100}}></View>
      </View>
      
      </ScrollView>
  
        </View>
    );
  }
}


const styles = StyleSheet.create({

  mLeft:{
 
     marginLeft:'8%'
 
  },
  pLeft:{
 
     marginLeft:'7%'
 
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