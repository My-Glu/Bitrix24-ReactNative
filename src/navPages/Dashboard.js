import React, { Component } from 'react';

import { AppRegistry,View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import PieChart from 'react-native-pie-chart';
// import Pie from 'react-native-pie';
// import {Surface, Shape} from '@react-native-community/art';


import Pie from 'react-native-pie';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

     return (

      <ScrollView>
      <View>

        {/* -------------------- 3 card views in row ------------------------------ */}
       <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, marginTop: -10, marginHorizontal:'5%' }}>
          <View style={styles.cardView}>
            <Text style={{ fontSize: 13, color: '#49641D' }}>New Clients</Text>
            <Text style={{ color: '#A6003D', fontSize: 20 }}>11,700</Text>
          </View>
         <View  style={{ width:'5%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: 13, color: '#49641D' }}>New Deals</Text>
            <Text style={{ color: '#C95E00', fontSize: 20 }}>12</Text>
          </View>
          <View  style={{ width:'5%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: 13, color: '#49641D' }}>New Orders</Text>
            <Text style={{ color: '#790A96', fontSize: 20 }}>117</Text>
          </View>

      </View>

{/* ------------------------------Horizontal line -------------------------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

{/* ------------------------------big card view ----------------------------------------------  */}

<View style={styles.bigCardView}>
         
         {/* ------------------------------ row one  ----------------------------------------------  */}

         <View style={{flexDirection: 'row',  justifyContent:'center'}}>
       
         <View style={{ marginVertical: '5%', width: '30%'}}>
              <Text style={{  color: '#49641D' }}>All Orders</Text>
              <Text style={{  fontSize: 20 ,color: '#000000'}}>224 Orders</Text>
            </View>
            <View  style={{ width:'20%'}}></View>
            <View style={{ marginVertical: '5%',  width: '30%'}}>
              <Text style={{  color: '#49641D' }}>Delivered</Text>
              <Text style={{  fontSize: 20 ,color: '#4EE15C'}}>22 Orders</Text>
            </View>

          </View>

        
    {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
  
      {/* ------------------------------second row ----------------------------------------------  */}

          <View style={{flexDirection: 'row',  justifyContent:'center'}}>
       
       <View style={{ marginVertical: '5%',  width: '30%'}}>
            <Text style={{  color: '#49641D' }}>In Process</Text>
            <Text style={{  fontSize: 20 ,color: '#C3BD00'}}>4 Orders</Text>
          </View>
          <View  style={{ width:'20%'}}></View>
          <View style={{ marginVertical: '5%',  width: '30%'}}>
            <Text style={{  color: '#49641D' }}>Canceled</Text>
            <Text style={{  fontSize: 20 ,color: '#EB3232'}}>10 Orders</Text>
          </View>
          
        </View>

               {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

          <View style={{ alignItems: 'center' , marginVertical: 10 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: '#3B86FF' }}>
                View All Deals
            </Text>
            </TouchableOpacity>
          </View>

        </View>

{/* ----------------------- sales summary---------------------- */}

<View>
<View style={{flexDirection: 'row' , marginHorizontal: '5%', marginVertical: '5%'}}>

<View>
<Text> Sales Summary</Text>  
</View>
{/* ------------------------ right collapsible ----- */}
<View  style={{}}>

</View>

</View>

{/* ---------------Sales pie chart--------------------- */}
<View style={styles.bigCardView}>

<Pie
              radius={80}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            />

</View>


</View>

      </View>

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
      width: 100,
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