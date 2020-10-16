import React, { Component } from 'react';
import {View, StyleSheet, Text,TextInput, Image, ScrollView,Button, CheckBox , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';
import Login from '.././login/Login';
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goBack: false
    };
  }

  setBack() {
    this.setState({goBack: true});
  }

render() {

//   if (this.state.goBack) {
     
//     return <Login/>;
// }
     return (
      
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{flex:1, marginLeft:10, marginTop:10}}>
        <TouchableOpacity 
// onPress={this.setBack()}
>
        <Image source={require('../../assets/images/backarrowsmall.png')} />

        </TouchableOpacity>
       {/* <Icon name="menu"  color="black" height="50" width="50" 
      //  onPress={() =>}
       /> */}

       </View>
       
         <View style={styles.container}>

             <Image source={require('../../assets/images/noorgrplogo3x.png')}
              resizeMode="center" 
               style={styles.image}
                 />

               <Text style={styles.textTitle}>FORGET PASSWORD</Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 20, marginTop: 10}} />

                </View>

<View style={{flex: 1, height:30}}></View>
{/*-------------------------------- input email ------------------------------------- */}
                <View style={styles.containerInput}>
                <View style={styles.SectionStyle}>

               {/* <Image source={require('../../assets/images/user-profile.png')} style={styles.ImageStyle} /> */}
<Text style={{fontSize:25, paddingHorizontal:5, paddingBottom:5, color:'#aaa'}}>@</Text>
                         <TextInput
                         style={{flex:1}}
                          placeholder="E-mail"
                          underlineColorAndroid="transparent"
                                 />

                  </View>
                 </View>

  {/* ------------------------------Button signin----------------------------------------------  */}

  <View style={styles.screenContainer}>
      <Button title="RESET"  color="#385805" />
    </View>
 </View>

      </ScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 5
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 30,
        marginTop: -10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'black',
      margin:10,
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10
  },
  
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
    buttonSignin: {
       
      borderWidth: 1,
      
      borderColor: 'black',
      backgroundColor: 'red'
   },
   screenContainer: {
    flex: 1,
    marginHorizontal:5,
    alignSelf: 'stretch',
    justifyContent: "center",
    padding: 16
  }
  
  });