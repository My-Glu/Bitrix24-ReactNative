import React, { Component } from 'react';
import { View, Text, Modal,Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class MenuMyActivities extends Component {
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
<View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/addtask.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Add Task </Text>
</View>

    </TouchableOpacity>

    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>All Products </Text> */}

    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%', }}>
<Image source={require('../../assets/images/addtask.png') }  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Add Subtask </Text>
</View>


    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>My Products </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/favourites.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Add to favorites </Text>
</View>
    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}> </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/start.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Start </Text>
</View>

    </TouchableOpacity>
   
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/close.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Close </Text>
</View>
    </TouchableOpacity>

    
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/delegate.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Delegate </Text>
</View>
    </TouchableOpacity>
   

 
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/edit.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Edit </Text>
</View>
    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/delete.png') }  style={{width:20, height:20}} />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Delete </Text>
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
