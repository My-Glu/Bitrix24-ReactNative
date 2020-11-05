import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import RoundCheckbox from 'rn-round-checkbox';
import RoundCheckbox from 'react-native-round-checkbox';

export default class BottomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSelected: false
    };
  }

  render() {
    return (
      <View style={{marginTop:30}}>

<RoundCheckbox
            size={24}
            borderColor={'black'}
            backgroundColor={"#49641D"}
            iconColor={'white'}
            checked={this.state.isSelected}
            onValueChange={(newValue) => {this.setState({isSelected:true})}}
        />

       {/* <RoundCheckbox
  size={28}
  checked={this.state.isSelected}
  onValueChange={(newValue) => {this.setState({isSelected:true})}}
/> */}

      </View>
    );
  }
}










// import React, { Component } from 'react';  
// import { AppRegistry, ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';  
  
// export default class ScrolledViewExample extends Component {  
//     onPressButton() {  
//         alert('You clicked the button!')  
//     }  
  
//     render() {  
//         return (  
//           <ScrollView>
//             <ScrollView  horizontal={true} style={styles.container}>  
//                 <Text style={{fontSize:22, padding: 10}}>Horizontal ScrollView</Text>  
//                 <View style={[{ width: 220,height: 70,padding: 10 }]}>  
//                     <Button  
//                         onPress={this.onPressButton}  
//                         title="Button 1"  
//                         color="#FF3D00"  
//                     />  
//                 </View>  
//                 <Text style={{fontSize:22, padding: 10}}>javatpoint</Text>  
//                 <View style={[{ width: 220,height: 70,padding: 10 }]}>  
//                     <Button  
//                         onPress={this.onPressButton}  
//                         title="Button 2"  
//                         color="#3D00FF"  
//                     />  
//                 </View>  
//                 <Text style={{fontSize:22, padding: 10}}>React Native ScrollView Example</Text>  
//                 <View style={[{ width: 220,height: 70,padding: 10 }]}>  
//                     <Button  
//                         onPress={this.onPressButton}  
//                         title="Button 3"  
//                         color="#FFFF3D"  
//                     />  
//                 </View>  
//                 <Text style={{fontSize:22, padding: 10}}>If you like</Text>  
//                 <View style={[{ width: 220,height: 70,padding: 10 }]}>  
//                     <Button  
//                         onPress={this.onPressButton}  
//                         title="Button 4"  
//                         color="#FF3DFF"  
//                     />  
//                 </View>  
//                 <Text style={{fontSize:22, padding: 10}}>Scrolling horizontal</Text>  
//                 <View style={[{ width: 220,height: 70,padding: 10 }]}>  
//                     <Button  
//                         onPress={this.onPressButton}  
//                         title="Button 5"  
//                         color="#3DFF00"  
//                     />  
//                 </View>  
//             </ScrollView> 
// <View>
//             <Text style={{fontSize:20}}>Scroll me plz</Text>  
//                 <Button title={'Button 1'} onPress={this.onPressButton} />  
//                 <Text style={{fontSize:20}}>React Native Example of ScrollView</Text>  
//                 <Button title={'Button 2'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>React Native ScrollView Example</Text>  
//                 <Button title={'Button 3'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>If you like</Text>  
//                 <Button title={'Button 4'} onPress={this.onPressButton}/>  
//                 <Text style={{fontSize:20}}>Scrolling down</Text>  
//                 <Button title={'Button 5'} onPress={this.onPressButton}/>  
//                 </View>

//             </ScrollView>
//         );  
//     }  
// }  
// const styles = StyleSheet.create({  
//     container:{  
//         flex: 1,  
//     },  
// /*    buttonStyle:{ 
//         height: 50, 
//         width: 70, 
//     }*/  
// })  






// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";

// export default class BottomView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//       graphicData: [
//         { y: 10, x: '60%'},
//         { y: 90, x: '90%'},
//         { y: 50, x: '50%'},
//         { y: 20, x: '20%'},
//         { y: 70, x: '70%'},
//         ],
//         graphicColor: ['red', 'blue', 'yellow', 'green', 'tomato'],

//     };
//   }

//   render() {
//     return (
//       <View style={{ paddingHorizontal:'5%'}}>
//         <VictoryPie
// data={this.state.graphicData}
// colorScale={this.state.graphicColor}
// width={250}
// height={250}
// innerRadius={0}
// style={{
// labels: {
// fill: '#49641D',fontSize: 20, padding: 7,
// }, }}
// /> 
//       </View>
//     );
//   }
// }

