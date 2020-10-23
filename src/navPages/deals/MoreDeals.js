import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class MoreDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };
  }

  goToEditDeals = () => {
    this.setState({ show: false });
    // {close}
    // {this.close}
    Actions.editDeal()

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
<View style={{flex: 1, backgroundColor:'#000000AA', justifyContent:'flex-end'}}>

{this.renderOutsideTouchable(onTouchOutside)}

{/* -----------------popup screen design---------------- */}
<View
style={{backgroundColor:'#FFFFFF', width: '100%', maxHeight: deviceHeight * 0.4, paddingHorizontal:10,  borderTopLeftRadius:10,borderTopRightRadius:10,}}
>
{/* {this.renderTitle} */}
 <View>

    {/* <Text style={{color:'#49641D', fontSize:20, fontWeight:'500' , margin:15, textAlign:'center'}}> {title} </Text> */}
    <TouchableOpacity onPress={this.goToEditDeals}>
    <Text style={{color:'#49641D', fontSize:20, fontWeight:'500' , margin:15, textAlign:'center'}}> Edit </Text>
    </TouchableOpacity>

    <TouchableOpacity>
    <Text style={{color:'#49641D', fontSize:20, fontWeight:'500' , margin:15, textAlign:'center'}}> Delete </Text>
    </TouchableOpacity>

    <View style={{height:'20%'}}></View>

</View> 


{/* {this.renderContent()} */}


</View>

</View>

      </Modal>
    );
  }
}
