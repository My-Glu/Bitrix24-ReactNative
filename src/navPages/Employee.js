import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert } from 'react-native';
import {Header} from 'react-native-elements';
export default class Employee extends Component {
    constructor(props) {  
        super(props);  
   
    }  

  render() {
    return (
      <View>

{/* ---------------------------------header--------------------------------- */}
<StatusBar backgroundColor="#49641D" animated={true}/>
       <View>
       <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={<Image source={require('.././assets/images/backarrowsmall.png')} />}
            centerComponent={{text: 'Employee',fontSize:20}}
        
            rightComponent={<Image source={require('.././assets/images/search.png')}  />}
            // rightComponent={<Text>Done</Text>}
            
       />
</View>

{/* item one  */}
          <View>
        <View>
        <View style={{flexDirection: 'row', display: 'flex',alignItems: 'center',marginBottom:20}}>
  <View style={{marginStart:'10%',marginEnd:'10%', marginVertical:'5%'}}>
   <View  style={styles.circle}>
    <Text style={{width: 60}}>Image</Text>
  </View>
  </View>
<View><Text>Shahid Saleem</Text></View>

<View style={{flex:1}}>
<Image style={{alignSelf:'flex-end' ,marginEnd:'10%'}} source={require('.././assets/images/arrowright.png')} />

</View>

  </View>
 
</View>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({

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

})