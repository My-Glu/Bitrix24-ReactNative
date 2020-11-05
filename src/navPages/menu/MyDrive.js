import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import {Header,SearchBar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import MenuUserFiles from '../employee/MenuUserFiles';

// import ViewOverflow from 'react-native-view-overflow';


export default class MyDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {

        search: '',
    }
}

updateSearch = (search) => {
    this.setState({ search });
};


    goToDetailsEmployee = () => {
      Actions.detailsEmployee()
   }

   goBackToNavScreen = () => {

    Actions.navScreen()

  }

 
  goBackToDetailsEmployee = () => {
    Actions.detailsEmployee()
  
  }


// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
 search = this.state;




// {/* bs = React.createRef();
// fall = new Animated.Value(1); */}


// {/* // ------------------------------Main render-------------------------------------------- */}
  render() {

    let popupRefMenu = React.createRef()
    const onShowPopupMenu = () =>{ popupRefMenu.show()}
    const onClosePopupMenu = () =>{ popupRefMenu.close()}


    const { search} = this.state;

    return (
      <View  style={styles.container}>
                               
{/* ---------------------------------header--------------------------------- */}
     <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToNavScreen}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Farhan Sarwar</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
            <View style={{flexDirection: 'row'}}>
            <Icon name="search-outline" color="#49641D" style={{ paddingLeft: '20%',fontSize: 25 }}></Icon>
            
            <TouchableOpacity    onPress={onShowPopupMenu}>
            <Icon name="ellipsis-vertical-outline" color="#49641D" style={{ paddingLeft: '20%',fontSize: 25 }}></Icon>
           </TouchableOpacity>

           <MenuUserFiles
title=""
ref={(target) => popupRefMenu = target}
onTouchOutside={onClosePopupMenu}
/>
            </View>     
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}


{/* item one  */}
<View>
        <View style={{marginHorizontal:'10%',marginTop:'5%'}} >
        <TouchableOpacity 
      //  onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
        {/* <Icon name="folder" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Image source={require('../../assets/images/folderlg.png')} style={{width:30, height:30}} />
  
  <View><Text style={{textAlign:'left',  marginLeft:'10%'}}>Uploaded files</Text>
  </View>
  </View>

  <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,marginLeft:'16%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 
        {/* item 1 end  */}



{/* ------------------item two---------------------------  */}
<View>
        <View style={{marginHorizontal:'10%',marginTop:'5%'}} >
        <TouchableOpacity 
      //  onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
        {/* <Icon name="folder" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Image source={require('../../assets/images/folderlg.png')} style={{width:30, height:30}} />
  
  <View><Text style={{textAlign:'left',  marginLeft:'10%'}}>Stored files</Text>
  </View>
  </View>

  <Icon name="chevron-forward-outline" style={{ fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,marginLeft:'16%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 
        {/* item 2 end  */}




{/* ------------------item 3---------------------------  */}
  <View>
        <View style={{marginHorizontal:'10%',marginTop:'5%'}} >
        <TouchableOpacity 
      //  onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
        {/* <Icon name="folder" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Image source={require('../../assets/images/folderlg.png')} style={{width:30, height:30}} />
  
  <View><Text style={{textAlign:'left',  marginLeft:'10%'}}>Private hidden group</Text>
  </View>
  </View>

  <Icon name="chevron-forward-outline" style={{ fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,marginLeft:'16%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 
        {/* item 3 end  */}

{/* -----------------------item 4---------------------- */}

<View>
        <View style={{marginHorizontal:'10%',marginTop:'5%'}} >
        <TouchableOpacity 
      //  onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
        {/* <Icon name="folder" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Image source={require('../../assets/images/folderlg.png')} style={{width:30, height:30}} />
  
  <View><Text style={{textAlign:'left',  marginLeft:'10%'}}>Open public group</Text>
  </View>
  </View>

  <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,marginLeft:'16%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 

{/* -----------------------item 4 end---------------------- */}


{/* -----------------------item 5---------------------- */}
<View>
        <View style={{marginHorizontal:'10%',marginTop:'5%'}} >
        <TouchableOpacity 
      //  onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
        {/* <Icon name="folder" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Image source={require('../../assets/images/folderlg.png')} style={{width:30, height:30}} />
  
  <View><Text style={{textAlign:'left',  marginLeft:'5%'}}>Extranet_group for external users</Text>
  </View>
  </View>

  <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,marginLeft:'16%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 
{/* -----------------------item 5 end---------------------- */}


{/* -----------------------item 6---------------------- */}
<View>
        <View style={{marginHorizontal:'10%',marginTop:'5%'}} >
        <TouchableOpacity 
      //  onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
        {/* <Icon name="folder" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Image source={require('../../assets/images/folderlg.png')} style={{width:30, height:30}} />
  
  <View><Text style={{textAlign:'left',  marginLeft:'10%'}}>Private vision group</Text>
  </View>
  </View>

  <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,marginLeft:'16%', marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0'}} />
  
                  </View>
          {/* ------------------------------Horizontal line -------------------------------------- */}
 
{/* -----------------------item 6 end---------------------- */}

        {/* <ViewOverflow> */}
        {/* <View style={{position: 'absolute', zIndex:-20,top: '70%', marginLeft: '80%',}}>
        <View style={{overflow: 'visible',elevation: (Platform.OS === 'android') ? 50 : -1}}>
        
                    <TouchableOpacity delayPressIn={1} onPress={() => this.bs.current.snapTo(0)}>
                        <Image  source={require('../assets/images/plusicon.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>
                  
                </View>
                </View> */}
                {/* </ViewOverflow> */}

                {/* <BottomSheet
                 ref={this.bs}
                 snapPoints={[500, 0]}
                 renderContent={this.renderInner}
                 renderHeader={this.renderHeader}
                 initialSnap={1}
                 callbackNode={this.fall}
                 enabledGestureInteraction={true}
             /> */}

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-20,
},
SearchBar: {
  alignItems: 'center',
justifyContent: 'center',
flexDirection: 'row',

},
searchbarContainer: {

  borderRadius: 10,
backgroundColor: 'white',
justifyContent: 'center',
height: 20,

},
searchbarInputContainer: {
  backgroundColor: ('white'),

height: 20,
width: 300,
},


    circle :{
        height : 60,
        width :60,
        borderRadius: 100,
        borderColor: '#49641D',
        borderWidth:2,
        justifyContent: "center", 
        paddingHorizontal: 5,
       },
       textTitle: {
       
        fontSize: 20,
        
    },
    panel: {
       
      padding: 10,
backgroundColor: '#FFFFFF',
paddingTop: 10,


},
bottomHeader: {
      backgroundColor: '#FFFFFF',
shadowColor: '#333333',
shadowRadius: 2,
shadowOpacity: 0.4,
elevation: 3,
paddingTop: 20,
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
},
panelHeader: {
  marginLeft:'5%',
  marginRight: '3%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
},
panelHandle: {
     
height: 8,
marginBottom: 30,
},
panelTitle: {
      fontSize: 27,
height: 35,
},
panelSubtitle: {
      fontSize: 16,
color: 'gray',
fontWeight: 'bold',
height: 30,
marginBottom: 10,
},
panelButton: {
      padding: 13,
borderRadius: 10,
backgroundColor: 'green',
alignItems: 'center',
marginVertical: 7,
marginBottom:20
},
panelButtonTitle: {
      fontSize: 17,
fontWeight: 'bold',
color: 'white',
},

namesInputContainer: {
      height: 10,
width: 200
},
namesInput: {
      color: 'black',
},
namesLabel: {
      color: 'black'
},

})