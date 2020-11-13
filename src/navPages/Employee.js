import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert, FlatList,TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import {Header,SearchBar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
// import {
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import ViewOverflow from 'react-native-view-overflow';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

// -----------------imagepicker-------------------------

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };
// ---------------------imagepicker---------------------



export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {

        search: '',
// --------------------------
        // filepath: {
        //   data: '',
        //   uri: ''
        // },
        // fileData: '',
        // fileUri: '',
// ------------------------- 
    }
}


// ----------------------------------------------------------------
// chooseImage = () => {
//   let options = {
//     title: 'Select Image',
//     customButtons: [
//       { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//     ],
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };

//   ImagePicker.showImagePicker(options, (response) => {
//     console.log('Response = ', response);

//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//       alert(response.customButton);
//     } else {
//       const source = { uri: response.uri };

//       // You can also display the image using data:
//       // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//       // alert(JSON.stringify(response));s
//       console.log('response', JSON.stringify(response));
//       this.setState({
//         filePath: response,
//         fileData: response.data,
//         fileUri: response.uri
//       });
//     }
//   });
// }


// launchCamera = () => {
//   let options = {
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };


//   ImagePicker.launchCamera(options, (response) => {
//     console.log('Response = ', response);

//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//       alert(response.customButton);
//     } else {
//       const source = { uri: response.uri };
//       console.log('response', JSON.stringify(response));
//       this.setState({
//         filePath: response,
//         fileData: response.data,
//         fileUri: response.uri
//       });
//     }
//   });

// }

// -----

// launchImageLibrary = () => {
//   let options = {
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };
//   ImagePicker.launchImageLibrary(options, (response) => {
//     console.log('Response = ', response);

//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//       alert(response.customButton);
//     } else {
//       const source = { uri: response.uri };
//       console.log('response', JSON.stringify(response));
//       this.setState({
//         filePath: response,
//         fileData: response.data,
//         fileUri: response.uri
//       });
//     }
//   });

// }

// renderFileData() {
//   if (this.state.fileData) {
//     return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
//       style={styles.images}
//     />
//   } else {
//     return <Image source={require('../assets/images/userprog.png')}
//       style={styles.images}
//     />
//   }
// }

// renderFileUri() {
//   if (this.state.fileUri) {
//     return <Image
//       source={{ uri: this.state.fileUri }}
//       style={styles.images}
//     />
//   } else {
//     return <Image
//       source={require('../assets/images/userprog.png')}
//       style={styles.images}
//     />
//   }
// }


// ---------------------------------------------



goToSearchScreen = () => {

  Actions.search()

}

renderSeparator = () => {  
  return (  
      <View  
          style={{  
              height: 1,  
              width: "100%",  
              backgroundColor: "#D3D3D3",  
          }}  
      />  
  );  
};  

 //handling flatlist onPress action  
 getListViewItem = (item) => {  
  Alert.alert(item.key);  
}  


updateSearch = (search) => {
    this.setState({ search });
};


    goToDetailsEmployee = (item) => {
      //pass data between screen using router flux
      Actions.detailsEmployee({val: item.key})
   }

   goBackToNavScreen = () => {

    Actions.navScreen()

  }

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
 search = this.state;
renderInner = () => (
  // search = this.state
  // ---------------------- bottom up sheeet design -------------------------------------
  <View style={styles.panel}>

      <View style={{marginBottom:15 ,justifyContent:'center',alignItems:'center',}}>
    <View style={{borderWidth:2,borderColor:'#C0C0C0',paddingTop:10, paddingBottom:15, borderRadius:10}}>
      <SearchBar
                            containerStyle={styles.searchbarContainer}
                            inputContainerStyle={styles.searchbarInputContainer}
                            inputStyle={[{ fontSize: 19 }, styles.searchbarInput]}
                            placeholder ="Search from contacts... "
                            onChangeText={this.updateSearch}
                            // value={search}

                        />
                        </View>
</View>
{/* --------------------Scroll view */}
<ScrollView>
<View  style={{paddingVertical: '15%'}}>
<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} backgroundColor="#ffffff" source={require('../assets/images/userprog.png')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>Furqan</Title>
              
          </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} backgroundColor="#ffffff" source={require('../assets/images/userprog.png')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>+923067860123</Title>
              
          </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} backgroundColor="#ffffff" source={require('../assets/images/userprog.png')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>+923067860123</Title>
              
          </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} backgroundColor="#ffffff" source={require('../assets/images/userprog.png')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>+923067860123</Title>
              
          </View>
</View>


<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image backgroundColor="#ffffff"  source={require('../assets/images/userprog.png')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>Iqbal</Title>
              
          </View>
</View>

</View>
</ScrollView>
{/* -----------------------Scroll view end */}

<View style={{borderTopColor:'#F0F0F0',borderTopWidth:1,paddingTop:20,}}>

          <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
              <Text style={styles.panelButtonTitle}>Send SMS with invitation</Text>
          </TouchableOpacity>
          <View >
              <Text style={{fontSize:18,color:'grey',paddingVertical:15, textAlign:'center'}}><Image  source={require('../assets/images/help.png')} />       Need Help</Text>
          </View>
         
          </View>

      </View>

      // -------------------- bottom up sheet design end --------------------
      
);



// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

 //   --------------------- render bottom up sheet header ----------------------

 renderHeader = () => (

  <View style={styles.bottomHeader}>
      <View style={styles.panelHeader}>
          <View style={styles.panelHandle}><Text style={{ fontSize: 13, color: 'green' }}>Invite</Text></View>
          <View style={styles.panelHandle}><Text style={{ fontSize: 13, color: 'green' }}><Image  source={require('../assets/images/clipboard.png')} style={{height:13, width:13}}/> Copy Link</Text></View>
      </View>
  </View>
);

//   ------------------ render header end ------------------


// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------


bs = React.createRef();
fall = new Animated.Value(1);


// ------------------------------Main render--------------------------------------------
  render() {

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
            centerComponent={<Text style={{ fontSize:20}}>Employee</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
            <TouchableOpacity
            onPress={this.goToSearchScreen}
            >
        <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
        </TouchableOpacity>
    
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}

{/* item one  */}

<FlatList  
                    data={[  
                        {key: 'Shahid Saleem'},{key: 'Fahad Yousaf'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                        {key: 'Meherma Sultan'},  {key: 'Afia Noor'},  {key: 'sadaf Noor'}, {key: 'asfa Noor'},
                    ]}  
                    renderItem={({item}) =>  
                    <View >
                        {/* <Text style={{marginRight: 20}}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text> */}


<View>
        <View style={{marginHorizontal:'10%',marginVertical:'5%'}} >
        <TouchableOpacity 
       onPress={this.goToDetailsEmployee.bind(this, item)}
      // onPress={this.goToDetailsEmployee.bind(this, item)}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
 
  <Avatar.Image backgroundColor="#ffffff"  source={require('.././assets/images/userprog.png')} size={50} />
  
  <View><Text style={{textAlign: 'left'}}>{item.key}</Text></View>

  
  <Icon name="chevron-forward-outline" style={{ marginLeft: '20%', fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>


                     
                               </View>}
                    ItemSeparatorComponent={this.renderSeparator}  
                />



          {/* <View>
        <View style={{marginHorizontal:'10%',marginVertical:'5%'}} >
        <TouchableOpacity 
       onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
 
  <Avatar.Image source={require('.././assets/images/userprog.png')} size={50} />
  
  <View><Text>Shahid Saleem</Text></View>

  
  <Icon name="chevron-forward-outline" style={{ marginLeft: '20%', fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View> */}

        {/* item 1 end  */}

{/* bottomup sheet */}
        {/* <ViewOverflow> */}
        <View style={{position: 'absolute', zIndex:-20,  top: deviceHeight*0.75, left: deviceWidth*0.8,}}>
        <View style={{overflow: 'visible',elevation: (Platform.OS === 'android') ? 50 : -1}}>
        
                    <TouchableOpacity delayPressIn={1} onPress={() => this.bs.current.snapTo(0)}>
                        <Image  source={require('../assets/images/plusicon.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>
                  
                </View>
                </View>
                {/* </ViewOverflow> */}

                <BottomSheet
                 ref={this.bs}
                 snapPoints={[450, 0]}
                 renderContent={this.renderInner}
                 renderHeader={this.renderHeader}
                 initialSnap={1}
                 callbackNode={this.fall}
                 enabledGestureInteraction={true}
             />

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


  scrollView: {
    backgroundColor:'#D3D3D3',
  },

  body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  }
});