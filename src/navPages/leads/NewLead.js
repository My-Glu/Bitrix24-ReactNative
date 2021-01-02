import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions, ToastAndroid } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RoundCheckbox from 'react-native-round-checkbox';
import {Picker} from '@react-native-community/picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"
// const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"
const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/qjisdjl3s26c86gc/"

var data={fields};

// var PhoneArray=[ { "VALUE": "09007860111", "VALUE_TYPE": "WORK" } ] 
var PhoneArray=[ { "VALUE": "09007896767", "VALUE_TYPE": "Work" } ] 
var fields = { 
  "TITLE": '', 
  "STATUS_DESCRIPTION": '',
  "OPPORTUNITY": 0,
  "SOURCE_DESCRIPTION":'',
  "NAME": '', 
  "SECOND_NAME": '', 
  "LAST_NAME": '', 
  "BIRTHDATE":'',
  "EMAIL":'',
  // "STATUS_ID": "", 
  // "OPENED": "", 
  "ASSIGNED_BY_ID": '', 
  "CURRENCY_ID": '', 
  "WEB":'',
  "COMPANY_TITLE":'',
  "COMPANY_ID":'',
  "POST":"",
  "ADDRESS_PROVINCE": '',
  "ADDRESS_POSTAL_CODE": '',
  "ADDRESS":'',
  "ADDRESS_2":'',
  "ADDRESS_CITY":'',
  "ADDRESS_REGION":'',
  "ADDRESS_COUNTRY":'',
  "COMMENTS":'',
  "SOURCE_ID":'',
  "HONORIFIC":'',
  "PHONE": PhoneArray
}


export default class NewLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToAllLeads = () => {
   
    Actions.allLeads()
 }

//   gotoNewEvent = () => {
//     Actions.newEvent()
//  }


handleInputTextChangeLeadName = (newText1) => {
  // this.setState({ linkedin: newText1 })
  
  fields.TITLE = newText1
}

handleInputTextChangeStatusInfo = (newText2) => {
  // this.setState({ linkedin: newText2 })
 fields.STATUS_DESCRIPTION = newText2
}

handleInputTextChangeDealOpportunity = (newText3) => {
  // this.setState({ linkedin: newText3 })

  fields.OPPORTUNITY=newText3

}

handleInputTextChangeSource = (newText21) => {
  // this.setState({ linkedin: newText4 })
  fields.SOURCE_DESCRIPTION = newText21
}

handleInputTextChangeSrcInfo = (newText4) => {
  // this.setState({ linkedin: newText4 })
  fields.SOURCE_DESCRIPTION = newText4
}

handleInputTextChangeLastName = (newText5) => {
  // this.setState({ linkedin: newText5 })
  fields.LAST_NAME=newText5
}

handleInputTextChangeName = (newText6) => {
  // this.setState({ linkedin: newText6 })
  fields.NAME=newText6
}

handleInputTextChangeSecondName = (newText7) => {
  // this.setState({ linkedin: newText7 })
  fields.SECOND_NAME=newText7
}

handleInputTextChangeWorkPhone = (newText8) => {
  // this.setState({ linkedin: newText8 })
  PhoneArray.VALUE=newText8
  PhoneArray.VALUE_TYPE="WORK"

}

handleInputTextChangeEmail = (newText9) => {
  // this.setState({ linkedin: newText9 })
  fields.EMAIL=newText9
}

handleInputTextChangeWebsite = (newText10) => {
  // this.setState({ linkedin: newText10 })
  fields.WEB=newText10
}

handleInputTextChangeCompanyName = (newText111) => {
 
   fields.COMPANY_TITLE=newText111
}

handleInputTextChangePosition = (newText12) => {
  
   fields.POST=newText12
}

handleInputTextChangeStreetBuilding = (newText13) => {
  
fields.ADDRESS_2=newText13
}

handleInputTextChangeSuiteApartment = (newText14) => {
  // this.setState({ linkedin: newText14 })
fields.ADDRESS=newText14

}

handleInputTextChangeCity = (newText15) => {
  // this.setState({ linkedin: newText15 })
     fields.ADDRESS_CITY=newText15
  
}

handleInputTextChangeRegion = (newText16) => {
  // this.setState({ linkedin: newText16 })
  fields.ADDRESS_REGION= newText16
}

handleInputTextChangeStateProvince = (newText17) => {
  // this.setState({ linkedin: newText17 })
  fields.ADDRESS_PROVINCE=newText17
}

handleInputTextChangeZip = (newText18) => {
  // this.setState({ linkedin: newText18 })
  fields.ADDRESS_POSTAL_CODE=newText18
}

handleInputTextChangeCompany = (newText19) => {
  // this.setState({ linkedin: newText19 })
  fields.COMPANY_ID=newText19
}

handleInputTextChangeComment = (newText20) => {
  // this.setState({ linkedin: newText20 })
  fields.COMMENTS=newText20
}

// handleInputTextChangeLastName = (newText21) => {
//   this.setState({ linkedin: newText21 })
// }

handleInputTextChangeSaluation = (newText22) => {
  // this.setState({ linkedin: newText2 })
  fields.HONORIFIC=newText22
}

handleInputTextChangeCurrency = (newText23) => {
  // this.setState({ linkedin: newText2 })
  fields.CURRENCY_ID=newText23
}
handleInputTextChangeResPerson = (newText24) => {
  // this.setState({ linkedin: newText2 })
  fields.ASSIGNED_BY_ID=newText24
}





makeNewLead= async()=> {
 
  ToastAndroid.show("fn ", ToastAndroid.LONG);
  
  // const response = await fetch(afiaNoor+`user.update?ID=${this.props.uid}&NAME=${this.state.firstName}&LAST_NAME=${this.state.lastName}&PERSONAL_MOBILE=${this.state.mobile}&PERSONAL_PHONE=${this.state.phone}&PERSONAL_BIRTHDAY=${this.state.dob}&WORK_POSITION=${this.state.position}&PERSONAL_GENDER=${this.state.gender}&WORK_PHONE=${this.state.workphone}&UF_SKYPE=${this.state.skype}&UF_FACEBOOK=${this.state.facebook}&UF_LINKEDIN=${this.state.linkedin}`,
  const response = await fetch(bitrix+`crm.lead.add?${data}`,
  {method: 'POST',
  headers: {
  'Content-Type': 'application/json'},
  // body: JSON.stringify({
  //   // "provider": "email",s
  //   "data":
  //    {
  //       "email": this.state.username,
  //       "password": this.state.pass
  //   }
  // })
  }).then((json) =>  ToastAndroid.show("processing..." , ToastAndroid.LONG))
  .catch((error) => console.warn("fetch error:", error.message));
 
  // const response = await fetch(afiaNoor+"im.recent.get");
  // const response = await fetch(afiaNoor+`im.dialog.messages.get?DIALOG_ID=${this.props.id}`);
  // const response = await fetch(afiaNoor+"im.dialog.messages.get?DIALOG_ID=83");
  // const jsonData = await response.json()
  // .then((json) =>  ToastAndroid.show("processing", ToastAndroid.LONG))
  //  .catch((error) => console.warn("fetch error:", error.message))

  //  jsonData.then(res=> res.json)
  //  .catch((error) => console.warn("fetch error:", error.message))

   ToastAndroid.show("New Lead saved", ToastAndroid.LONG);

  // this.setState({data:[{
  //   id: jsonData.result.ID,
  //   firstName: jsonData.result.NAME,
  //   lastName: jsonData.result.LAST_NAME,
  //   Email: jsonData.result.EMAIL,
  //   mobile : jsonData.result.PERSONAL_MOBILE,
  //   phone: jsonData.result.PERSONAL_PHONE,
  //   DOB: jsonData.result.PERSONAL_BIRTHDAY,
  //   position: jsonData.result.WORK_POSITION,
  //   gender: jsonData.result.PERSONAL_GENDER,
  //   website: jsonData.result.UF_WEB_SITES,
  //   workphone: jsonData.result.WORK_PHONE,
  //   skype: jsonData.result.UF_SKYPE,
  //   facebook:jsonData.result.UF_FACEBOOK,
  //   linkedin:jsonData.result.UF_LINKEDIN,

  //  }
  // ]});

  // this.setState({
  //   data:{
  //   messages:jsonData.result.messages
  //   }
  // });
  // Alert.alert(this.state.data.chat_id)
}




  render() {
    return (
      <ScrollView>
      
      <View style={{marginTop:-20,}}>
         {/* ---------------------------------header--------------------------------- */}
         <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToAllLeads}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>New Lead</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
            <TouchableOpacity
            onPress={this.makeNewLead}
            >
             <Text>Save</Text> 
            </TouchableOpacity>

          //   <View style={{flexDirection: 'row'}}>

          //   <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
          //   <TouchableOpacity    
          //    onPress={this.gotoNewEvent}
          //   >
          //   <Icon name="add" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 26 }}></Icon>
          //  </TouchableOpacity>

          
          //  </View> 


    
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
  <Text style={styles.smText}>Lead name*</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} color="#49641D" placeholder="Lead name" editable={true} 
    onChange={this.handleInputTextChangeLeadName}
    />
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

<View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} color="#49641D" placeholder="Status Information" editable={true} 
     onChange={this.handleInputTextChangeStatusInfo}
    />
  </View>

{/*  
<View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>Status Information</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View> */}

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

<View style={{backgroundColor:'white'}}>
<View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',  marginLeft:'8%', marginRight:'5%'}}>
  
<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.lang}  
                      onValueChange={(itemVal, itemPos) =>  
                          // this.setState({lang: itemVal, choosenIndex: itemPos})
                          fields.CURRENCY_ID=itemVal
                        }  
                  >  
                 <Picker.Item label="US Dollar" value="us" />  
                <Picker.Item label="Euro" value="eu" />  
                <Picker.Item label="China Yuan Renminbi" value="cyr" />  
                <Picker.Item label="Brazilian Real" value="br" />  
                <Picker.Item label="Indian Rupee" value="ir" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>
  
              <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
   
    </View>
    </View>

{/*  
<View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  <Title style={{ color: '#49641D' , fontSize:14}}>US Dollar</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View> */}

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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Deal Opportunity" color="#49641D" editable={true} 
     onChange={this.handleInputTextChangeDealOpportunity}
    />
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
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
 
 <View style={{backgroundColor:'white'}}>
<View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  
<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.lang}  
                      onValueChange={(itemVal, itemPos) =>  
                          // this.setState({lang: itemVal, choosenIndex: itemPos})}  
                          // this.handleInputTextChangeSource
                          fields.SOURCE_ID=itemVal
                        }
                  >  
                 <Picker.Item label="Call" value="no" />  
                <Picker.Item label="E-Mail" value="email" />  
                <Picker.Item label="Website" value="web" />  
                <Picker.Item label="Advertising" value="adv" />  
                <Picker.Item label="Existing Client" value="exclient" />  
                <Picker.Item label="By Recommendation" value="recm" />  
                <Picker.Item label="Show/Exhibition" value="show" />  
                <Picker.Item label="CRM Form" value="crmform" />  
                <Picker.Item label="Callback" value="cback" />  
                <Picker.Item label="Sales Boost" value="sboot" />  
                <Picker.Item label="Online Store" value="ostore" />  
                <Picker.Item label="Other" value="other" />  
               
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>
  
              <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
   
 
  
  {/* <Title style={{ color: '#49641D' , fontSize:14}}>Call</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
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
  <Text style={styles.smText}>Source Information</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white', paddingLeft:'8%'}}>
    <TextInput  placeholder="Source Information" color="#49641D" editable={true} 
     onChange={this.handleInputTextChangeSourceInfo} style
    />
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
  <Text style={[styles.smText], {paddingLeft:'8%'}}>Responsible person</Text>
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
  
  <View style={{justifyContent: 'space-between', flexDirection: 'row',alignItems: 'center', marginRight:'5%'}}>
      <Title style={{ color: '#49641D' , fontSize:14}}>Available to everyone</Title>
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
          {/* <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Not Selected" color="#49641D" editable={true} 
     onChange={this.handleInputTextChangeSaluation}
    />
  </View> */}
  
<View style={{backgroundColor:'white'}}>
<View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',  marginLeft:'8%', marginRight:'5%'}}>
  
<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.lang}  
                      onValueChange={(itemVal, itemPos) =>  
                          // this.setState({lang: itemVal, choosenIndex: itemPos})
                          fields.HONORIFIC=itemVal
                        }  
                  >  
                 <Picker.Item label="Not Selected" value="none" />  
                <Picker.Item label="Mr." value="mr" />  
                <Picker.Item label="Mrs." value="mrs" />  
                <Picker.Item label="Ms." value="ms" />  
                <Picker.Item label="Dr." value="dr" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>
  
              <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
   
    </View>
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Last name" color="#49641D" editable={true}
    onChange={this.handleInputTextChangeLastName }/>
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Name" color="#49641D" editable={true} 
    onChange={this.handleInputTextChangeName}
      />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Second name" color="#49641D" editable={true}
    onChange={this.handleInputTextChangeSecondName}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Date of Birth" color="#49641D" editable={true}
    onChange={this.handleInputTextChange}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Add" color="#49641D" editable={true} 
    onChange={this.handleInputTextChangeWorkPhone}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Add" color="#49641D" editable={true}
    onChange={this.handleInputTextChangeEmail}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Add" color="#49641D" editable={true}
    onChange={this.handleInputTextChangeWebsite}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Company name" color="#49641D" editable={true} 
    onChange={this.handleInputTextChangeCompanyName}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Position" color="#49641D" editable={true} 
    onChange={this.handleInputTextChangePosition}
    />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Street, Building" color="#49641D" editable={true} 
    onChange={this.handleInputTextChangeStreetBuilding}
    />
  
   {/* ------------------------------sm Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ------------------------------sm Horizontal line end-------------------------------------- */}
   {/* -------------2---------- */}
  <TextInput style={styles.pLeft} placeholder="Suite/ Apartment" color="#49641D" editable={true}
  onChange={this.handleInputTextChangeSuiteApartment}
  />
  
   {/* ------------------------------sm Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------3-------------- */}
  <TextInput style={styles.pLeft} placeholder="City" color="#49641D" editable={true}
  onChange={this.handleInputTextChangeCity}
  />
  {/* --------------------------- */}
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------4-------------- */}
  <TextInput style={styles.pLeft} placeholder="Region" color="#49641D" editable={true} 
  onChange={this.handleInputTextChangeRegion}
  />
  {/* --------------------------- */}
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------5-------------- */}
  <TextInput style={styles.pLeft} placeholder="State/ Province" color="#49641D" editable={true}
  onChange={this.handleInputTextChangeStateProvince}
  />
  {/* --------------------------- */}
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------6-------------- */}
  <TextInput style={styles.pLeft} placeholder="Zip" color="#49641D" editable={true}
  onChange={this.handleInputTextChangePostalCode} 
  />
  {/* --------------------------- */}
  
  
  {/* ------------------------------sm Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------6-------------- */}
  <TextInput style={styles.pLeft} placeholder="Company" color="#49641D" editable={true} 
  onChange={this.handleInputTextChangeCompany}
  />
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
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Comment" color="#49641D" editable={true}
    onChange={this.handleInputTextChangeComment}
    />
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
          <View style={{backgroundColor:'white'}}>
    {/* <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true}
    onChange={this.handleInputTextChangeComment}
    /> */}

<Text style={[styles.pLeft], { color:'#49641D', paddingLeft:'9%', paddingVertical:'2%', fontSize:16}}>Select</Text>


  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 19 end ------------------ */}
  
  <View style={{height:100}}></View>
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