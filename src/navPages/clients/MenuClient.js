import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class MenuClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };
  }

  
  goToNewCompany = () => {
    this.setState({ show: false });
    Actions.newCompany()
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

  renderTitle = () => {
    const { title}= this.props
     
    return (

        <View>

    <Text style={{color:'#49641D', fontSize:20, fontWeight:500 , margin:15}}> {title} </Text>
</View>

    )
  }

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

{/* {this.renderTitle} */}
 <View>

 <View
style={{backgroundColor:'#FFFFFF', width: '100%',maxHeight: deviceHeight * 0.7, paddingHorizontal:10,  borderTopLeftRadius:10,borderTopRightRadius:10, }}
>
{/* {this.renderTitle} */}
 <View style={{justifyContent: 'center'}}>

   
    <TouchableOpacity
   onPress={this.goToNewCompany}
     > 
<View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/addtask.png') }  style={{width:20, height:20}} />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Add Companies </Text>
</View>

    </TouchableOpacity>

    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>All Invoice </Text> */}

    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%', }}>
<Image source={require('../../assets/images/allinvoice.png') } style={{width:20, height:20}} />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>All Companies </Text>
</View>


    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>My Invoioce </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/myinvoice.png') } style={{width:20, height:20}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>My Companies </Text>
</View>
    </TouchableOpacity>


    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}> </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/customfilter.png') } style={{width:20, height:20}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Custom Filter </Text>
</View>

    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Configure Filter </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/configurefilter.png') }   />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Configure Filter </Text>
</View>
    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Visible Fields </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/visiblefields.png') } style={{width:20, height:20}}  />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Visible Fields </Text>
</View>
    </TouchableOpacity>
    <TouchableOpacity>
    {/* <Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , margin:15, textAlign:'center'}}>Sort By </Text> */}
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%', marginLeft:'25%',}}>
<Image source={require('../../assets/images/sortby.png') }  style={{width:20, height:20}} />


<Text style={{color:'#49641D', fontSize:16, fontWeight:'500' , marginLeft:'10%', textAlign:'center'}}>Sort By</Text>
</View>
    </TouchableOpacity>

    

</View> 


    <View style={{height: 50}}></View>

</View> 


{/* {this.renderContent()} */}


</View>

</View>

      </Modal>
    );
  }
}
