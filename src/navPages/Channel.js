import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';

export default class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
           
<View>
<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '5%'}}>


<View style={{flexDirection: 'row' ,  justifyContent:'space-between', }}>
    <View style={{flexDirection: 'row'}}>
<Avatar.Image style={{position: 'relative'}} source={require('../assets/images/blue6.jpg')} size={50} />
                                    <View style={{ marginLeft:'2%' }}>
                                        <Title style={{ color: '#49641D', fontSize:15,  fontFamily:'segoesb',}}>Farhan Sarwer </Title>
                                        <Caption style={{ fontSize:15, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>FACEBOOK </Caption>
                                    </View>
                               
                                    </View>
                                <View>
                                    <TouchableOpacity >
                                        <Caption style={{ fontWeight: 'bold', fontSize:10 }}>Wed </Caption>
                                    </TouchableOpacity>
                                    </View>
</View>

</View>

{/* ------------------------------------------------ */}

 {/* ------------------------------Horizontal line -------------------------------------- */}
 <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'5%' , marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* ------------------------------------------------ */}


<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '5%'}}>


<View style={{flexDirection: 'row' ,  justifyContent:'space-between', }}>
    <View style={{flexDirection: 'row'}}>
<Avatar.Image style={{position: 'relative'}} source={require('../assets/images/blue6.jpg')} size={50} />
                                    <View style={{ marginLeft:'2%' }}>
                                        <Title style={{ color: '#49641D', fontSize:15,  fontFamily:'segoesb',}}>Farhan Sarwer </Title>
                                        <Caption style={{ fontSize:15, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>INSTAGRAM </Caption>
                                    </View>
                               
                                    </View>
                                <View>
                                    <TouchableOpacity >
                                        <Caption style={{ fontWeight: 'bold', fontSize:10 }}>Wed </Caption>
                                    </TouchableOpacity>
                                    </View>
</View>

</View>


</View>

);
}
}

