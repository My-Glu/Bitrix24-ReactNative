import React, { Component } from 'react';
import { View,StatusBar, Text, StyleSheet, Image, FlatList,TouchableOpacity,ToastAndroid } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import MoreDeals from './deals/MoreDeals';
import MenuDeal from './deals/MenuDeal';
import ChangeStageDeal from './deals/ChangeStageDeal';


const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"
// const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"
const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/qjisdjl3s26c86gc/"

var order = {"STAGE_ID":"ASC"};
var filter = {">PROBABILITY":50};
var select = ["ID", "TITLE", "STATUS_ID", "PROBABILITY","OPPORTUNITY", "CURRENCY_ID" ];
var data ={order,filter,select}

export default class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result:[],
    };
  }

//   { 
//     order: { "STAGE_ID": "ASC" },
//     filter: { ">PROBABILITY": 50 },
//     select: [ "ID", "TITLE", "STAGE_ID", "PROBABILITY", "OPPORTUNITY", "CURRENCY_ID" ]
// }, 


  goToViewDeal = () => {
    Actions.viewDeal()
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
    ToastAndroid.show("All deals start ", ToastAndroid.LONG);
    const response = await fetch(bitrix+ `crm.deal.list?${data}`);
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/user.get");
    const json = await response.json()
    // .then((response) => response.json())
     .catch((error) => console.warn("fetch error:", error.message));
    this.setState({result: json.result});
    ToastAndroid.show("All deals res "+ this.state.result[0].ID, ToastAndroid.LONG);
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
        <View>

        {/* ---------------------------------header--------------------------------- */}
        <StatusBar backgroundColor="#49641D" animated={true}/>
               <View  style={{ marginTop:-20,}}>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                      <TouchableOpacity
                      onPress={this.goBackToNavScreen}
                      >
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',fontSize: 25 }}></Icon>
                        </TouchableOpacity>  
                      }
                    centerComponent={<Text style={{ fontSize:20}}>All Deals</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
              onPress={this.goToSearchScreen}>

                <Icon name="search-outline" color="#49641D" style={{ paddingLeft: '20%',fontSize: 25 }}></Icon>
              </TouchableOpacity>
                
                <TouchableOpacity    onPress={onShowPopupMenu}>
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ paddingLeft: '20%',fontSize: 25 }}></Icon>
               </TouchableOpacity>

               <MenuDeal
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
                    // data={[  
                    //     {key: 'Flatteys'},{key: 'Fahad Yousaf'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},  {key: 'sadaf Noor'}, {key: 'asfa Noor'},
                    // ]}  
                    data={this.state.result}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={(object, index) => index} 
                    renderItem={({item}) =>  
                    <View >
                      

        {/* -------------Big card view */}
        
        <View style={styles.bigCardView}>
                 
                 <View style={{ marginBottom: 15, marginLeft: '5%', marginTop: '5%' }}>
                 <TouchableOpacity
                         onPress={this.goToViewDeal}
                         >
                   <View style={{ flexDirection: 'row' }}>
       
                     <View style={styles.Rows}>
       
                       <View style={styles.registeredName}>
       
                         <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
                         <View style={{ marginLeft: 5, alignSelf: 'center'}}>
                  <Title style={{ color: '#49641D' }}>{item.COMPANY_ID}</Title>
                         </View>
                         <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',alignSelf: 'center',fontSize: 35, color: '#e2e2e2' }}></Icon>
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
   
                   {/* ------------------------------row 2----------------------------------------------  */}
       
                   <View style={{ marginBottom: 15, marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
      
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Deal Stage- <Text style={{ color: '#49641D' }}>Invoice</Text></Text>
                       <Text style={{ color: '#49641D' }}>-----------------------------</Text>
                     </View>
       
                   </View>
                 </View>
       
                   {/* ------------------------------Horizontal line -------------------------------------- */}
                   <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}
{/* ------------------------------row 3----------------------------------------------  */}
       
<View style={{ marginBottom: 15, marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Contact</Text>
                       <Text style={{ color: '#49641D' }}>No name</Text>
                     </View>
       
                   </View>
       
                 </View>
       
                    {/* ------------------------------Horizontal line -------------------------------------- */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}
        {/* ------------------------------row 4----------------------------------------------  */}

       
<View style={{ marginBottom: 15, marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Company name</Text>
                       <Text style={{ color: '#49641D' }}>Flatteys</Text>
                     </View>
       
                   </View>
       
                 </View>
       
                    {/* ------------------------------Horizontal line -------------------------------------- */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}


        {/* ------------------------------row 5----------------------------------------------  */}
       
        <View style={{marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Created on</Text>
                       <Text style={{ color: '#49641D' }}>08/09/2020</Text>
                     </View>
       
                   </View>
                 </View>


{/* ------------------------------row 6----------------------------------------------  */}
       
<View style={{ marginBottom: 15, marginLeft: 20 }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Amount/ Currency</Text>
                       <Text style={{ color: '#49641D' }}>$ 12,000</Text>
                     </View>
       
                   </View>
       
                 </View>
       
                    {/* ------------------------------Horizontal line -------------------------------------- */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}
       
       {/* ------------More-------------- */}
                 <View style={{justifyContent:'space-between',backgroundColor:'#FBFFF4',paddingTop:10, paddingBottom:10, flexDirection:'row', marginHorizontal:'2%'}}>
                 
                
                 <TouchableOpacity    onPress={onShowPopupSrc}>
                 <Text style={{textAlign:'left', paddingHorizontal:'2%'}}>Change Stage</Text>
                 </TouchableOpacity>
                 <ChangeStageDeal
title=""
ref={(target) => popupRefSrc = target}
onTouchOutside={onClosePopupSrc}
/>
                 <TouchableOpacity 
                 //  delayPressIn={1} onPress={() =>}
                  >
                 <Text style={{ marginRight:'5%',textAlign:'left'}}>Create using source</Text>
                 </TouchableOpacity>
                
                 <TouchableOpacity 
                 //  delayPressIn={1} onPress={() =>}
                 onPress={onShowPopup}
                  >
                 <Text style={{textAlign:'right', paddingHorizontal:'2%'}}>More...</Text>
                 </TouchableOpacity>
                 
                 <MoreDeals
title=""
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/>

                 </View>      
               </View>
            </View>
            
          }
                    ItemSeparatorComponent={this.renderSeparator}  
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
        
        height: 50,
        width: '100%',
      },
      Rows: {
        flexDirection: 'row',
        width: '90%'
      },
})