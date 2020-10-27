import React, { Component } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AppRegistry,View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
      <View>

        {/* -------------------- 3 card views in row ------------------------------ */}
       <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, marginTop: -10, marginHorizontal:'5%' }}>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Clients</Text>
            <Text style={{ color: '#A6003D', fontSize: RFValue(20), fontFamily:'segoe-ui' }}>11,700</Text>
          </View>

         <View  style={{ width:'5%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D' ,fontFamily:'segoe-ui'}}>New Deals</Text>
            <Text style={{ color: '#C95E00', fontSize:  RFValue(20) , fontFamily:'segoe-ui'}}>12</Text>
          </View>

          <View  style={{ width:'5%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Orders</Text>
            <Text style={{ color: '#790A96', fontSize:  RFValue(20), fontFamily:'segoe-ui' }}>117</Text>
          </View>

      </View>

{/* ------------------------------Horizontal line -------------------------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* ------------------------------big card view ----------------------------------------------  */}

<View style={styles.bigCardView}>
         
         {/* ------------------------------ row one  ----------------------------------------------  */}

         <View style={{flexDirection: 'row',  justifyContent:'space-between', marginLeft:'10%'}}>
       
            <View style={{ marginVertical: '5%', width: '40%'}}>
              <Text style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>All Orders</Text>
              <Text adjustsFontSizeToFit={true}  numberOfLines={1}style={{  color: '#000000' ,fontFamily:'segoe-ui'}}>224 Orders</Text>
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
<View style={{flexDirection: 'row' , marginHorizontal: '5%', marginVertical: '5%'}}>

<View>
<Text style={{fontFamily:'segoe-ui', fontSize:14}}> Sales Summary</Text>  
</View>
{/* ------------------------ right collapsible ----- */}
<View  style={{}}>

</View>

</View>

{/* ---------------Sales pie chart--------------------- */}
<View style={styles.bigCardView}>

<Text style={{textAlign:'center'}}>Sales Chart</Text>
<Pie

              radius={80}
              sections={[
                {
                  percentage: 42,
                  color: '#4012CD',
                },
                {
                  percentage: 14,
                  color: '#C70039',
                },

                {
                  percentage: 22,
                  color: '#44CD40',
                },
               
                {
                  percentage: 12,
                  color: '#EBD22F',
                },
                {
                  percentage: 10,
                  color: '#ffc0b4',
                },
              ]}
              strokeCap={'butt'}
              title={"Pie"}
            />


</View>
{/* ----------------------pie end ---------------------- */}
{/* -----------------------Bar chart */}
<View>
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
      <View style={{height:100}}></View>
      </ScrollView>
      // end view 
    );
  }

}


const styles = StyleSheet.create({

  cardView: {
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 30,
      paddingVertical: '1%',
      height: '60%',
      width: '30%',
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
      borderTopWidth: 1,
      marginTop: '5%',
      paddingTop: '2%',
      paddingBottom: '2%',
      width: '90%',
      alignSelf: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      flexDirection: 'column',
     },


})