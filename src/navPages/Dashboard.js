import React, { Component } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AppRegistry,View, Text,Button, StyleSheet, FlatList,TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-community/picker' 
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
// import PieChart from 'react-native-pie-chart';
// import Pie from 'react-native-pie';
// import {Surface, Shape} from '@react-native-community/art';
// import {Bar} from 'react-native-pathjs-charts';

// import {
 
//   BarChart,
//   PieChart,
 
// } from 'react-native-chart-kit'

import Pie from 'react-native-pie';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      graphicData: [
        { y: 42, x: 'In Process 42%'},
        { y: 22, x: 'Develop 22%'},
        { y: 10, x: 'Proposal 10%'},
        { y: 24, x: 'CLosed 24%'},
        { y: 12, x: 'Qualify 12%'},
        ],
        graphicColor: ['indigo', 'blue', 'yellow', 'green', 'tomato'],
graphicDataBar: [
        { y: 42, x: 'Mon'},
        { y: 22, x: 'Tue'},
        { y: 10, x: 'Wed'},
        { y: 24, x: 'Th'},
        { y: 12, x: 'Fri'},
        { y: 20, x: 'Sat'},
        { y: 16, x: 'Sun'},
        ],

    };
  }
// goToOrderDetails

   render() {

    // const barData = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    //   datasets: [
    //     {
    //       data: [20, 45, 28, 80, 99, 43],
    //     },
    //   ],
    // };
   
    //   let data = [
    //     [{
    //       "v": 49,
    //       "name": "apple"
    //     }, {
    //       "v": 42,
    //       "name": "apple"
    //     }],
    //     [{
    //       "v": 69,
    //       "name": "banana"
    //     }, {
    //       "v": 62,
    //       "name": "banana"
    //     }],
    //     [{
    //       "v": 29,
    //       "name": "grape"
    //     }, {
    //       "v": 15,
    //       "name": "grape"
    //     }]
    //   ]



    // let options = {
    //   width: 300,
    //   height: 300,
    //   margin: {
    //     top: 20,
    //     left: 25,
    //     bottom: 50,
    //     right: 20
    //   },
    //   color: '#2980B9',
    //   gutter: 20,
    //   animate: {
    //     type: 'oneByOne',
    //     duration: 200,
    //     fillTransition: 3
    //   },
    //   axisX: {
    //     showAxis: true,
    //     showLines: true,
    //     showLabels: true,
    //     showTicks: true,
    //     zeroAxis: false,
    //     orient: 'bottom',
    //     label: {
    //       fontFamily: 'Arial',
    //       fontSize: 8,
    //       fontWeight: true,
    //       fill: '#34495E'
    //     }
    //   },
    //   axisY: {
    //     showAxis: true,
    //     showLines: true,
    //     showLabels: true,
    //     showTicks: true,
    //     zeroAxis: false,
    //     orient: 'left',
    //     label: {
    //       fontFamily: 'Arial',
    //       fontSize: 8,
    //       fontWeight: true,
    //       fill: '#34495E'
    //     }
    //   }
    // }
  

     return (

      <ScrollView>
        
      <ScrollView  horizontal={true}
      // style={styles.container}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      >

{/* <View>
<FlatList  horizontal={true}
                    data={[  
                        {title: 'New Clients'},{title: 'New Deals'}, {title: 'New Orders'},{title: 'New Chats'},  
                        {title: 'New Leads '},  {title: 'New Employees'}, 
                    ]} 

                    renderItem={({item}) =>  
                    <View >
                      <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Clients</Text>
            <Text style={{ color: '#A6003D', fontSize: RFValue(20), fontFamily:'segoe-ui' }}>11,700</Text>
          </View>
                     
                      </View>
                
                    }
                   />
                      </View> */}
        {/* -------------------- 3 card views in row ------------------------------ */}
       {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, marginTop: -10, marginHorizontal:'5%' }}> */}
       <View  style={{ width:'1%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Clients</Text>
            <Text style={{ color: '#A6003D', fontSize: RFValue(20), fontFamily:'segoe-ui' }}>11,700</Text>
          </View>

         <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D' ,fontFamily:'segoe-ui'}}>New Deals</Text>
            <Text style={{ color: '#C95E00', fontSize:  RFValue(20) , fontFamily:'segoe-ui'}}>112</Text>
          </View>

          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Orders</Text>
            <Text style={{ color: '#790A96', fontSize:  RFValue(20), fontFamily:'segoe-ui' }}>117</Text>
          </View>

          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Chats</Text>
            <Text style={{ color: '#790A96', fontSize:  RFValue(20), fontFamily:'segoe-ui' }}>6</Text>
          </View>

          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Leads</Text>
            <Text style={{ color: '#790A96', fontSize:  RFValue(20), fontFamily:'segoe-ui' }}>12</Text>
          </View>

          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Employees</Text>
            <Text style={{ color: '#790A96', fontSize:  RFValue(20), fontFamily:'segoe-ui' }}>3</Text>
          </View>
          <View  style={{ width:'1%'}}></View>
      {/* </View> */}
      </ScrollView>
      <View>
{/* ------------------------------Horizontal line -------------------------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'2%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* ------------------------------big card view ----------------------------------------------  */}

<View style={styles.bigCardView}>
         
         {/* ------------------------------ row one  ----------------------------------------------  */}

         <View style={{flexDirection: 'row',  justifyContent:'space-between', marginLeft:'10%'}}>
       
            <View style={{ marginVertical: '5%', width: '40%'}}>
              <Text style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>All Orders</Text>
              <Text adjustsFontSizeToFit={true}  style={{  color: '#000000' ,fontFamily:'segoe-ui'}}>224 Orders</Text>
              {/* <Text style={{  fontSize:   deviceHeight*0.02 ,color: '#000000',fontFamily:'segoe-ui'}}>Orders</Text> */}
            </View>

            <View  style={{ width:'20%'}}></View>

            <View style={{ marginVertical: '5%',  width: '40%'}}>
              <Text style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>Delivered</Text>
              <Text adjustsFontSizeToFit
              numberOfLines={1} style={{  color: '#4EE15C',fontFamily:'segoe-ui', }}>22 Orders</Text>
              {/* <Text style={{  fontSize:   deviceHeight*0.02 ,color: '#4EE15C',fontFamily:'segoe-ui'}}>Orders</Text> */}
            </View>

          </View>

        
    {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
  
      {/* ------------------------------second row ----------------------------------------------  */}

          <View style={{flexDirection: 'row',  justifyContent:'space-between', marginLeft:'10%'}}>
       
       <View style={{ marginVertical: '5%',  width: '40%', flexDirection: 'column',}}>
            <Text style={{  color: '#49641D',fontFamily:'segoe-ui', fontSize:RFValue(12) }}>In Process</Text>
            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ color: '#C3BD00',fontFamily:'segoe-ui'}}>4 Orders</Text>
            {/* <Text style={{  fontSize:   deviceHeight*0.02 ,color: '#C3BD00',fontFamily:'segoe-ui'}}>Orders</Text> */}
          </View>
          <View  style={{ width:'20%'}}></View>
          <View style={{ marginVertical: '5%',  width: '40%', flexDirection: 'column',}}>
            <Text style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>Canceled</Text>
            <Text  adjustsFontSizeToFit={true} numberOfLines={1} style={{    color: '#EB3232',fontFamily:'segoe-ui'}}>10 Orders</Text>
            {/* <Text style={{  fontSize:   deviceHeight*0.02 ,color: '#EB3232',fontFamily:'segoe-ui'}}>Orders</Text> */}
          </View>
          
        </View>

               {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

          <View style={{ alignItems: 'center' , marginVertical: 10 }}>
            <TouchableOpacity
            onPress={this.goToOrderDetails}
            >
              <Text style={{ fontSize: RFValue(11), color: '#3B86FF',fontFamily:'segoe-ui' }}>
                View Order Details
            </Text>
            </TouchableOpacity>
          </View>
        </View>

{/* ----------------------- sales summary---------------------- */}

<View>
<View style={{flexDirection: 'row' , marginHorizontal: '5%', marginVertical: '5%', justifyContent: 'space-between'}}>


<Text style={{fontFamily:'segoe-ui', fontSize:14}}> Sales Summary</Text>  

{/* ------------------------ right collapsible ----- */}

<Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="This year" value="current" />  
                    <Picker.Item label="Last year" value="js" />  
                    <Picker.Item label="Last 6 months" value="rn" />  
                </Picker>  
</View>



{/* ---------------Sales pie chart--------------------- */}
<View style={styles.bigCardView}>

<Text style={{textAlign:'left', fontSize:20, alignSelf:'flex-start', marginLeft:'5%',}}>Sales Chart</Text>
<View style={{ paddingHorizontal:'1%'}}>
        <VictoryPie
data={this.state.graphicData}
colorScale={this.state.graphicColor}
width={330}
height={270}
innerRadius={0}
style={{
labels: {
fill: '#49641D',fontSize: 11, padding: 5,
}, }}
/> 
      </View>

</View>
{/* ----------------------pie end ---------------------- */}
{/* -----------------------Bar chart */}
<View>

<View style={styles.bigCardView}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:'5%'}}>
  <View>
<Text style={{textAlign:'left', fontSize:20, fontFamily:'segoe-ui', }}>Overall Sales</Text>
</View>
<View style={{width:deviceWidth*0.25}}></View>
<View style={{borderWidth:1,borderColor:'#C0C0C0',  height:25,width:'35%',  justifyContent: 'center',  }}>

<Picker   
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Lahore" value="lhr" />  
                    <Picker.Item label="Karachi" value="khi" />  
                    {/* <Picker.Item label="React Native" value="rn" />   */}
                </Picker>
                
                </View>

</View>
<VictoryChart
  theme={VictoryTheme.material}
  domainPadding={10}
>
<VictoryBar domainPadding={10}
data={this.state.graphicDataBar}
// colorScale={this.state.graphicColor}
style={{ data: { fill: "#6DB65B" } }}
width={400}
height={300}

// style={{
// labels: {
// fill: '#6DB65B',fontSize: 11, padding: 5,
// }, }}
/> 
</VictoryChart>
</View>



{/* <BarChart
    // style={graphStyle}
    data={barData}
    width={screenWidth}
    height={320}
    yAxisLabel={'$'}
    chartConfig={chartConfig}
/> */}
 {/* <Bar data={data} options={options} accessorKey='v'/> */}

</View>
{/* bar chart end ---------------- */}

</View>

      </View>
      <View style={{height:70}}></View>
      </ScrollView>
      // end view 
    );
  }

}


const styles = StyleSheet.create({

  cardView: {
    // flex:1,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: '2%',
      paddingTop: '1%',
      paddingBottom:'1%',
      marginBottom:'2%',
      height: '80%',
      width: 90,
      backgroundColor: 'white',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    bigCardView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopColor: 'grey',
      borderTopWidth: 0,
      marginTop: '5%',
      paddingTop: '2%',
      paddingBottom: '2%',
      width: '92%',
      alignSelf: 'center',
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.02,
      shadowRadius: 1,
      flexDirection: 'column',
     }, 
     pickerStyle:{  
      height: 30,  
      width: "40%",  
      color: '#344953',  
      justifyContent: 'center',  
  } ,   container:{  
    flex: 1,  
    marginLeft:'1%'
},  


})