import React, { Component } from 'react';
import { View, Text, Modal,Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class MenuViewDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };
  }

//   goToEditLeads = () => {
//     this.setState({ show: false });
//     // {close}
//     // {this.close}
//     Actions.editLeads()

//  }


  show = () => {
this.setState({ show: true });
  }

  close = () => {
this.setState({ show: false });
  }

  renderOutsideTouchable(onTouch){
      const view = <View style={{flex: 1,width: '100%'}}/>
      if(!onTouch){return view}
      return(

        <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1,width: '100%'}}>
          {view}
        </TouchableWithoutFeedback>

      )
  }

//   renderTitle = () => {
//     const { title}= this.props
     
//     return (

//         <View>

//     <Text style={{color:'#49641D', fontSize:20, fontWeight:500 , margin:15}}> {title} </Text>
// </View>

//     )
//   }

    //  renderContent = () => {

    //     return (

    //         <View>
    //           <FlatList style={{marginBottom:20}}
    //           showVerticalScrollIndicator={false}
    //           data={data}
    //           renderItem={this.renderItem}
    //           extraData={data}
    //           keyExtractor={(item,index) => index.toString()}
    //           itemSeparatorComponent={this.renderSeparator}
    //           contentContainStyle={{paddingBottom:40}}
              
    //           />

    //         </View>

    //     )

    //  }


  render() {
     let {show} = this.state

     const {onTouchOutside, title}= this.props

    return (
      <Modal
      animationType={'fade'}
      transparent= {true}
      visible= {show}
      onRequestClose={this.close}
      >
<View style={{flex: 1, backgroundColor:'#000000AA',alignItems:'center', justifyContent:'center'}}>

{this.renderOutsideTouchable(onTouchOutside)}

{/* -----------------popup screen design---------------- */}
<View
style={{backgroundColor:'#FFFFFF', width: '100%',maxHeight: deviceHeight * 0.7, paddingHorizontal:10,  borderTopLeftRadius:10,borderTopRightRadius:10, }}
>
{/* {this.renderTitle} */}
 <View style={{justifyContent: 'center'}}>

   
    <TouchableOpacity
    //  onPress={this.goToEditLeads}
     > 
<View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10%',}}>
{/* <Image source={require('../../assets/images/edit.png') }   /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>User tasks </Text>
</View>

    </TouchableOpacity>

    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>All Products </Text> */}

    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%',  }}>
{/* <Image source={require('../../assets/images/delete.png') }  /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>User files </Text>
</View>


    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>My Products </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', }}>
{/* <Image source={require('../../assets/images/myinvoice.png') }   /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>User messages </Text>
</View>
    </TouchableOpacity>

 
    <View style={{height:'10%'}}></View>

</View> 


{/* {this.renderContent()} */}


</View>

</View>

      </Modal>
    );
  }
}
