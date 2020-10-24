import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import {Header,SearchBar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// import ViewOverflow from 'react-native-view-overflow';


export default class Employee extends Component {
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
          <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>Furqan</Title>
              
          </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>+923067860123</Title>
              
          </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>+923067860123</Title>
              
          </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={60} />
          <View style={{ marginLeft: 30 }}>
              <Title style={{ color: 'green', }}>+923067860123</Title>
              
          </View>
</View>


<View style={{flexDirection: 'row' ,marginBottom:20,borderBottomColor:'#F0F0F0',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
          <Avatar.Image  source={require('../assets/images/blue6.jpg')} size={60} />
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
    
        <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
               
    
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />

{/* -----Header end */}




{/* item one  */}
          <View>
        <View style={{marginHorizontal:'10%',marginVertical:'5%'}} >
        <TouchableOpacity 
       onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
 
  <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
  
  <View><Text>Shahid Saleem</Text></View>

  
  <Icon name="chevron-forward-outline" style={{ marginLeft: '20%', fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             </View>
  </TouchableOpacity>
 
</View>
        </View>

        {/* item 1 end  */}
        {/* <ViewOverflow> */}
        <View style={{position: 'absolute', zIndex:-20,top: '70%', marginLeft: '80%',}}>
        <View style={{overflow: 'visible',elevation: (Platform.OS === 'android') ? 50 : -1}}>
        
                    <TouchableOpacity delayPressIn={1} onPress={() => this.bs.current.snapTo(0)}>
                        <Image  source={require('../assets/images/plusicon.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>
                  
                </View>
                </View>
                {/* </ViewOverflow> */}

                <BottomSheet
                 ref={this.bs}
                 snapPoints={[500, 0]}
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