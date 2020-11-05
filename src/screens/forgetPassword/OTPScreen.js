import React, { Component } from 'react';
import { View, Text, TextInput, CustomTextInput, Button } from 'react-native';

export default class OTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    

      <View style={{ 
           display: 'flex',
           flexDirection: 'column',
           flex: 1,
           justifyContent: 'center',
           marginTop: -100,
           marginHorizontal:'5%'
          }}>
<View style={{backgroundColor: 'white', padding:'5%', borderRadius:8}}>
        <Text style={{fontSize:16, fontFamily:'segoe-ui',textAlign:'center'}}>Enter OTP sent to your email: </Text>
        <View style={{backgroundColor: '#f6f6f6', borderwidth:'#d3d3d3', borderRadius:8 , marginVertical:'3%'}}>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:'8%', marginVertical:'8%'}}>
          {/* -------------------------------------------- */}
        <TextInput
        keyboardType="numeric"
        style={{borderWidth:1, borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        keyboardType="numeric"
        style={{borderWidth:1, borderColor:'#606060',width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        keyboardType="numeric"
        style={{borderWidth:1,borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        keyboardType="numeric"
        style={{borderWidth:1,borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
                                 />
          {/* -------------------------------------------- */}
        <TextInput
        keyboardType="numeric"
        style={{borderWidth:1,borderColor:'#606060', width: '10%', justifyContent: 'center', alignItems: 'center', paddingLeft:'4%'}}
        placeholder="0"
        maxLength={1}
                                 />
        </View>
        </View>
<View style={{ justifyContent: 'center', alignItems: 'center'}}><Text>Resend OTP in <Text style={{fontWeight:'bold'}}>25</Text><Text style={{fontWeight:'bold'}}>s</Text></Text></View>
<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:'5%'}}><Text><Text style={{fontWeight:'bold'}}>5</Text> <Text>Attempts Remaining</Text></Text></View>

<View style={{marginTop:'10%'}}>
<Button style={{fontWeight: 'bold'}} title="Submit" />
</View>

{/* <View> */}
{/*    
{[0,1,2,3].map((element, index) => (

<CustomTextInput
value={otpArray[index]}
keyboardType={'numeric'}
maxLength={1}
autoFocus={index=== 0 ? true : undefined}
key={index}/> 
 ))}  */}

{/* </View> */}


</View>
      </View>

      
    );
  }
}
