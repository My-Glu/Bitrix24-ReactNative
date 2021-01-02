import React, { Component } from 'react';
import { View,StatusBar, Text, StyleSheet, Image,FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import MoreLeads from './leads/MoreLeads';
import MenuLeads from './leads/MenuLeads';
import CreateUsingSourceLeads from './leads/CreateUsingSourceLeads';

const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"
// const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"
const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/qjisdjl3s26c86gc/"

var order = {"STATUS_ID":"ASC"};
var filter = {">OPPORTUNITY":0, "!STATUS_ID":"CONVERTED"};
var select = ["ID", "TITLE", "STATUS_ID", "OPPORTUNITY", "CURRENCY_ID" ];
var data ={order,filter,select}

export default class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {

      result:[],

    };

    // this.fetchData()= this.fetchData.bind(this);
  }



  goToViewLead = () => {
    Actions.viewLeads()
 }

 goBackToNavScreen = () => {

  Actions.navScreen()

 }


goToSearchScreen = () => {

  Actions.search()

}


fetchData= async()=> {
// https://b24-l9xpyr.bitrix24.com/rest/1/qjisdjl3s26c86gc/crm.lead.list
  // const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
  // const response = await fetch(bitrix+ `crm.lead.list?order=${order}&filter=${filter}&select=${select}`);
  ToastAndroid.show("All leads start ", ToastAndroid.LONG);
  const response = await fetch(bitrix+ `crm.lead.list?${data}`);
  // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/user.get");
  const json = await response.json()
  // .then((response) => response.json())
   .catch((error) => console.warn("fetch error:", error.message));
  this.setState({result: json.result});
  ToastAndroid.show("All leads res "+ this.state.result[0].ID, ToastAndroid.LONG);
  // ToastAndroid.show("okkkkkk ", ToastAndroid.LONG);

}

componentDidMount(){

   this.fetchData();

}

  render() {

  let popupRef = React.createRef()
  const onShowPopup = () =>{ popupRef.show()}
  const onClosePopup = () =>{ popupRef.close()}

  let popupRefMenu = React.createRef()
  const onShowPopupMenu = () =>{ popupRefMenu.show()}
  const onClosePopupMenu = () =>{ popupRefMenu.close()}

  let popupRefSrc = React.createRef()
  const onShowPopupSrc = () =>{ popupRefSrc.show()}
  const onClosePopupSrc = () =>{ popupRefSrc.close()}


    return (
        <View  style={{ marginTop:-20,}}>

        {/* ---------------------------------header--------------------------------- */}
        <StatusBar backgroundColor="#49641D" animated={true}/>
               <View>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                      <TouchableOpacity
              onPress={this.goBackToNavScreen}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>    
                      }
                    centerComponent={<Text style={{ fontSize:20}}>All Leads</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
            <View style={{flexDirection: 'row'}}>
                 <TouchableOpacity
              onPress={this.goToSearchScreen}>
                <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
              </TouchableOpacity>
                <TouchableOpacity    onPress={onShowPopupMenu}>
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
               </TouchableOpacity>

               <MenuLeads
title=""
ref={(target) => popupRefMenu = target}
onTouchOutside={onClosePopupMenu}
/>
                
                </View>     
            
            }
                    // rightComponent={<Text>Done</Text>}
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
               />
        </View>
        {/* -----Header end */}
        
        
<FlatList  
                       data={this.state.result}
                    // data={[  
                    //     {key: 'Shahid Saleem'},{key: 'Azeem Murtaza'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},  {key: 'sadaf Noor'}, {key: 'asfa Noor'},
                    // ]}  
                    ItemSeparatorComponent={this.renderSeparator} 
                    keyExtractor={(object, index) => index} 
                    renderItem={({item}) =>  
                    <View >
                       
   {/* -------------Big card view */}
        
   <View style={styles.bigCardView}>
                 
                 <View style={{ marginBottom: 15, marginLeft: '5%', marginTop: '5%' }}>
                 <TouchableOpacity 
                         onPress={this.goToViewLead}
                         >
                   <View style={{ flexDirection: 'row',  }}>
       
                     <View style={styles.Rows}>
       
                       <View style={styles.registeredName}>
       
                         <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
                         <View style={{ marginLeft: 5 }}>
                           <Title style={{ color: '#49641D' }}>{item.NAME} {item.LAST_NAME}</Title>
                         </View>
                        
                       
                         <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',alignSelf: 'center', fontSize: 35, color: '#e2e2e2' }}></Icon>
                     
                       </View>
                            </View>
       
                   </View>
                   </TouchableOpacity>
             </View>
       
                  {/* ------------------------------Horizontal line -------------------------------------- */}
                  <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}
        {/* ------------------------------second row----------------------------------------------  */}
       
        <View style={{ marginBottom: 15, marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Id</Text>
          <Text style={{ color: '#49641D' }}>{item.ID}</Text>
                     </View>
       
                   </View>
       
                 </View>
       
                {/* ------------------------------Horizontal line -------------------------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}
       
                   {/* ------------------------------third row----------------------------------------------  */}
       
                   <View style={{ marginBottom: 15, marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Status- <Text style={{ color: '#49641D' }}>{item.TITLE}</Text></Text>
                       <Text style={{ color: '#49641D' }}>-----------------------------</Text>
                     </View>
       
                   </View>
                 </View>
       
                 {/* ------------------------------Horizontal line -------------------------------------- */}
                 <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}
       
       
        {/* ------------------------------fourth row----------------------------------------------  */}
       
        <View style={{marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Created on</Text>
                       {/* <Text style={{ color: '#49641D' }}>08/09/2020</Text> */}
          {/* <Text style={{ color: '#49641D' }}>{item.DATE_CREATE}</Text> */}
          {/* {this.props.datetime.substring(0, this.props.datetime.lastIndexOf("T"))} */}
          <Text style={{ color: '#49641D' }}>{item.DATE_CREATE.substring(0, item.DATE_CREATE.lastIndexOf("T"))}</Text>
                     </View>
       
                   </View>
                 </View>
       
       {/* ------------More-------------- */}
                 <View style={{justifyContent:'space-between',backgroundColor:'#FBFFF4',paddingTop:10, paddingBottom:10, flexDirection:'row', marginHorizontal:'5%'}}>
                 
                
                 <TouchableOpacity    onPress={onShowPopupSrc}>
                 <Text style={{ textAlign:'left', paddingHorizontal:'2%'}}>Create using source</Text>
                 </TouchableOpacity>
                 <CreateUsingSourceLeads
title=""
ref={(target) => popupRefSrc = target}
onTouchOutside={onClosePopupSrc}
/>
                 <TouchableOpacity 
                 //  delayPressIn={1} onPress={() =>}
                 onPress={onShowPopup}
                  >
                 <Text style={{textAlign:'right',paddingHorizontal:'2%'}}>More...</Text>
                 </TouchableOpacity>
                
                 <MoreLeads
title=""
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/>

                 </View>      
       
               </View>

        <View>
       
        </View>
                               </View>}
                    
                />
        
             
                </View>
    );
  }
}

const styles = StyleSheet.create({

    bigCardView: {
        marginBottom:'5%',
        marginTop:'5%',        
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: 'column',
       },
    
       registeredName: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width:'100%'      },
      Rows: {
        
        flexDirection: 'row',
        width: '90%'
      },
})