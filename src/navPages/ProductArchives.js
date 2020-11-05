import React, { Component } from 'react';
import { View,StatusBar, Text, StyleSheet, Image,FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import MenuProducts from './archiveProduct/MenuProducts'

export default class ProductArchives extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


goToSearchScreen = () => {

  Actions.search()

}

  goToProductArchives = () => {
    Actions.viewProduct()
 }

  goToEditProducts = () => {
    Actions.editProducts()
   
 }

 goBackToNavScreen = () => {

  Actions.navScreen()

}


  render() {

    
    let popupRef = React.createRef()
    const onShowPopup = () =>{ popupRef.show()}
  const onClosePopup = () =>{ popupRef.close()}


    return (
      <View>

 {/* ---------------------------------header--------------------------------- */}
               <View  style={{ marginTop:-20,}}>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                      <TouchableOpacity
                      onPress={this.goBackToNavScreen}
                      >
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                        </TouchableOpacity>  
                }
                    centerComponent={<Text style={{ fontSize:20}}>All Products</Text>
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

               <TouchableOpacity    onPress={onShowPopup}>
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>

                <MenuProducts
title=""
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/>


                </View>     
            
            }
                    // rightComponent={<Text>Done</Text>}
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
               />
        </View>
        {/* -----Header end */}

      
        
        <FlatList  
                    data={[  
                        {key: 'Shahid Saleem'},{key: 'Azeem Murtaza'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                        {key: 'Meherma Sultan'},  {key: 'Afia Noor'},  {key: 'sadaf Noor'}, {key: 'asfa Noor'},
                    ]}  
                    renderItem={({item}) =>  
                    <View >
                        {/* <Text style={{marginRight: 20}}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text> */}


<View style={styles.bigCardView}>
         
         <View style={{ marginBottom: 15, marginLeft: '5%', marginTop: '5%' }}>
         <TouchableOpacity
                 onPress={this.goToProductArchives}
                 >
           <View style={{ flexDirection: 'row' }}>

             <View style={styles.Rows}>

               <View style={styles.registeredName}>

                 <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
                 <View style={{ marginLeft: 5 }}>
                   <Title style={{ color: '#49641D' }}>{item.key}</Title>
                 </View>
              
                   <Icon name="chevron-forward-outline" style={{ paddingLeft: '20%',marginTop: '3%', fontSize: 35, color: '#e2e2e2' }}></Icon>
                
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
               <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16 }}>Price</Text>
               <Text style={{ color: '#49641D' }}>0%</Text>
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
               <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 }}>Unit of measurement</Text>
               <Text style={{ color: '#49641D' }}>Pcs.</Text>
             </View>

           </View>
         </View>

        {/* ------------------------------Horizontal line -------------------------------------- */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'1%' , marginLeft:'5%', marginRight:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                </View>
{/* ------------------------------------------------ */}

{/* ------------More-------------- */}

<View style={{flexDirection: 'row',justifyContent: 'space-between', marginLeft:'8%'}}>
<TouchableOpacity  
onPress={this.goToEditProducts}
>
 <Title style={{ color: '#49641D' , fontSize:14}}>Edit</Title>
 </TouchableOpacity>
 <TouchableOpacity>
 <Title style={{ paddingRight:'5%', color: '#49641D' , fontSize:14}}>Delete</Title>
 </TouchableOpacity>
   </View>


         {/* <View style={{backgroundColor:'#FBFFF4',paddingTop:10, paddingBottom:10}}>
          <TouchableOpacity 
         //  delayPressIn={1} onPress={() =>}
          >
         <Text style={{textAlign:'right', paddingRight:'5%'}}>More...</Text>
         </TouchableOpacity>
         </View>       */}

       </View>


        <View>
       
        </View>
                               </View>}
                    ItemSeparatorComponent={this.renderSeparator}  
                />

        {/* -------------Big card view */}

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
        width: '100%',
      },
      Rows: {
        flexDirection: 'row',
        width: '90%'
      },
})