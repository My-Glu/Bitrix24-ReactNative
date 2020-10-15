import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
{/* ---------------------------------header--------------------------------- */}
         <StatusBar backgroundColor="#49641D" animated={true}/>
       <View style={styles.container}>
       <Header 
            containerStyle={styles.headerContainer}
            leftComponent={<Image source={require('../../assets/images/bar.png')} />}
            centerComponent={{text: 'Information', style:{...styles.headerTitle}}}
            rightComponent={<Image source={require('../../assets/images/search.png')} style={styles.headerRight} />}
        />
</View>
{/* --------------------------------------Image Block----------------------------- */}
<View style={{backgroundColor: 'white', paddingVertical:20}}>
<View style={{flexDirection: 'row', display: 'flex',alignItems: 'center', justifyContent: 'center',marginBottom:20}}>
   <View  style={styles.circle}>
    <Text style={{width: 80, textAlign: 'center'}}>Image</Text>
  </View>
 
</View>
<View style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
<Text style={styles.textTitle}>Change Profile Photo</Text>
</View>
</View>
{/* ----------------------------------part1--------------------------------- */}

<View>

{/* <View style={styles.} */}



</View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

    circle :{
        height : 80,
        width :80,
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