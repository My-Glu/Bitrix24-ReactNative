import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
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
            leftComponent={
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
        }
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
</View>
{/* -----Header end */}
{/* -----Header end */}

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