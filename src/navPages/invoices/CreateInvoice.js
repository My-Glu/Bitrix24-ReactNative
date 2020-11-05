import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class CreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToAllInvoices = () => {
   
    Actions.allInvoices()

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
              onPress={this.goBackToAllInvoices}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Create Invoice</Text>
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


        {/* -------------row 1------------------ */}
        {/* ------------------------------Horizontal line -------------------------------------- */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Invoice #</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} color="#49641D" value="Invoice #" editable={false} />
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
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Subject" color="#49641D" editable={false} />
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
<Text style={styles.smText}>Status</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
 {/* ----------------------- */}
 
   <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>Status</Title>
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
<Text style={styles.smText}>Payment date</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Payment date" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 5 end ------------------ */}





        {/* -------------row 6------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Payment comment</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Payment comment" color="#49641D" editable={false} />
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
<Text style={styles.smText}>Declined on</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Declined on" color="#49641D" editable={false} />
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
<Text style={styles.smText}>Reason of refusal</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Reason of refusal" color="#49641D" editable={false} />
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
<Text style={styles.smText}>Invoice date </Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Invoice date " color="#49641D" editable={false} />
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
<Text style={styles.smText}>Pay before</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Pay before" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 11 end ------------------ */}


       {/* -------------row 11 new------------------ */}
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
        {/* -------------row 11 new end ------------------ */}



        {/* -------------row 12------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Invoice currency</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="RUB" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 12 end ------------------ */}





        {/* -------------row 13------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Deal</Text>
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
        {/* -------------row 13 end------------------ */}
        {/* -------------row 14------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Quote</Text>
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
        {/* -------------row 14 end ------------------ */}





        {/* -------------row 15------------------ */}
        {/* ----------------- */}
<View style={styles.mLeft}>
<Text style={styles.smText}>Contractor</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Select contact" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginHorizontal:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Select company" color="#49641D" editable={false} />
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
<Text style={styles.smText}>Contact person</Text>
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

        {/* -------------row 17 ------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Payment method (will be available once you select a company or contact)</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
 {/* ----------------------- */}
 
   <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}></Title>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
    </View>

{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 17 end ------------------ */}

        {/* -------------row 18 ------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Sales representative's comment</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Sales representative's comment" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 18 end ------------------ */}

        {/* -------------row 19 ------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Invoice notes (appears on invoice)</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Invoice notes (appears on invoice)" color="#49641D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 19 end ------------------ */}

        {/* -------------row 20 ------------------ */}
        <View style={styles.mLeft}>
<Text style={styles.smText}>Invoice products and / services*</Text>
</View>
{/* ----------------- */}

        {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
                {/* ----------------------- */}
        <View pointerEvents="none" style={{backgroundColor:'white'}}>
  <TextInput style={styles.pLeft} value="Curretly with ID RUB was not found" color="#B90D0D" editable={false} />
</View>
{/* --------------------------- */}
     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
        {/* -------------row 20 end ------------------ */}

        {/* -------------row 21 ------------------ */}
        {/* -------------row 21 end ------------------ */}

<View style={{height:100}}></View>
      </View>
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