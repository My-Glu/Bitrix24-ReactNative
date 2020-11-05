import React, { Component } from 'react';
import { View, Text, Modal,Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class MenuUserTasks extends Component {
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
<Image source={require('../../assets/images/markallread.png') } style={{width:20, height:20}}    />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Mark all as read </Text>
</View>

    </TouchableOpacity>

    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>All Invoice </Text> */}

    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%', }}>
<Image source={require('../../assets/images/deadline.png') } style={{width:18, height:18}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Deadlines </Text>
</View>


    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>My Invoioce </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/showcompleted.png') } style={{width:20, height:20}}   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Show completed</Text>
</View>
    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}> </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/ongoing.png') }  style={{width:18, height:18}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Ongoing</Text>
</View>

    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/assisting.png') }  style={{width:20, height:20}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Assisting </Text>
</View>
    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>Visible Fields </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/setbyset.png') }  style={{width:20, height:20}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Set by me </Text>
</View>
    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:18, fontWeight:'500' , margin:15, textAlign:'center'}}>Sort By </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/following.png') } style={{width:20, height:20}}   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Following</Text>
</View>
    </TouchableOpacity>

    <View style={{height:'10%'}}></View>

</View> 


{/* {this.renderContent()} */}


</View>
{/* ------------------------------------------ */}
</View>

      </Modal>
    );
  }
}