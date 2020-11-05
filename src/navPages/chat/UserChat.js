import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,View, Text, FlatList, StatusBar,Image, Alert, TextInput,TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import {Header,SearchBar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
// import AutoGrowingTextInput from 'react-native-autogrow-textinput';
// import AutogrowInput from 'react-native-autogrow-input';
// import ReactNativePickerModule from 'react-native-picker-module'
import TaskMenuChat from './TaskMenuChat'
import EmojiSelector, { Categories } from 'react-native-emoji-selector'
// import EmojiPicker from '../components/Picker'

export default class UserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {

      text:'',
      visible: true,

    };
  }


  // logEmoji (emoji) {
  //   console.log(emoji)
  // }


  goToNavScreen = () => {
    Actions.navScreen()
 }


  render() {

    let popupRefMenu = React.createRef()
    const onShowPopupMenu = () =>{ popupRefMenu.show()}
  const onClosePopupMenu = () =>{ popupRefMenu.close()}

    return (
    

<SafeAreaView style={{ flex: 1 }}>

<View style={{marginTop:-20,}}>
  
{/* ----------------------header--------------------- */}
<Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goToNavScreen}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={
                <View >
            
{/* <View style={{flexDirection: 'row' ,}}> */}
<TouchableOpacity 
 onPress={onShowPopupMenu}
// onPress={this.goToUserChat} 
>
    <View style={{flexDirection: 'row'}}>
<Avatar.Image style={{position: 'relative'}} source={require('../../assets/images/blue6.jpg')} size={40} />
                                    <View style={{ marginLeft:'5%' }}>
                                        <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>Farhan Sarwer</Title>
                                        <Caption style={{ fontSize:13, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>Mobile App </Caption>
                                    </View>
                               
                                 
                                    {/* </TouchableOpacity> */}
                                <View>
                                    {/* <TouchableOpacity > */}
                                    <Icon name="chevron-down-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
                                    </View>
                      

                <TaskMenuChat
title=""
ref={(target) => popupRefMenu = target}
onTouchOutside={onClosePopupMenu}
/>
                 {/* </View> */}
                 </View>
                 </TouchableOpacity>
                </View>
            }
        
            // rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    // <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
    // }

            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />
{/* ----------------------header end--------------------- */}
</View>

      <View style={styles.containerMain}>

{/* -----------MainContainer ---------------------- */}

<ScrollView>

<Text>{this.state.text}</Text>

</ScrollView>




{/* -----------MainContainer end ---------------------- */}

        <View style={styles.bottomView}>

        <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal:'2%', alignItems: 'center',}}> 
        <TouchableOpacity style={{ marginHorizontal: '2%'}}>
<Icon3 name="paperclip" color="#49641D" style={{ fontSize: 22 }}></Icon3>
</TouchableOpacity>
{/* 
<AutoGrowingTextInput 
color="#49641D"
style={styles.textInput} 
placeholder={'Write a message......'}
onChangeText={(text) => this.setState({text})}  
onSubmitEditing={ ()=> {this.text} }
style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginVertical:'3%', height:35, paddingHorizontal:'2%', paddingVertical:'1%', width: '75%' }}
/> */}


 
<TextInput                 
                color="#49641D"
                placeholder="Write a message......"
                editable={true}
                onChangeText={(text) => this.setState({text})}  
                onSubmitEditing={ ()=> {this.text} }
                style={{borderWidth:2,borderColor:'#C0C0C0', borderRadius:4, marginVertical:'3%', height:35, paddingHorizontal:'2%', paddingVertical:'1%', width: '75%' }}/>
 
 
 {/* <EmojiPicker
          onEmojiSelected={this.logEmoji.bind(this)}
          visible={this.state.visible}
          />  */}


{/* <EmojiSelector
  category={Categories.symbols}
  onEmojiSelected={emoji => console.log(emoji)}
/>; */}
<TouchableOpacity style={{ marginHorizontal: '1%' , }}
            // onPress={() => {this.setState({visible: !this.state.visible})}}
            >
<Icon4 name="emotsmile" color="#49641D" style={{ marginLeft: '2%' , fontSize: 22, }}></Icon4>
</TouchableOpacity>
<TouchableOpacity style={{ marginHorizontal: '1%' , }}>
<Icon2 name="microphone" color="#49641D" style={{ fontSize: 22, }}></Icon2>
</TouchableOpacity>     
</View>

          {/* <Text style={styles.textStyle}>Bottom View</Text> */}
        </View>
      </View>
    </SafeAreaView>

);
 
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },

  //ChatView

  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },

  messages: {
    flex: 1
  },

  //InputBar

  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  textBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10
  },

  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 5,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#66db30'
  },

  //MessageBubble

  messageBubble: {
      borderRadius: 5,
      marginTop: 8,
      marginRight: 10,
      marginLeft: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection:'row',
      flex: 1
  },

  messageBubbleLeft: {
    backgroundColor: '#d5d8d4',
  },

  messageBubbleTextLeft: {
    color: 'black'
  },

  messageBubbleRight: {
    backgroundColor: '#66db30'
  },

  messageBubbleTextRight: {
    color: 'white'
  },


});
