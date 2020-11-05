import React, { Component } from 'react';
import { View, Text, Modal,Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class MenuChat extends Component {
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


goToNewDeal = () => {
  this.setState({ show: false });
  Actions.newDeal()
}

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

//     <Text style={{color:'#49641D', fontSize:16, fontWeight:500 , margin:15}}> {title} </Text>
// </View>

//     )
//   }

    //  renderContent = () => {

    //     return (

    //         <View>
    //           <FlatList style={{marginBottom:16}}
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

//     let popupRefMenu = React.createRef()
//     const onShowPopupMenu = () =>{ popupRefMenu.show()}
//   const onClosePopupMenu = () =>{ popupRefMenu.close()}
  

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
     onPress={this.goToNewDeal}
     > 
<View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/addtask.png') }    />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Copy </Text>
</View>

    </TouchableOpacity>

    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>All Invoice </Text> */}

    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%', }}>
<Image source={require('../../assets/images/allinvoice.png') }  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Quote </Text>
</View>


    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>My Invoioce </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/myinvoice.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Edit </Text>
</View>
    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}> </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/customfilter.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Create </Text>
</View>

    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/configurefilter.png') } style={{width:20, height:20}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Delete </Text>
</View>
    </TouchableOpacity>
   

    <View style={{height:'10%'}}></View>

</View> 


{/* {this.renderContent()} */}


</View>
{/* --------------------------- */}
</View>

      </Modal>
    );
  }
}
