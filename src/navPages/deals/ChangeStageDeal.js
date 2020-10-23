import React, { Component } from 'react';
import { View, Text, Modal,Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MoreChangeStageDeal from './MoreChangeStageDeal'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class ChangeStageDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };
  }

//   goToMenuInvoice = () => {
//     this.setState({ show: false });
//     // {close}
//     // {this.close}
//     Actions.menuInvoice()

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

//     <Text style={{color:'#49641D', fontSize:18, fontWeight:500 , margin:15}}> {title} </Text>
// </View>

//     )
//   }

    //  renderContent = () => {

    //     return (

    //         <View>
    //           <FlatList style={{marginBottom:18}}
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

     let popupRefSrc = React.createRef()
     const onShowPopupSrc = () =>{ 
     
       popupRefSrc.show()
       
      
      }
   const onClosePopupSrc = () =>{ popupRefSrc.close()}


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
 <View >

   
    <TouchableOpacity
    //  onPress={this.goToEditLeads}
     > 
<View style={{ justifyContent: 'center', marginTop: '10%', }}>
{/* <Image source={require('../../assets/images/addtask.png') }   /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' ,  textAlign:'center'}}>New </Text>
</View>

    </TouchableOpacity>

    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>All Invoice </Text> */}

    <View style={{ justifyContent: 'center', marginTop: '5%', }}>
{/* <Image source={require('../../assets/images/allinvoice.png') }  /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' ,  textAlign:'center'}}>Create papers </Text>
</View>


    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>My Invoioce </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%',}}>
{/* <Image source={require('../../assets/images/myinvoice.png') }   /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , textAlign:'center'}}>Invoices </Text>
</View>
    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}> </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%',}}>
{/* <Image source={require('../../assets/images/customfilter.png') }   /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , textAlign:'center'}}>In progress </Text>
</View>

    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%',}}>
{/* <Image source={require('../../assets/images/configurefilter.png') }   /> */}


<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' ,textAlign:'center'}}>Final invoice</Text>
</View>
    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>Visible Fields </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%',}}>
{/* <Image source={require('../../assets/images/visiblefields.png') }   /> */}

<TouchableOpacity    onPress={onShowPopupSrc}>
<Text style={{color:'#49641D', fontSize:18, fontWeight:'500' ,  textAlign:'center'}}>More... </Text>
</TouchableOpacity>

<MoreChangeStageDeal
title=""
ref={(target) => popupRefSrc = target}
onTouchOutside={onClosePopupSrc}
/>


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
