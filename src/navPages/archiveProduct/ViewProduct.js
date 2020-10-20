import React, { Component } from 'react';
import { View, StatusBar,ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';

export default class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView>

             {/* ---------------------------------header--------------------------------- */}
        <StatusBar backgroundColor="#49641D" animated={true}/>
               <View>
               <Header 
                    containerStyle={{backgroundColor: '#fff',}}
                    leftComponent={
                        <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                }
                    centerComponent={<Text style={{ fontSize:20}}>View Product</Text>
                        // {text: 'All Clients', fontSize:30}
                    }
                
                    rightComponent={
                    // <Image source={require('../../assets/images/search.png')}  />
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            
                <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                       
            
            }
                    // rightComponent={<Text>Done</Text>}
                    // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
               />
        </View>
        {/* -----Header end */}
        <View  style={{marginLeft:'8%',marginRight:'8%', marginTop:'5%'}}>
  


         {/*  -------------------------------------row one ------------------------------------------------*/}
         <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>ID</Text>
  </View>
  {/* ---------------- */}
       {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>2</Title>
  {/* <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
    </View>

{/* --------------------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  
  
 
  
  {/* ------------------row 2----------------------------------------------- */}
  <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Name</Text>
  </View>
  {/* ---------------- */}
        {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>Mouse</Title>
  {/* <TouchableOpacity> */}
  {/* <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon> */}
  {/* </TouchableOpacity> */}
    </View>

{/* --------------------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------row 2 end---------------------- */}
  
  {/* ---------------------------------row 3-------------------------------------------- */}
  <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Description</Text>
  </View>
  {/* ---------------- */}
        {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>A pointing device</Title>
  {/* <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
    </View>

{/* --------------------------- */}
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------row 3 end--------------------------- */}
 
  {/* ---------------------------------row 4-------------------------------------------- */}
  
  {/* <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Company Type</Text>
  </View> */}
  {/* ---------------- */}
  
<View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight:'5%'}}>
      <Title style={{ color: '#49641D' , fontSize:14}}>Active</Title>
      {/* <ion-icon name="checkmark-circle-outline"></ion-icon> */}
      <Icon name="checkmark-circle-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
    </View>
  {/* ---------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
 
  {/* -------------row 4 end--------------------------- */}




   {/* ---------------------------------row 5-------------------------------------------- */}
   <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Currency</Text>
  </View>
  {/* ---------------- */}
       {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>US Dollar</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View>

{/* --------------------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------row 5 end--------------------------- */}





 {/* ------------------row 6 --------------------------------- */}
 <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Unit of measurement</Text>
  </View>
  {/* ---------------- */}
       {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>Pcs.</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View>

{/* --------------------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ------------------row 6 end------------------ */}





  {/* ---------------------------------row 7-------------------------------------------- */}
  <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Sort</Text>
  </View>
  {/* ---------------- */}
       {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>100</Title>
  {/* <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
    </View>

{/* --------------------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* -------------row 7 end--------------------------- */}
  
  {/* -----------------------------------row 8--------------------------- */}
  
  <View  style={{ marginBottom:'2%'}}>
  <Text style={{color:'#C0C0C0'}}>Preview Image</Text>
  </View>
  {/* ---------------- */}
       {/* ----------------------- */}
 
<View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
  <Title style={{ color: '#49641D' , fontSize:17}}>Change</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
    </View>

{/* --------------------------- */}
  
  {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>

  {/* -------------row 8 end--------------------------- */}


  
  
  
  {/* -------------row 10 end--------------------------- */}
  
  
  <View style={{height:100}}></View>
        </View>
        </ScrollView>
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
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 230,
      },
      Rows: {
        flexDirection: 'row',
        
        
      },
})